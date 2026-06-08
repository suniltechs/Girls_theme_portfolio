import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`glass ${hover ? "glass-hover" : ""} ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
    >
      {children}
    </motion.div>
  );
}
