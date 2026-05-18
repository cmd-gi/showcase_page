import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible, cursorX, cursorY]);

  // Don't render cursor on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}
