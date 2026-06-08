import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { portfolioData } from "../../data/portfolio.data";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import GradientText from "../ui/GradientText";

// Marquee Component for tools or secondary skills
const Marquee = ({ items, reverse = false }: { items: any[]; reverse?: boolean }) => {
  return (
    <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-4 min-w-max pr-4 py-2"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {/* Duplicate items to create seamless loop. 4 copies ensure enough width for large screens. */}
        {[...items, ...items, ...items, ...items].map((skill, idx) => {
          const IconComponent = (SiIcons as Record<string, React.ComponentType<{ className?: string }>>)[skill.icon];
          return (
            <div
              key={`${skill.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl glass border border-white/5 bg-white/5 whitespace-nowrap hover:bg-white/10 transition-colors"
            >
              {IconComponent && <IconComponent className="w-5 h-5 text-blush" />}
              <span className="text-sm font-medium text-white/90">{skill.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const { skills } = portfolioData;
  const { ref, staggerContainer, staggerItem } = useScrollAnimation();

  return (
    <section id="skills" className="relative py-14 md:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-mauve/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16 md:mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6 shadow-xl shadow-mauve/5">
            <span className="w-2 h-2 rounded-full bg-blush animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-mauve">Technical Prowess</span>
          </motion.div>
          
          <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-display font-bold mb-6">
            <GradientText>My Digital Arsenal</GradientText>
          </motion.h2>
          
          <motion.p variants={staggerItem} className="text-mauve/80 max-w-2xl mx-auto text-lg md:text-xl">
            Crafting digital experiences with a modern tech stack. I blend design with engineering to build performant, beautiful applications.
          </motion.p>
        </motion.div>

        {/* Bento Box Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Focus: Frontend (Spans 8 columns) */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-8 glass rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blush/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Frontend Development</h3>
                <p className="text-mauve/70 mb-8 max-w-md">Building responsive, accessible, and highly interactive user interfaces.</p>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {skills.frontend.map((skill, idx) => {
                    const IconComponent = (SiIcons as Record<string, React.ComponentType<{ className?: string }>>)[skill.icon];
                    return (
                      <motion.div 
                        key={skill.name}
                        className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col gap-4 group/item cursor-default"
                        whileHover={{ y: -4, scale: 1.02 }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mauve/20 to-blush/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          {IconComponent && <IconComponent className="w-6 h-6 text-blush" />}
                        </div>
                        <div>
                          <h4 className="text-base font-medium text-white/90">{skill.name}</h4>
                          <div className="w-full h-1.5 bg-navy rounded-full mt-3 overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-mauve to-blush rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Backend Box (Spans 4 columns) */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-4 glass rounded-[2rem] p-8 border border-white/5 relative overflow-hidden flex flex-col group hover:border-white/10 transition-colors"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo/20 blur-[60px] rounded-full group-hover:bg-mauve/20 transition-colors duration-700" />
            
            <div className="relative z-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Backend</h3>
              <p className="text-mauve/70 mb-8">Architecting robust server-side solutions and REST APIs.</p>
              
              <div className="flex-1 flex flex-col gap-4 justify-center">
                {skills.backend.map((skill) => {
                  const IconComponent = (SiIcons as Record<string, React.ComponentType<{ className?: string }>>)[skill.icon];
                  return (
                    <div key={skill.name} className="flex items-center justify-between group/item p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover/item:bg-white/10 transition-colors">
                          {IconComponent && <IconComponent className="w-4 h-4 text-mauve group-hover/item:text-blush transition-colors" />}
                        </div>
                        <span className="text-sm font-medium text-white/80 group-hover/item:text-white transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-mauve/50 group-hover/item:text-blush/80 transition-colors">{skill.level}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Tools & Workflow (Spans 12 columns, uses Marquee) */}
          <motion.div 
            variants={staggerItem}
            className="md:col-span-12 glass rounded-[2rem] py-10 border border-white/5 flex flex-col items-center justify-center overflow-hidden relative group hover:border-white/10 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
            <div className="relative z-10 w-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">Tools & Workflow</h3>
                <p className="text-mauve/70 max-w-lg mx-auto text-sm">The utilities and environments that power my daily development process.</p>
              </div>
              
              <div className="flex flex-col gap-4">
                <Marquee items={skills.tools} />
                <Marquee items={[...skills.frontend, ...skills.backend].sort(() => 0.5 - Math.random()).slice(0, 8)} reverse />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
