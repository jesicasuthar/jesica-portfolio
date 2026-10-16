
import { useEffect, useRef } from 'react';

interface DottedPhotoCanvasProps {
  /** Portrait image. Transparent PNG works best. */
  src: string;
  alt: string;
  dotSpacing?: number;
  dotRadius?: number;
  width?: number;
  height?: number;
  /** Fallback text color as "r,g,b". */
  color?: string;
}

interface Dot {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  lum: number;
  r: number;
  plus: boolean;
  phase: number;
  delay: number;
  sx: number;
  sy: number;
}

export function DottedPhotoCanvas({
  src,
  alt,
  dotSpacing = 7,
  dotRadius = 2.4,
  width = 340,
  height = 400,
  color = '139,255,232',
}: DottedPhotoCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const parsedColor = color
    .split(',')
    .map((value) => Number(value.trim()))
    .filter((value) => !Number.isNaN(value));

  const LIGHT =
    parsedColor.length === 3 &&
    parsedColor.every((value) => value >= 0 && value <= 255)
      ? ([parsedColor[0], parsedColor[1], parsedColor[2]] as const)
      : ([155, 249, 235] as const);

  const DARK = LIGHT.map((value) => Math.max(0, Math.round(value * 0.42))) as [number, number, number];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let dots: Dot[] = [];
    let raf = 0;
    let visible = true;
    let cancelled = false;

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
    };

    const start = performance.now();

    // Animation settings
    const REPEL_RADIUS = 70;
    const REPEL_FORCE = 2.2;
    const SPRING = 0.09;
    const FRICTION = 0.8;
    const INTRO_MS = 1800;

    const drawFrame = (now: number) => {
      if (cancelled) return;

      if (!reduceMotion) {
        raf = requestAnimationFrame(drawFrame);
      }

      if (!visible) return;

      const t = (now - start) / 1000;
      const intro = reduceMotion
        ? 1
        : Math.min(1, (now - start) / INTRO_MS);

      ctx.fillStyle = '#021d2d';
      ctx.fillRect(0, 0, width, height);

      for (const d of dots) {
        // Animate particles into their portrait positions
        const local = Math.min(
          1,
          Math.max(0, (intro - d.delay) / (1 - d.delay))
        );

        const ease = 1 - Math.pow(1 - local, 3);

        // Subtle flowing wave
        let wx = 0;
        let wy = 0;

        if (!reduceMotion) {
          wy =
            Math.sin(
              d.ox * 0.045 +
              d.oy * 0.02 +
              t * 1.5
            ) * 1.7 +
            Math.sin(t * 1.1 + d.phase) * 0.35;

          wx = Math.cos(d.oy * 0.04 + t * 1.2) * 0.9;
        }

        const tx = d.ox + wx;
        const ty = d.oy + wy;

        // Mouse repulsion and spring-back
        if (mouse.active && local >= 1) {
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;

          if (dist < REPEL_RADIUS) {
            const force =
              (REPEL_RADIUS - dist) / REPEL_RADIUS;

            d.vx += (dx / dist) * force * REPEL_FORCE;
            d.vy += (dy / dist) * force * REPEL_FORCE;
          }
        }

        d.vx += (tx - d.x) * SPRING;
        d.vy += (ty - d.y) * SPRING;

        d.vx *= FRICTION;
        d.vy *= FRICTION;

        d.x += d.vx;
        d.y += d.vy;

        // Map photo brightness to turquoise.
        // Dark photo regions become deep turquoise.
        // Bright photo regions become light turquoise.
        const mix = Math.min(1, Math.max(0, d.lum));

        const red = Math.round(
          DARK[0] + (LIGHT[0] - DARK[0]) * mix
        );

        const green = Math.round(
          DARK[1] + (LIGHT[1] - DARK[1]) * mix
        );

        const blue = Math.round(
          DARK[2] + (LIGHT[2] - DARK[2]) * mix
        );

        const alpha =
          (0.4 + d.lum * 0.6) *
          (0.25 + 0.75 * ease);

        // IMPORTANT: never use the original photo's RGB colors.
        ctx.fillStyle =
          `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(3)})`;

        if (d.plus) {
          const s = Math.min(d.r * 0.9, dotSpacing * 0.3);

          ctx.fillRect(d.x - s, d.y - 0.5, s * 2, 1);
          ctx.fillRect(d.x - 0.5, d.y - s, 1, s * 2);
        } else {
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // Load and sample the source portrait
    const img = new Image();
    img.src = src;

    img.onload = () => {
      if (cancelled) return;

      const off = document.createElement('canvas');
      off.width = width;
      off.height = height;

      const offCtx = off.getContext('2d', {
        willReadFrequently: true,
      });

      if (!offCtx) return;

      offCtx.imageSmoothingQuality = 'high';

      // Fit image inside the canvas, anchored at the bottom
      const scale = Math.min(
        width / img.width,
        height / img.height
      );

      const dw = img.width * scale;
      const dh = img.height * scale;

      offCtx.drawImage(
        img,
        (width - dw) / 2,
        height - dh,
        dw,
        dh
      );

      const pixels = offCtx.getImageData(
        0,
        0,
        width,
        height
      ).data;

      // Sample each grid cell
      const cell = Math.max(2, dotSpacing);

      const raw: {
        x: number;
        y: number;
        lum: number;
      }[] = [];

      for (let cy = 0; cy < height; cy += cell) {
        for (let cx = 0; cx < width; cx += cell) {
          let alphaSum = 0;
          let luminanceSum = 0;
          let count = 0;

          for (
            let y = cy;
            y < Math.min(cy + cell, height);
            y += 2
          ) {
            for (
              let x = cx;
              x < Math.min(cx + cell, width);
              x += 2
            ) {
              const i = (y * width + x) * 4;
              const a = pixels[i + 3] / 255;

              alphaSum += a;

              luminanceSum += (
                0.2126 * pixels[i] +
                0.7152 * pixels[i + 1] +
                0.0722 * pixels[i + 2]
              ) * a;

              count++;
            }
          }

          // Ignore transparent image areas
          if (
            count === 0 ||
            alphaSum / count < 0.5 ||
            alphaSum === 0
          ) {
            continue;
          }

          raw.push({
            x: cx + cell / 2,
            y: cy + cell / 2,
            lum: luminanceSum / alphaSum / 255,
          });
        }
      }

      if (raw.length === 0) {
        ctx.fillStyle = '#021d2d';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#8BFFE8';
        ctx.font =
          `italic ${Math.floor(width * 0.35)}px Georgia, serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('JS', width / 2, height / 2);
        return;
      }

      // Increase contrast so the face and hair remain recognizable
      const sorted = raw
        .map((p) => p.lum)
        .sort((a, b) => a - b);

      const lo = sorted[
        Math.floor(sorted.length * 0.04)
      ] ?? 0;

      const hi = sorted[
        Math.floor(sorted.length * 0.96)
      ] ?? 1;

      dots = raw.map((p) => {
        const normalized = Math.min(
          1,
          Math.max(0, (p.lum - lo) / (hi - lo || 1))
        );

        const lum = Math.pow(normalized, 1.15);
        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 220;

        return {
          ox: p.x,
          oy: p.y,
          x: p.x,
          y: p.y,
          vx: 0,
          vy: 0,
          lum,
          r: dotRadius * (0.38 + lum * 0.8),
          plus:
            lum > 0.9 &&
            (
              Math.round(p.x / dotSpacing) +
              Math.round(p.y / dotSpacing)
            ) % 2 === 0,
          phase: Math.random() * Math.PI * 2,
          delay: Math.random() * 0.55,
          sx: p.x + Math.cos(angle) * distance,
          sy: p.y + Math.sin(angle) * distance,
        };
      });

      // Start the animation
      if (reduceMotion) {
        drawFrame(performance.now());
      } else {
        raf = requestAnimationFrame(drawFrame);
      }
    };

    img.onerror = () => {
      if (cancelled) return;

      ctx.fillStyle = '#021d2d';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#8BFFE8';
      ctx.font =
        `italic ${Math.floor(width * 0.35)}px Georgia, serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('JS', width / 2, height / 2);
    };

    // Mouse interaction
    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      mouse.x = ((clientX - rect.left) / rect.width) * width;
      mouse.y = ((clientY - rect.top) / rect.height) * height;
      mouse.active = true;
    };

    const onMove = (e: PointerEvent) =>
      toLocal(e.clientX, e.clientY);

    const onLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerdown', onMove);
    canvas.addEventListener('pointerleave', onLeave);
    canvas.addEventListener('pointercancel', onLeave);

    // Pause animation outside the viewport
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });

    observer.observe(canvas);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      observer.disconnect();

      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerdown', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
      canvas.removeEventListener('pointercancel', onLeave);
    };
  }, [src, dotSpacing, dotRadius, width, height, color]);

  return (
    <div className="dotted-photo-container" aria-label={alt}>
      <canvas
        ref={canvasRef}
        className="dotted-photo-canvas"
        role="img"
        aria-label={alt}
      />

      <span
        className="dot-corner dot-corner-tl"
        aria-hidden="true"
      />

      <span
        className="dot-corner dot-corner-br"
        aria-hidden="true"
      />
    </div>
  );
}
