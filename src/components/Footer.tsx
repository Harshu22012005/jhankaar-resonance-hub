import { motion } from "framer-motion";
import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep to-background" />

      {/* Top Border Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo Mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-gradient-cultural">
              Jhankaar 2026
            </h3>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-sm text-ivory/50 mb-8"
          >
            Roots to Resonance — Celebrating Culture as a Living Legacy
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-10"
          >
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
              { icon: Mail, label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold/60 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <p className="font-body text-xs text-ivory/40">
              The Traditional Cultural Fest of Engineering Excellence
            </p>
            <p className="font-body text-xs text-ivory/30">
              © 2026 Jhankaar. All rights reserved.
            </p>
          </motion.div>

          {/* Decorative Bottom Element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <svg viewBox="0 0 100 30" className="w-16 h-6 text-gold/20">
              <path
                d="M10 15 L50 5 L90 15 L50 25 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="50" cy="15" r="3" fill="currentColor" />
            </svg>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
