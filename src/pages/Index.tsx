import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import EventHighlights from "@/components/EventHighlights";
import InclusionSection from "@/components/InclusionSection";
import MemorySection from "@/components/MemorySection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 5-second preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <main className="relative overflow-hidden">
        <HeroSection />
        <StorySection />
        <EventHighlights />
        <InclusionSection />
        <MemorySection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
