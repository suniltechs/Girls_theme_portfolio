import { motion } from "framer-motion";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-full glass text-mauve hover:text-blush hover:border-blush/30 transition-colors duration-300"
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}
