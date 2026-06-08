import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${posRef.current.x - 100}px, ${posRef.current.y - 100}px, 0)`;
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block will-change-transform"
      style={{
        width: 200,
        height: 200,
        background:
          "radial-gradient(circle, rgba(255,208,236,0.08) 0%, rgba(129,104,157,0.04) 40%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
}
