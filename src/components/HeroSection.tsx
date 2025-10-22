import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/creative-workspace.jpg"
          alt="创意团队共创场景"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(28,32,40,0.55)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs tracking-[0.38em]"
        >
          GOAOXOR · CREATIVE DELIVERY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-6 font-headline text-4xl font-semibold leading-tight sm:text-5xl lg:text-[54px]"
        >
          找到最靠谱的创意团队，
          <span className="text-[#e3ede9]">安心交付每一帧作品</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-2xl text-sm text-white/80 sm:text-lg"
        >
          我们为全球客户匹配中国顶尖影视、动画、短视频团队，以标准化流程和数据化监督，让创意项目在预算与时间内高质量落地。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact-cta"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[color:var(--accent-primary)] shadow-[0_20px_40px_rgba(12,18,28,0.18)] transition hover:-translate-y-1 hover:bg-[#f7f5f2]"
          >
            <span>1 分钟开始</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#video"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            观看服务介绍
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {[{ number: "3.5k+", label: "全球创意人脉" }, { number: "24h", label: "顾问快速响应" }, { number: "92%", label: "复购与推荐率" }].map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/20 bg-white/10 px-6 py-4 text-left backdrop-blur-md"
            >
              <div className="text-2xl font-semibold text-white">{stat.number}</div>
              <div className="mt-1 text-xs text-white/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <div className="flex items-center gap-2 text-xs text-white/70">
          向下探索
          <ChevronDown className="h-4 w-4" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
