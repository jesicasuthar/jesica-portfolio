import { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
}

export function InteractiveHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 480);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates with easing
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - width / 2;
      const clientY = e.clientY - rect.top - height / 2;
      targetRotY = (clientX / width) * 1.2;
      targetRotX = -(clientY / height) * 1.2;
      mouseX = clientX;
      mouseY = clientY;
    };

    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Generate 3D sphere & neural cluster points
    const points: Point3D[] = [];
    const numPoints = 64;
    const radius = Math.min(width, height) * 0.38;

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;

      // Add a slight algorithmic perturbation for organic AI feel
      const r = radius * (0.85 + 0.3 * Math.sin(i * 1.5));
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);

      const isHub = i % 7 === 0;
      points.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: isHub ? 3.5 : 2,
        color: isHub ? '#38bdf8' : i % 3 === 0 ? '#5eead4' : '#818cf8'
      });
    }

    let time = 0;

    const render = () => {
      time += 0.008;

      // Smooth camera rotation interpolation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const currentRotY = rotY + time * 0.4;
      const currentRotX = rotX + Math.sin(time * 0.5) * 0.15;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 380;

      // Project 3D points to 2D
      const projected = points.map((p) => {
        // Rotate around Y
        let cosY = Math.cos(currentRotY);
        let sinY = Math.sin(currentRotY);
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate around X
        let cosX = Math.cos(currentRotX);
        let sinX = Math.sin(currentRotX);
        let y2 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        // Perspective projection
        const scale = fov / (fov + z2 + radius * 1.4);
        const x2D = cx + x1 * scale;
        const y2D = cy + y2 * scale;
        const alpha = Math.max(0.12, Math.min(1, (z2 + radius) / (2 * radius)));

        return {
          x: x2D,
          y: y2D,
          z: z2,
          scale,
          alpha,
          color: p.color,
          size: p.size * scale
        };
      });

      // Draw connective neural synapse lines
      ctx.lineWidth = 0.8;
      const maxDist = 95;

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.22 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      projected.sort((a, b) => a.z - b.z); // Render back-to-front
      for (const p of projected) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Subtle glow aura on prominent hubs
        if (p.size > 2.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // Draw subtle orbital ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(currentRotY * 0.6);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.15, radius * 0.35, currentRotX * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="canvas-wrapper" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-interactive-canvas" />
      <div className="canvas-glow-overlay" />
      <div className="canvas-badge-tag">
        <span className="live-pulse" />
        <code>NEURAL_SYNAPSE_CORE // V3.2</code>
      </div>
    </div>
  );
}
