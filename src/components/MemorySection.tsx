import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Camera } from "lucide-react";

const MemorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder positions for memory grid
  const memorySlots = [
    { span: "col-span-2 row-span-2", delay: 0 },
    { span: "col-span-1 row-span-1", delay: 0.1 },
    { span: "col-span-1 row-span-1", delay: 0.2 },
    { span: "col-span-1 row-span-2", delay: 0.15 },
    { span: "col-span-1 row-span-1", delay: 0.25 },
    { span: "col-span-1 row-span-1", delay: 0.3 },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 motif-pattern" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.5em] uppercase text-copper mb-4 block">
            Memories that last forever
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-4">
            Not just a fest.{" "}
            <span className="text-gradient-cultural">A memory.</span>
          </h2>
          <p className="font-body text-lg text-ivory/60 max-w-xl mx-auto">
            Every moment captured becomes a treasure, every performance a story to tell.
          </p>
        </motion.div>

        {/* Memory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[180px] mb-12">
          {memorySlots.map((slot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: slot.delay }}
              className={`${slot.span} relative rounded-2xl overflow-hidden border border-gold/10 bg-card/50 group cursor-pointer`}
            >
              {/* Placeholder Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep to-background opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-8 h-8 text-gold/20 group-hover:text-gold/40 transition-colors duration-500" />
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Decorative Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Aftermovie CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <button className="group flex items-center gap-4 px-8 py-4 rounded-full border border-gold/30 bg-card/30 backdrop-blur-sm hover:border-gold/60 hover:bg-card/50 transition-all duration-500">
            <div className="relative w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
              <Play className="w-5 h-5 text-gold fill-gold/30" />
              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border border-gold/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="text-left">
              <span className="block text-ivory font-medium">Watch Aftermovie</span>
              <span className="block text-xs text-muted-foreground">Coming Soon</span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MemorySection;
