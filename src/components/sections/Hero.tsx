import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiStar } from "react-icons/fi";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { portfolioData } from "../../data/portfolio.data";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";
import SocialLink from "../ui/SocialLink";
import GlassCard from "../ui/GlassCard";

const sharedTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }; // smooth spring-like ease

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: sharedTransition },
};

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-x-clip"
    >
      {/* Abstract Background Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blush/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-indigo/40 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 relative z-20">
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blush/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blush"></span>
              </span>
              <span className="text-sm font-medium text-mauve">Welcome to my universe</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] font-display font-black leading-[1.1] tracking-tight flex flex-wrap items-center gap-3 md:gap-4">
                <GradientText>{personal.name.split(' ')[0]}</GradientText>
                <span className="text-transparent [-webkit-text-stroke:2px_#FF4D6D]">
                  {personal.name.split(' ')[1]}
                </span>
              </h1>
            </motion.div>

            {/* Type Animation Subhead */}
            <motion.div variants={itemVariants} className="h-8 md:h-10 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-blush/50" />
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", 2000,
                  "UI/UX Enthusiast", 2000,
                  "Digital Creator", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl text-mauve font-body font-light tracking-wide"
              />
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="text-mauve/80 text-lg max-w-xl leading-relaxed font-light">
              {personal.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
              <MagneticButton variant="primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                Explore My Work
              </MagneticButton>
              <a 
                href={personal.resumeUrl} 
                download 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-mauve hover:text-blush transition-colors font-medium relative overflow-hidden px-2 py-1"
              >
                <FiDownload className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                <span>Download CV</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blush scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </motion.div>

            {/* Socials & Mini Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 pt-8 w-full border-t border-white/5">
              <div className="flex items-center gap-4">
                <SocialLink href={personal.github} label="GitHub" icon={<FiGithub className="w-5 h-5" />} />
                <SocialLink href={personal.linkedin} label="LinkedIn" icon={<FiLinkedin className="w-5 h-5" />} />
                <SocialLink href={personal.twitter} label="Twitter" icon={<FiTwitter className="w-5 h-5" />} />
                <SocialLink href={`mailto:${personal.email}`} label="Email" icon={<FiMail className="w-5 h-5" />} />
              </div>
              
              <div className="hidden sm:block w-[1px] h-8 bg-white/10" />

              <div className="flex gap-6">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-xl font-display font-bold text-white">
                      {stat.value}<span className="text-blush">{stat.suffix}</span>
                    </span>
                    <span className="text-xs text-mauve/70 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image & Floating Cards */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center items-center">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-[380px] xl:max-w-[420px] mx-auto aspect-[4/5] z-10 group"
            >
              {/* Animated Glow Behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blush/40 via-indigo/40 to-blush/40 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 animate-pulse" style={{ animationDuration: '4s' }} />

              {/* Decorative Frame - Offset */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm z-0 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-8" />

              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/20 bg-navy shadow-2xl z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 via-navy/20 to-transparent" />
                
                {/* Inner glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Tech/Modern UI Elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-[3px] border-r-[3px] border-blush/80 rounded-tr-[3.25rem] z-20 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-blush pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-[3px] border-l-[3px] border-indigo/80 rounded-bl-[3.25rem] z-20 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-indigo pointer-events-none" />

              {/* Floating Element 1 - Top Left */}
              <motion.div 
                className="absolute top-10 -left-8 md:-left-16 z-30"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <GlassCard className="px-4 py-3 flex items-center gap-3 backdrop-blur-xl bg-white/10 shadow-2xl border-white/20 group-hover:bg-white/20 transition-colors">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blush blur-md opacity-50 rounded-full" />
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blush to-indigo flex items-center justify-center">
                      <FiStar className="text-white w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm tracking-wide">Top Rated</p>
                    <p className="text-xs text-mauve/80 font-medium">Developer</p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Floating Element 2 - Bottom Right */}
              <motion.div 
                className="absolute bottom-12 -right-4 md:-right-12 z-30"
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <GlassCard className="px-5 py-4 flex flex-col gap-1 backdrop-blur-xl bg-navy/80 shadow-2xl border-indigo/30 group-hover:border-blush/50 transition-colors">
                  <div className="flex items-baseline gap-1">
                    <p className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blush to-indigo">
                      {stats[0].value}
                    </p>
                    <span className="text-lg font-bold text-blush">{stats[0].suffix}</span>
                  </div>
                  <p className="text-[10px] text-mauve uppercase tracking-widest font-semibold">{stats[0].label}</p>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
