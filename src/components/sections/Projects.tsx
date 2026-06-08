import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { portfolioData } from "../../data/portfolio.data";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ProjectCard from "../ui/ProjectCard";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";
import type { Project } from "../../types";

const filters = [
  { key: "all", label: "All Projects" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full Stack" },
  { key: "backend", label: "Backend" },
] as const;

export default function Projects() {
  const [active, setActive] = useState<string>("all");
  const { projects } = portfolioData;
  const { ref, staggerContainer, staggerItem } = useScrollAnimation();

  const filtered: Project[] =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-14 md:py-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-32 right-0 w-[500px] h-[500px] bg-blush/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6 shadow-xl shadow-blush/5">
            <span className="w-2 h-2 rounded-full bg-mauve animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-blush">Portfolio</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-display font-bold mb-6">
            <GradientText>Featured Work</GradientText>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-mauve/80 max-w-2xl mx-auto text-lg">
            A selection of my recent projects, showcasing my expertise in building scalable, user-centric applications.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-12 md:mb-16 px-4 w-full"
        >
          <div className="glass p-1.5 rounded-full border border-white/5 flex flex-nowrap overflow-x-auto gap-1 relative z-20 w-full md:w-auto max-w-full justify-start md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth snap-x">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={(e) => {
                  setActive(f.key);
                  const container = e.currentTarget.parentElement;
                  if (container) {
                    const scrollLeft = e.currentTarget.offsetLeft - (container.offsetWidth / 2) + (e.currentTarget.offsetWidth / 2);
                    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                  }
                }}
                className={`relative px-5 md:px-6 py-2.5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 flex-shrink-0 snap-center ${
                  active === f.key
                    ? "text-navy"
                    : "text-mauve hover:text-white"
                }`}
              >
                {active === f.key && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-blush rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{f.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="relative min-h-[400px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, staggerChildren: 0.1 }}
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} {...project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <MagneticButton variant="outline">
              <span className="flex items-center gap-2">
                <FiGithub className="w-5 h-5" />
                Explore More on GitHub
              </span>
            </MagneticButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
