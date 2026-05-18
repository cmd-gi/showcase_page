import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GenerativeArtScene } from "./GenerativeArt";

const SUBTITLES = ["AI Artist", "Video Editor", "Web Developer", "Creative Technologist"];

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % SUBTITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const headline = "I Create AI-Powered Visual Experiences.";

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#FF8C1A]/10 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="flex-grow flex items-center pt-24 pb-12 z-10">
        <div className="container relative mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-wider uppercase text-sm mb-6"
          >
            Hello, I'm Charan.
          </motion.p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight text-balance">
            {headline.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                className={char === " " ? "inline-block w-4" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <div className="h-12 mb-8 overflow-hidden relative">
            <motion.div
              key={currentSubtitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="absolute font-sans text-xl md:text-2xl text-muted-foreground font-light"
            >
              {SUBTITLES[currentSubtitle]}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-muted-foreground/80 mb-10 max-w-xl leading-relaxed"
          >
            Operating at the intersection of machine intelligence and human creativity. 
            I build cinematic stories, intuitive web applications, and bold visual identities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:shadow-[0_0_30px_rgba(255,106,0,0.6)] transition-all duration-300 hover:scale-105"
              data-testid="button-explore"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all duration-300"
              data-testid="button-contact"
            >
              Get In Touch
            </button>
          </motion.div>
          </div>
          {/* Right Side: 3D Art Scene */}
          <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center pointer-events-none opacity-80 mix-blend-screen hidden md:flex">
            <Suspense fallback={null}>
              <GenerativeArtScene />
            </Suspense>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-auto pb-8 flex flex-col items-center gap-2 text-muted-foreground z-20 relative"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
