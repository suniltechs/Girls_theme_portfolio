import { motion } from "framer-motion";
import * as Icons from "react-icons/si";

interface TechBadgeProps {
  name: string;
  icon: string;
  level?: number;
  showLevel?: boolean;
}

export default function TechBadge({ name, icon, level, showLevel }: TechBadgeProps) {
  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[icon];

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass cursor-default"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {IconComponent && <IconComponent className="text-blush text-lg" />}
      <span className="text-sm font-medium text-blush/90">{name}</span>
      {showLevel && level !== undefined && (
        <span className="text-xs text-mauve ml-1">{level}%</span>
      )}
    </motion.div>
  );
}
