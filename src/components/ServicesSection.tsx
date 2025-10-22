import React from "react";
import { motion } from "framer-motion";
import { Film, Palette, Scissors, Sparkles, PenTool } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "影视与短片制作",
    description: "导演策划、分镜、实景拍摄、剪辑包装，一体化管理宣传片与广告片。",
  },
  {
    icon: Palette,
    title: "动画制作 (2D / 3D / MG)",
    description: "角色动画、MG 动效、3D 建模渲染，支持品牌视觉与故事化表达。",
  },
  {
    icon: Scissors,
    title: "影视后期与特效",
    description: "调色、特效合成、动态跟踪、画面修复，符合国际交付标准。",
  },
  {
    icon: Sparkles,
    title: "声音设计与配音",
    description: "多语种配音、原创音乐、音效设计，构建沉浸式体验。",
  },
  {
    icon: PenTool,
    title: "插画与品牌视觉",
    description: "品牌插画、角色设计、海报、UI 视觉，提供版权转让及手册。",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center rounded-full bg-[rgba(44,107,103,0.12)] px-3 py-1 text-xs font-medium text-[color:var(--accent-primary)]">
          专业服务领域
        </span>
        <h2 className="mt-4 font-headline text-3xl font-semibold text-[color:var(--text-primary)] sm:text-4xl">
          适配品牌调性的创意解决方案
        </h2>
        <p className="mt-3 text-base text-[color:var(--text-muted)] sm:text-lg">
          以领域专家团队支撑每个环节，保证画面质感、叙事节奏与品牌策略保持一致。
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/95 p-8 shadow-[0_24px_50px_rgba(21,28,36,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(44,107,103,0.12)] text-[color:var(--accent-primary)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[color:var(--text-primary)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--text-muted)] leading-relaxed">
                {service.description}
              </p>
              <span className="pointer-events-none absolute -right-12 -top-14 h-28 w-28 rounded-full bg-[rgba(44,107,103,0.08)] blur-2xl transition-all duration-500 group-hover:scale-125" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
