import { useRef, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  onClick,
  href,
  download,
  target,
  rel,
  variant = "primary",
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    posRef.current = { x, y };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafRef.current);
    if (ref.current) {
      ref.current.style.transform = "translate3d(0, 0, 0)";
    }
  };

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors duration-300 overflow-hidden will-change-transform";

  const styleVariants = {
    primary:
      "bg-blush text-navy hover:bg-blush/90 shadow-lg shadow-blush/20",
    outline:
      "border border-blush/30 text-blush hover:bg-blush/10 hover:border-blush/50",
    ghost:
      "text-blush/70 hover:text-blush hover:bg-white/5",
  };

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${baseClasses} ${styleVariants[variant]} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${styleVariants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
