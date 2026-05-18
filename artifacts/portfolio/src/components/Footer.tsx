import React from "react";
import { ArrowUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-xl text-white">Charan</span>
          <span className="text-sm text-muted-foreground">Creative Technologist</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/cmd-gi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
             <SiGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/32charan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
             <FaLinkedinIn className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Charan</span>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
        
      </div>
    </footer>
  );
}
