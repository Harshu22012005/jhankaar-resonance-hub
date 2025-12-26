import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import jhankaarLogo from "@/assets/jhankaar-logo.png";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("story-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-indigo" />
      
      {/* Animated Sound Waves Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
            style={{ top: `${15 + i * 10}%` }}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ 
              x: ["100%", "-100%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Geometric Motif Overlay */}
      <div className="absolute inset-0 motif-pattern opacity-60" />

      {/* Floating Cultural Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Decorative Element */}
        <motion.div
          className="absolute left-4 md:left-16 top-1/4 w-20 md:w-32 h-20 md:h-32 opacity-20"
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(43 74% 54%)" strokeWidth="0.5" strokeDasharray="2 4" />
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="hsl(28 85% 52%)" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Right Decorative Element */}
        <motion.div
          className="absolute right-4 md:right-16 bottom-1/4 w-24 md:w-40 h-24 md:h-40 opacity-15"
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="hsl(43 74% 54%)" strokeWidth="0.5" />
            <polygon points="50,20 80,50 50,80 20,50" fill="none" stroke="hsl(28 85% 52%)" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </div>

      {/* Central Glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-glow blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <img
            src={jhankaarLogo}
            alt="Jhankaar 2026 Logo"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-sm md:text-base text-gold tracking-[0.4em] uppercase mb-4"
        >
          The Traditional Cultural Fest
        </motion.p>

        {/* Theme */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-lg md:text-xl lg:text-2xl text-ivory/80 italic mb-8 max-w-2xl"
        >
          "Roots to Resonance — Celebrating Culture as a Living Legacy"
        </motion.h2>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-10"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="btn-cultural">
            Explore the Fest
          </button>
          <button className="btn-outline-cultural" onClick={scrollToContent}>
            Event Journey
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/40 hover:text-gold transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
