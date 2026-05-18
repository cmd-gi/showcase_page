import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FFD7B3]">Extraordinary.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Open for freelance opportunities, collaborations, and discussions about the future of creative technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:32charan@gmail.com"
              className="bg-primary text-primary-foreground text-lg px-10 py-5 rounded-full font-bold shadow-[0_0_20px_rgba(255,106,0,0.5)] hover:shadow-[0_0_40px_rgba(255,106,0,0.8)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/918951448408"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-lg px-10 py-5 rounded-full font-bold shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              WhatsApp Me
            </a>
          </div>

          <div className="mt-20 flex items-center justify-center gap-8">
            <a href="https://github.com/cmd-gi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white hover:scale-110 transition-all">
              <SiGithub className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/32charan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] hover:scale-110 transition-all">
              <FaLinkedinIn className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
