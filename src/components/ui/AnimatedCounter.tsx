import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = "", label, duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-sm text-mauve mt-1">{label}</div>
    </div>
  );
}
