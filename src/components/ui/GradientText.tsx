import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export default function GradientText({ children, className = "", as: Tag = "span" }: GradientTextProps) {
  return (
    <Tag className={`bg-gradient-to-r from-blush to-mauve bg-clip-text text-transparent ${className}`}>
      {children}
    </Tag>
  );
}
