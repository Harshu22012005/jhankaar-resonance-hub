import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

// Import event photos
import photo1 from "@/assets/jhankaar-photo-1.jpeg";
import photo2 from "@/assets/jhankaar-photo-2.jpeg";
import photo3 from "@/assets/jhankaar-photo-3.jpeg";
import photo4 from "@/assets/jhankaar-photo-4.jpeg";
import photo5 from "@/assets/jhankaar-photo-5.jpg";
import photo6 from "@/assets/jhankaar-photo-6.jpg";

const MemorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const memorySlots = [
    { span: "col-span-2 row-span-2", delay: 0, image: photo1, alt: "Jhankaar 2025 Event" },
    { span: "col-span-1 row-span-1", delay: 0.1, image: photo2, alt: "Cultural Performance" },
    { span: "col-span-1 row-span-1", delay: 0.2, image: photo3, alt: "Traditional Dance" },
    { span: "col-span-1 row-span-2", delay: 0.15, image: photo4, alt: "Jhankaar Moments" },
    { span: "col-span-1 row-span-1", delay: 0.25, image: photo5, alt: "Event Highlights" },
    { span: "col-span-1 row-span-1", delay: 0.3, image: photo6, alt: "Stage Performance" },
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
              className={`${slot.span} relative rounded-2xl overflow-hidden border border-gold/20 group cursor-pointer`}
            >
              {/* Photo */}
              <img
                src={slot.image}
                alt={slot.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Decorative Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/40 transition-colors duration-500" />
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
          <a 
            href="https://www.instagram.com/reel/C2ugTrpoXnM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 rounded-full border border-gold/30 bg-card/30 backdrop-blur-sm hover:border-gold/60 hover:bg-card/50 transition-all duration-500"
          >
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
              <span className="block text-xs text-muted-foreground">Jhankaar 2024</span>
            </div>
          </a>
        </motion.div>

        {/* Instagram Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center mt-6"
        >
          <a 
            href="https://www.instagram.com/jhankaar_meswcoe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            Follow @jhankaar_meswcoe for more updates
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MemorySection;
