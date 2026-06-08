import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiMail, FiGithub, FiLinkedin, FiMapPin, FiArrowRight } from "react-icons/fi";
import { portfolioData } from "../../data/portfolio.data";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";

export default function Contact() {
  const { personal } = portfolioData;
  const { ref, staggerContainer, staggerItem } = useScrollAnimation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const contactInfo = [
    { icon: <FiMail className="w-5 h-5" />, label: "Email", value: personal.email, link: `mailto:${personal.email}` },
    { icon: <FiLinkedin className="w-5 h-5" />, label: "LinkedIn", value: "linkedin.com/in/aria", link: personal.linkedin },
    { icon: <FiGithub className="w-5 h-5" />, label: "GitHub", value: "github.com/aria", link: personal.github },
    { icon: <FiMapPin className="w-5 h-5" />, label: "Location", value: personal.location, link: "#" },
  ];

  return (
    <section id="contact" className="relative py-14 md:py-20 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-32 right-0 w-[600px] h-[600px] bg-blush/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo/10 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="text-xs font-mono tracking-widest uppercase text-mauve">Get In Touch</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-display font-bold mb-6">
            <GradientText>Let&apos;s Connect</GradientText>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-mauve/80 max-w-2xl mx-auto text-lg md:text-xl">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.div variants={staggerItem} className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md w-fit">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-white/90">Available for new opportunities</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col h-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >


            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <motion.a
                  variants={staggerItem}
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden"
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blush/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mauve/20 to-blush/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blush/5 relative z-10">
                    <span className="text-blush">{info.icon}</span>
                  </div>
                  <div className="relative z-10 flex-1">
                    <p className="text-sm font-medium text-white/90 group-hover:text-blush transition-colors">{info.label}</p>
                    <p className="text-xs text-mauve mt-0.5 font-mono">{info.value}</p>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-blush/50 group-hover:text-blush transition-all relative z-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0" />
                </motion.a>
              ))}
            </div>

            {/* Decorative Filler Card to utilize empty space */}
            <motion.div 
              variants={staggerItem} 
              className="flex-1 min-h-[160px] rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent p-6 relative overflow-hidden flex flex-col justify-end group hover:border-white/10 transition-colors"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,208,236,0.05),transparent_50%)]" />
              
              {/* Abstract geometric decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-blush/10 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700 delay-75" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-white/90 mb-2">Let's create <br/> something amazing.</h3>
                <p className="text-sm text-mauve/80">I'm always open to discussing product design work or partnership opportunities.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="lg:col-span-3 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 md:p-10 rounded-[2rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors flex-1 flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blush/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                    >
                      <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-display font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-mauve/80 mb-8 max-w-sm mx-auto">
                      Thank you for reaching out. I've received your message and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-mauve ml-1 uppercase tracking-wider">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/20 focus:outline-none focus:border-blush/50 focus:bg-white/10 transition-all text-sm`}
                        />
                        {errors.name && <p className="text-red-400 text-xs ml-1">{errors.name}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-mauve ml-1 uppercase tracking-wider">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/20 focus:outline-none focus:border-blush/50 focus:bg-white/10 transition-all text-sm`}
                        />
                        {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-mauve ml-1 uppercase tracking-wider">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Project Inquiry"
                        value={form.subject}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/20 focus:outline-none focus:border-blush/50 focus:bg-white/10 transition-all text-sm`}
                      />
                      {errors.subject && <p className="text-red-400 text-xs ml-1">{errors.subject}</p>}
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-mauve ml-1 uppercase tracking-wider">Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project..."
                        value={form.message}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/20 focus:outline-none focus:border-blush/50 focus:bg-white/10 transition-all text-sm resize-none`}
                      />
                      {errors.message && <p className="text-red-400 text-xs ml-1">{errors.message}</p>}
                    </div>
                    
                    <div className="pt-2">
                      <MagneticButton variant="primary" type="submit">
                        <span className="flex items-center gap-2">
                          <FiSend className="w-4 h-4" />
                          Send Message
                        </span>
                      </MagneticButton>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
