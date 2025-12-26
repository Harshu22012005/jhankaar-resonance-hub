import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InclusionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const groups = [
    { label: "All Departments", count: "10+" },
    { label: "Student Clubs", count: "25+" },
    { label: "Faculty Mentors", count: "50+" },
    { label: "Performers", count: "500+" },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-deep to-background" />

      {/* Abstract Figures Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <svg viewBox="0 0 800 400" className="w-full max-w-4xl">
          {[...Array(12)].map((_, i) => (
            <motion.ellipse
              key={i}
              cx={100 + i * 55}
              cy={200}
              rx={20}
              ry={60}
              fill="none"
              stroke="hsl(43 74% 54%)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.5 } : { scale: 0, opacity: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            />
          ))}
          {/* Connecting Lines */}
          <motion.path
            d="M100 200 Q200 150 300 200 Q400 250 500 200 Q600 150 700 200"
            fill="none"
            stroke="hsl(28 85% 52%)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.5em] uppercase text-saffron mb-4 block">
            Together we shine
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6">
            A Celebration of{" "}
            <span className="text-gradient-cultural">Unity</span>
          </h2>
          <p className="font-body text-lg text-ivory/60 max-w-2xl mx-auto">
            Jhankaar brings together every corner of our college — departments, clubs, 
            faculty, and students — united by a shared love for culture and creativity.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative p-6 rounded-2xl border border-gold/10 bg-card/30 backdrop-blur-sm text-center group hover:border-gold/30 transition-all duration-500"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at center, hsl(43 74% 54% / 0.1) 0%, transparent 70%)",
                }}
              />

              <motion.span
                className="font-display text-4xl md:text-5xl font-bold text-gradient-cultural block mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {group.count}
              </motion.span>
              <span className="font-body text-sm text-muted-foreground">
                {group.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InclusionSection;
