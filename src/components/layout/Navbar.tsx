import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../../data/portfolio.data";
import { useMobile } from "../../hooks/useMobile";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMobile(768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-xl border-b border-blush/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <GradientText as="span" className="text-2xl md:text-3xl font-display font-bold">
            Aria
          </GradientText>
        </ScrollLink>

        {isMobile ? (
          <>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-blush"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>

            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-16 left-0 right-0 glass border-b border-blush/10"
                >
                  <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                      <ScrollLink
                        key={link.to}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        onClick={() => setMobileOpen(false)}
                        className="text-blush/70 hover:text-blush transition-colors py-2"
                        activeClass="text-blush font-medium"
                        spy={true}
                        offset={-80}
                      >
                        {link.label}
                      </ScrollLink>
                    ))}
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      onClick={() => setMobileOpen(false)}
                    >
                      <MagneticButton variant="primary" className="w-full">
                        Hire Me
                      </MagneticButton>
                    </ScrollLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-blush"
                className="text-blush/60 hover:text-blush transition-colors duration-300 cursor-pointer relative group text-sm"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blush to-mauve group-hover:w-full transition-all duration-300" />
              </ScrollLink>
            ))}
            <ScrollLink to="contact" smooth={true} duration={500}>
              <MagneticButton variant="primary" className="px-5 py-2.5 text-sm">
                Hire Me
              </MagneticButton>
            </ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
}
