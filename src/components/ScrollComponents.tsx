import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[70] h-1 origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgba(44,107,103,0.9), rgba(143,140,128,0.9))",
      }}
    />
  );
};

export const FloatingActionButton: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const translateY = useTransform(scrollY, [0, 300], [30, 0]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-3xl border border-white/30 bg-white/90 text-[color:var(--accent-primary)] shadow-[0_20px_40px_rgba(22,28,34,0.16)] backdrop-blur-lg transition hover:-translate-y-1 hover:bg-white"
      style={{ opacity, translateY }}
      aria-label="返回顶部"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
};
