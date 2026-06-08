import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from "react-icons/fi";
import { navLinks, portfolioData } from "../../data/portfolio.data";
import GradientText from "../ui/GradientText";
import SocialLink from "../ui/SocialLink";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy overflow-hidden mt-12">
      {/* Dynamic top border glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blush/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[80px] bg-blush/10 blur-[80px] rounded-full pointer-events-none" />


      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
           {/* Column 1: Brand & Slogan */}
            <div className="lg:col-span-2 pr-0 lg:pr-12">
              <button onClick={scrollToTop} className="cursor-pointer mb-6 group text-left">
                <GradientText as="h2" className="text-4xl md:text-5xl font-display font-bold group-hover:scale-105 transition-transform duration-500 origin-left inline-block">
                  {personal.name}
                </GradientText>
              </button>
              <p className="text-mauve/80 max-w-sm text-base leading-relaxed mb-6">
               Building digital experiences that combine stunning aesthetic design with robust engineering.
             </p>
             <div className="flex items-center gap-3">
               <SocialLink href={personal.github} label="GitHub" icon={<FiGithub className="w-5 h-5" />} />
               <SocialLink href={personal.linkedin} label="LinkedIn" icon={<FiLinkedin className="w-5 h-5" />} />
               <SocialLink href={personal.twitter} label="Twitter" icon={<FiTwitter className="w-5 h-5" />} />
               <SocialLink href={`mailto:${personal.email}`} label="Email" icon={<FiMail className="w-5 h-5" />} />
             </div>
           </div>

           {/* Column 2: Navigation */}
           <div>
              <h3 className="text-white font-display font-bold text-base mb-4">Navigation</h3>
              <ul className="space-y-3">
               {navLinks.map((link) => (
                 <li key={link.to}>
                   <ScrollLink
                     to={link.to}
                     smooth={true}
                     duration={500}
                     spy={true}
                     offset={-80}
                     className="text-mauve hover:text-blush transition-colors text-sm cursor-pointer inline-flex flex-col group"
                   >
                     {link.label}
                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-blush/50 mt-0.5"></span>
                   </ScrollLink>
                 </li>
               ))}
             </ul>
           </div>

           {/* Column 3: Top Skills */}
           <div>
              <h3 className="text-white font-display font-bold text-base mb-4">Top Skills</h3>
              <ul className="space-y-3">
               {portfolioData.skills.frontend.slice(0, 4).map((skill) => (
                 <li key={skill.name}>
                   <span className="text-mauve/70 text-sm font-mono hover:text-blush transition-colors cursor-default">
                     {skill.name}
                   </span>
                 </li>
               ))}
               <li>
                 <span className="text-mauve/70 text-sm font-mono hover:text-blush transition-colors cursor-default">
                   {portfolioData.skills.backend[0].name}
                 </span>
               </li>
             </ul>
           </div>

           {/* Column 4: Contact Directly */}
           <div>
              <h3 className="text-white font-display font-bold text-base mb-4">Contact</h3>
              <ul className="space-y-3">
               <li>
                 <a href={`mailto:${personal.email}`} className="text-mauve hover:text-blush transition-colors text-sm inline-flex flex-col group">
                   {personal.email}
                   <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-blush/50 mt-0.5"></span>
                 </a>
               </li>
               <li>
                 <div className="flex items-center gap-2 mt-2">
                   <div className="relative flex h-2 w-2">
                     <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${personal.availability ? 'bg-green-400' : 'bg-orange-400'}`}></span>
                     <span className={`relative inline-flex rounded-full h-2 w-2 ${personal.availability ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                   </div>
                   <span className="text-mauve/70 text-sm font-mono">
                     {personal.availability ? "Available for work" : "Currently busy"}
                   </span>
                 </div>
               </li>
               <li>
                 <p className="text-mauve/70 text-sm font-mono mt-1">{personal.location}</p>
               </li>
             </ul>
           </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-mauve/70 text-sm">
             &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
           </p>
           
           <p className="text-mauve/70 text-sm flex items-center gap-1.5">
             Designed &amp; Built with <span className="text-blush animate-pulse">❤</span>
           </p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blush z-50 hover:bg-white/10 transition-colors shadow-2xl shadow-blush/5"
        whileHover={{ y: -5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
