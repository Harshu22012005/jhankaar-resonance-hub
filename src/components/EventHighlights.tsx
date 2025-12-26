import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Sparkles, Theater, Users } from "lucide-react";

const events = [
  {
    icon: Music,
    title: "Music",
    description: "Classical ragas to fusion beats",
    delay: 0,
  },
  {
    icon: Sparkles,
    title: "Dance",
    description: "Traditional forms to contemporary moves",
    delay: 0.1,
  },
  {
    icon: Theater,
    title: "Drama",
    description: "Stories that stir the soul",
    delay: 0.2,
  },
  {
    icon: Users,
    title: "Unity",
    description: "Celebrating together as one",
    delay: 0.3,
  },
];

const EventHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 motif-pattern" />

      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.5em] uppercase text-gold mb-4 block">
            Experience the magic
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gradient-cultural mb-4">
            Event Highlights
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: event.delay }}
              className="event-card group"
            >
              {/* Icon Container */}
              <div className="relative w-16 h-16 mb-6 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-cultural opacity-20 blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
                <div className="relative w-full h-full rounded-full border border-gold/30 flex items-center justify-center bg-card/50 group-hover:border-gold/60 transition-colors duration-500">
                  <event.icon className="w-7 h-7 text-gold group-hover:text-saffron transition-colors duration-500" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-ivory text-center mb-2 group-hover:text-gold transition-colors duration-500">
                {event.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground text-center">
                {event.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
