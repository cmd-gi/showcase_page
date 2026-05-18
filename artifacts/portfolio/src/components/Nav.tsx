import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Nav() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div 
          className="text-primary font-display font-bold text-2xl cursor-pointer tracking-tighter"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="link-logo"
        >
          C.
        </div>
        <ul className="flex items-center gap-8 font-sans text-sm font-medium tracking-wide">
          {["About", "Works", "Contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-muted-foreground hover:text-white transition-colors duration-200"
                data-testid={`link-${item.toLowerCase()}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
