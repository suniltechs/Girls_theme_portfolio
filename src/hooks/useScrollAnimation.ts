import { useInView } from "react-intersection-observer";
import type { Variants } from "framer-motion";

export function useScrollAnimation() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const sharedTransition = { duration: 0.6, ease: "easeOut" as const };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: sharedTransition },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: sharedTransition },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: sharedTransition },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return {
    ref,
    inView,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    staggerItem,
    scaleIn,
  };
}
