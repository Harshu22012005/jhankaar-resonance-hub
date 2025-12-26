import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {/* Circuit Lines */}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={80 + i * 80}
              x2="1000"
              y2={80 + i * 80}
              stroke="url(#circuit-gradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={80 + i * 80}
              y1="0"
              x2={80 + i * 80}
              y2="1000"
              stroke="url(#circuit-gradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2.5,
                delay: 0.5 + i * 0.1,
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
            />
          ))}
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="hsl(43 74% 54%)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Sound Wave Visualization */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-gold/20"
            initial={{ width: 100, height: 100, opacity: 0 }}
            animate={{
              width: [100 + i * 80, 400 + i * 120],
              height: [100 + i * 80, 400 + i * 120],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Central Logo Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        {/* Decorative Ring */}
        <motion.svg
          className="absolute -inset-8 md:-inset-12"
          viewBox="0 0 200 200"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#ring-gradient)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
          />
          <defs>
            <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(28 85% 52%)" />
              <stop offset="50%" stopColor="hsl(43 74% 54%)" />
              <stop offset="100%" stopColor="hsl(25 60% 45%)" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Abstract Veena/Sound Icon */}
        <motion.div
          className="relative w-20 h-20 md:w-28 md:h-28 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Sound Waves */}
            <motion.path
              d="M50 20 Q30 40 50 50 Q70 60 50 80"
              fill="none"
              stroke="hsl(43 74% 54%)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M35 30 Q55 45 35 60"
              fill="none"
              stroke="hsl(28 85% 52%)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M65 30 Q45 45 65 60"
              fill="none"
              stroke="hsl(28 85% 52%)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
            />
            {/* Central Glow */}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="hsl(43 74% 54%)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
              transition={{ duration: 1, delay: 2.2 }}
            />
          </svg>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-gradient-cultural mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          Jhankaar
        </motion.h1>

        <motion.p
          className="font-display text-xl md:text-2xl text-gold/80 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          2026
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="font-body text-sm md:text-base text-ivory/60 tracking-[0.3em] uppercase"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          Roots to Resonance
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          className="mt-8 w-48 h-0.5 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-saffron via-gold to-copper"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 3.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Decorative Element */}
      <motion.div
        className="absolute bottom-8 flex items-center gap-2 text-muted-foreground/50 text-xs tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
      >
        <span className="w-8 h-px bg-gradient-to-r from-transparent to-gold/30" />
        <span>Celebrating Culture as a Living Legacy</span>
        <span className="w-8 h-px bg-gradient-to-l from-transparent to-gold/30" />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
