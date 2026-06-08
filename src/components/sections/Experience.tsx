import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiBriefcase, FiBookOpen, FiAward } from "react-icons/fi";
import { portfolioData } from "../../data/portfolio.data";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import GradientText from "../ui/GradientText";

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof portfolioData.experience)[0];
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative pl-12 md:pl-0 w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`md:flex items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Empty space for desktop layout */}
        <div className="hidden md:block w-5/12" />

        {/* Center Node */}
        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center mt-6 md:mt-0">
           <div className={`w-10 h-10 rounded-full border-4 border-navy z-10 flex items-center justify-center shadow-xl transition-colors duration-500 ${item.current ? 'bg-blush shadow-[0_0_15px_rgba(255,208,236,0.5)]' : 'bg-indigo/50 border-white/10'}`}>
              {item.type === "experience" ? (
                <FiBriefcase className={`w-4 h-4 ${item.current ? 'text-navy' : 'text-blush/70'}`} />
              ) : (
                <FiBookOpen className={`w-4 h-4 ${item.current ? 'text-navy' : 'text-blush/70'}`} />
              )}
           </div>
        </div>

        {/* Card */}
        <div className="w-full md:w-5/12 pb-12">
          <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-blush/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-blush/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             
             <div className="relative z-10">
               <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                 <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-mauve/90">
                   {item.period}
                 </span>
                 {item.current && (
                   <span className="inline-block px-3 py-1 rounded-full bg-blush/10 border border-blush/20 text-xs font-medium text-blush tracking-wide animate-pulse">
                     Present
                   </span>
                 )}
               </div>
               
               <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-blush transition-colors mb-2">
                 {item.title}
               </h3>
               
               <p className="text-blush/80 text-sm md:text-base font-medium mb-4 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-blush/50" />
                 {item.organization}
               </p>
               
               <p className="text-mauve/70 text-sm leading-relaxed">
                 {item.description}
               </p>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const { experience, certifications } = portfolioData;
  const { ref, staggerContainer, staggerItem } = useScrollAnimation();
  
  // Track scroll progress for the central line
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-14 md:py-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-mauve/5 rounded-full blur-[120px] pointer-events-none" />

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
            <span className="text-xs font-mono tracking-widest uppercase text-mauve">My Journey</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-display font-bold mb-6">
            <GradientText>Experience & Education</GradientText>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-mauve/80 max-w-2xl mx-auto text-lg md:text-xl">
            A timeline of my academic and professional career, constantly learning and growing.
          </motion.p>
        </motion.div>

        {/* Central Timeline */}
        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Static Background Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-4 bottom-12 w-0.5 bg-white/5 rounded-full" />
          
          {/* Animated Foreground Line */}
          <motion.div 
            className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-4 w-0.5 bg-gradient-to-b from-blush via-mauve to-transparent rounded-full origin-top z-0"
            style={{ height: lineHeight }}
          />

          <div className="relative z-10">
            {experience.map((item, index) => (
              <TimelineItem 
                key={`${item.title}-${index}`} 
                item={item} 
                index={index} 
              />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          className="mt-20 md:mt-32 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Licenses & Certifications
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blush to-mauve mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {certifications.map((cert) => (
              <motion.div 
                key={cert.name} 
                variants={staggerItem}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex items-center gap-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mauve/20 to-blush/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blush/5">
                  <FiAward className="w-6 h-6 text-blush" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white/90 group-hover:text-blush transition-colors leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-mauve mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
