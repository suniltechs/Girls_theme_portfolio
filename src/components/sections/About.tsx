import { motion } from "framer-motion";
import { MapPin, GraduationCap, Monitor, Coffee} from "lucide-react";
import { FiStar } from "react-icons/fi";
import { portfolioData } from "../../data/portfolio.data";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AnimatedCounter from "../ui/AnimatedCounter";
import GradientText from "../ui/GradientText";

export default function About() {
  const { personal, stats } = portfolioData;
  const { ref, staggerContainer, staggerItem } = useScrollAnimation();

  const funFacts = [
    { icon: MapPin, label: "Location", value: personal.location },
    { icon: GraduationCap, label: "University", value: "XYZ University" },
    { icon: Monitor, label: "Passion", value: "Web Development" },
    { icon: Coffee, label: "Fuel", value: "Tea > Coffee" },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Orbs */}
      {/* Background Orbs */}
      <div className="absolute -left-[20%] top-[20%] w-[500px] h-[500px] bg-blush/10 rounded-full blur-[120px] mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            className="lg:col-span-6 relative z-10 order-1 lg:order-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6 shadow-xl shadow-mauve/5">
              <span className="w-2 h-2 rounded-full bg-blush animate-pulse" />
              <span className="text-xs font-mono tracking-widest uppercase text-mauve">Who I Am</span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6"
            >
              <GradientText>About Me</GradientText>
            </motion.h2>

            <motion.div variants={staggerItem} className="space-y-4 text-mauve/90 font-light text-lg">
              <p className="leading-relaxed">
                Hey there! I&apos;m <span className="text-blush font-medium">{personal.name}</span>, a Computer Science student
                who loves building things for the web. I&apos;ve always been fascinated by how a few lines
                of code can turn into something beautiful and functional.
              </p>
              <p className="leading-relaxed">
                My journey started with curiosity and has grown into a full-blown passion. I specialize
                in modern web technologies, and I&apos;m always eager to learn something new. When I&apos;m not
                coding, you&apos;ll find me sketching UI concepts or exploring the latest tech trends.
              </p>
              <p className="leading-relaxed pb-2">
                Currently seeking opportunities where I can contribute, grow, and make an impact
                through clean code and thoughtful design.
              </p>
            </motion.div>
          </motion.div>

          {/* Image & Floating Elements */}
          <motion.div
            className="lg:col-span-6 mt-12 lg:mt-0 order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem} className="relative w-full max-w-[360px] md:max-w-[400px] mx-auto aspect-square md:aspect-[4/5]">
              {/* Decorative Offset Wireframe */}
              <div className="absolute inset-0 -translate-x-4 -translate-y-4 md:-translate-x-6 md:-translate-y-6 border border-blush/20 rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl md:rounded-tl-[6rem] md:rounded-br-[6rem] z-0" />
              
              {/* Glowing Offset Backdrop */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 bg-gradient-to-br from-indigo/40 to-blush/10 rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl md:rounded-tl-[6rem] md:rounded-br-[6rem] blur-xl z-0" />
              
              {/* Main Image Frame (Editorial Leaf Shape) */}
              <div className="absolute inset-0 rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl md:rounded-tl-[6rem] md:rounded-br-[6rem] border-2 border-white/10 bg-navy overflow-hidden z-10">
                <img
                  src={personal.aboutImage}
                  alt={`${personal.name} workspace`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              </div>

              {/* Status Badge */}
              <div className="absolute -top-4 right-4 md:right-8 z-20 px-4 py-2 rounded-full glass border-green-500/20 shadow-2xl inline-flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-green-400 text-xs font-medium">Open to Work</span>
              </div>

              {/* Floating Fun Facts Bento */}
              <motion.div 
                className="absolute -right-2 md:-right-10 -bottom-4 md:-bottom-6 p-5 glass shadow-2xl border border-blush/20 space-y-4 min-w-[200px] z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-display font-bold text-white text-base md:text-lg border-b border-white/10 pb-2">My Essentials</p>
                <div className="space-y-3">
                  {funFacts.map(fact => (
                    <div key={fact.label} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-blush/10 flex items-center justify-center shrink-0">
                        <fact.icon className="w-3.5 h-3.5 text-blush" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-mauve/70 font-medium">{fact.label}</span>
                        <span className="text-xs md:text-sm font-medium text-white">{fact.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20 pt-8 md:pt-10 border-t border-blush/10 relative"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-navy">
            <FiStar className="w-5 h-5 text-blush" />
          </div>
          
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem} className="text-center group">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} label={stat.label} />
              <div className="w-8 h-1 bg-blush/20 mx-auto mt-4 rounded-full group-hover:bg-blush transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
