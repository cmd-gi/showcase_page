import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  "AI Image Generation",
  "Prompt Engineering",
  "Cinematic Video Editing",
  "Motion Graphics",
  "Web Development",
  "UI/UX Design",
];

const TOOLS = ["Midjourney", "Premiere Pro", "After Effects", "React", "Tailwind CSS", "Figma"];

export default function About() {
  return (
    <section id="about" className="pt-16 pb-32 relative bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am driven by the belief that technology should amplify creativity, not replace it. My journey spans across generating impossible worlds with AI, cutting dynamic video reels, and architecting seamless web experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By blending cinematic storytelling with modern engineering, I craft digital products that look beautiful and feel alive.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 md:p-12 border border-white/10 rounded-3xl bg-card relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <blockquote className="font-display text-2xl md:text-3xl italic font-light leading-snug text-white relative z-10">
                "The future belongs to those who can speak the language of machines while preserving the soul of art."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-display text-2xl font-bold mb-6 text-white">Capabilities</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, i) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full border border-primary/50 text-sm font-medium text-white shadow-[0_0_10px_rgba(255,106,0,0.1)] hover:shadow-[0_0_15px_rgba(255,106,0,0.4)] bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="font-display text-xl font-bold mb-4 text-white">Toolkit</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground font-mono text-sm">
                {TOOLS.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
