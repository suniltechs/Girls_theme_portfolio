import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "../../types";

interface ProjectCardProps extends Project {
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  featured,
  liveUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      className={`group relative glass rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/10 transition-colors col-span-1 flex flex-col`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blush/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image Container */}
      <div className="relative overflow-hidden h-56 md:h-64 w-full p-2">
        <div className="w-full h-full relative rounded-[1.5rem] overflow-hidden bg-navy/50">
           <img
             src={image}
             alt={title}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
           
           {/* Hover Actions - Slide in from bottom */}
           <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-navy/60 backdrop-blur-md transition-all duration-300">
             <motion.a
               href={liveUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="p-4 rounded-full bg-blush text-navy hover:scale-110 transition-transform shadow-lg shadow-blush/20"
               whileHover={{ y: -2 }}
               aria-label={`View ${title} live`}
             >
               <FiExternalLink className="w-5 h-5" />
             </motion.a>
             <motion.a
               href={githubUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all shadow-lg border border-white/10"
               whileHover={{ y: -2 }}
               aria-label={`View ${title} source code`}
             >
               <FiGithub className="w-5 h-5" />
             </motion.a>
           </div>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
        <div className="flex items-start justify-between mb-4 gap-4">
          <h3 className="font-display font-bold text-white group-hover:text-blush transition-colors text-xl md:text-2xl">
            {title}
          </h3>
          {featured && (
            <span className="shrink-0 text-xs px-3 py-1 rounded-full bg-blush/10 text-blush border border-blush/20 font-medium tracking-wide">
              Featured
            </span>
          )}
        </div>
        <p className="text-mauve/80 text-sm md:text-base leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
