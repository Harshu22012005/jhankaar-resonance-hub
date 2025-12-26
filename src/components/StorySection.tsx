import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StoryCardProps {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  motifType: "roots" | "resonance" | "legacy";
}

const StoryCard = ({ title, subtitle, description, accentColor, motifType }: StoryCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getMotif = () => {
    switch (motifType) {
      case "roots":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
            <motion.path
              d="M100 180 C100 180 100 100 100 50 M100 50 C80 30 60 40 50 20 M100 50 C120 30 140 40 150 20"
              fill="none"
              stroke={accentColor}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <motion.circle
              cx="100"
              cy="180"
              r="5"
              fill={accentColor}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.5 }}
            />
          </svg>
        );
      case "resonance":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                cx="100"
                cy="100"
                r={30 + i * 15}
                fill="none"
                stroke={accentColor}
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 0.5 - i * 0.1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 0.2 * i, duration: 1 }}
              />
            ))}
          </svg>
        );
      case "legacy":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
            <motion.path
              d="M40 100 Q100 20 160 100 Q100 180 40 100"
              fill="none"
              stroke={accentColor}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2 }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="10"
              fill={accentColor}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.5 } : { scale: 0, opacity: 0 }}
              transition={{ delay: 1.5 }}
            />
          </svg>
        );
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center px-6 py-16"
    >
      {/* Background Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 md:w-64 md:h-64">{getMotif()}</div>
      </div>

      {/* Content */}
      <motion.span
        className="text-xs tracking-[0.5em] uppercase mb-4"
        style={{ color: accentColor }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        {subtitle}
      </motion.span>

      <motion.h3
        className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
        style={{ 
          background: `linear-gradient(135deg, ${accentColor} 0%, hsl(45 20% 95%) 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="font-body text-base md:text-lg text-ivory/70 max-w-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6 }}
      >
        {description}
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        className="mt-8 w-16 h-px"
        style={{ backgroundColor: accentColor }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
    </motion.div>
  );
};

const StorySection = () => {
  return (
    <section id="story-section" className="relative">
      {/* Roots Section */}
      <div className="section-roots min-h-screen flex items-center justify-center">
        <StoryCard
          title="Roots"
          subtitle="Where it all began"
          description="Deep within the heart of our traditions lies a timeless melody — the rhythms of folk, the grace of classical dance, and the wisdom passed through generations. These roots anchor us to our heritage, reminding us of the beauty in our cultural foundations."
          accentColor="hsl(28 85% 52%)"
          motifType="roots"
        />
      </div>

      {/* Resonance Section */}
      <div className="section-resonance min-h-screen flex items-center justify-center">
        <StoryCard
          title="Resonance"
          subtitle="Where tradition meets innovation"
          description="When ancient rhythms meet modern beats, magic happens. Engineering minds and creative souls converge, transforming tradition into contemporary expression. This is where youth energy amplifies cultural vibrations, creating waves that ripple through time."
          accentColor="hsl(222 60% 50%)"
          motifType="resonance"
        />
      </div>

      {/* Legacy Section */}
      <div className="section-legacy min-h-screen flex items-center justify-center">
        <StoryCard
          title="Legacy"
          subtitle="What we leave behind"
          description="Every performance, every connection, every moment of joy becomes part of our collective memory. Jhankaar is more than an event — it's a living legacy, a testament to the power of unity, creativity, and the enduring spirit of culture."
          accentColor="hsl(43 74% 54%)"
          motifType="legacy"
        />
      </div>
    </section>
  );
};

export default StorySection;
