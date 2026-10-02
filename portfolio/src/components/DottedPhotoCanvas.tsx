import { useEffect, useRef, useState } from 'react';

interface DottedPhotoCanvasProps {
  src: string;
  alt: string;
  dotSpacing?: number;
  dotRadius?: number;
  width?: number;
  height?: number;
}

export function DottedPhotoCanvas({
  src,
  alt,
  dotSpacing = 8,
  dotRadius = 2.8,
  width = 380,
  height = 420,
}: DottedPhotoCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const animFrameRef = useRef<number>(0);
  const dotsRef = useRef<{ x: number; y: number; r: number; ox: number; oy: number; vx: number; vy: number; color: string }[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      // ── Sample the image ──────────────────────────────────
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext('2d')!;

      // Draw image cover-cropped into the sample canvas
      const scale = Math.max(width / img.width, height / img.height);
      const sw = img.width * scale;
      const sh = img.height * scale;
      const sx = (width - sw) / 2;
      const sy = (height - sh) / 2;
      offCtx.drawImage(img, sx, sy, sw, sh);

      const imageData = offCtx.getImageData(0, 0, width, height);
      const px = imageData.data;

      const dots: typeof dotsRef.current = [];

      for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
        for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
          const idx = (Math.round(y) * width + Math.round(x)) * 4;
          const r = px[idx];
          const g = px[idx + 1];
          const b = px[idx + 2];
          const a = px[idx + 3];
          if (a < 20) continue; // skip transparent

          // Size dots by brightness — brighter = bigger dot
          const brightness = (r + g + b) / 765;
          const radius = dotRadius * (0.45 + brightness * 0.8);

          dots.push({
            x,
            y,
            r: radius,
            ox: x,
            oy: y,
            vx: 0,
            vy: 0,
            color: `rgba(${r},${g},${b},0.92)`,
          });
        }
      }

      dotsRef.current = dots;
      setLoaded(true);
    };

    img.onerror = () => {
      // Draw elegant monogram fallback if photo missing
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#0a0f1e';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `italic ${Math.floor(width * 0.35)}px Instrument Serif, Georgia, serif`;
      ctx.fillStyle = '#38bdf8';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('JS', width / 2, height / 2);
    };
  }, [src, dotSpacing, dotRadius, width, height]);

  // ── Render loop ────────────────────────────────────────────
  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const REPEL_RADIUS = 80;
    const REPEL_STRENGTH = 1.8;
    const RETURN_SPEED = 0.08;
    const FRICTION = 0.78;

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const dot of dotsRef.current) {
        if (hovered) {
          // Mouse repel physics
          const dx = dot.x - mx;
          const dy = dot.y - my;
          const dist = Math.hypot(dx, dy);

          if (dist < REPEL_RADIUS) {
            const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
            dot.vx += (dx / dist) * force * REPEL_STRENGTH;
            dot.vy += (dy / dist) * force * REPEL_STRENGTH;
          }

          // Spring return
          dot.vx += (dot.ox - dot.x) * RETURN_SPEED;
          dot.vy += (dot.oy - dot.y) * RETURN_SPEED;
          dot.vx *= FRICTION;
          dot.vy *= FRICTION;
          dot.x += dot.vx;
          dot.y += dot.vy;
        } else {
          // Gentle drift back when not hovered
          dot.x += (dot.ox - dot.x) * 0.12;
          dot.y += (dot.oy - dot.y) * 0.12;
          dot.vx *= 0.6;
          dot.vy *= 0.6;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    animFrameRef.current = raf;

    return () => cancelAnimationFrame(raf);
  }, [loaded, hovered, width, height]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  return (
    <div className="dotted-photo-container" aria-label={alt}>
      <canvas
        ref={canvasRef}
        className="dotted-photo-canvas"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        role="img"
        aria-label={alt}
      />
      {/* Subtle corner decorations */}
      <span className="dot-corner dot-corner-tl" aria-hidden="true" />
      <span className="dot-corner dot-corner-br" aria-hidden="true" />
    </div>
  );
}
