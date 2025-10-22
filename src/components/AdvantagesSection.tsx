import React from "react";
import { motion } from "framer-motion";

const advantages = [
  {
    title: "严格团队筛选",
    description: "团队需通过案例审核、技术测试与沟通评估，入驻率仅 8.3%，确保执行力与稳定性。",
  },
  {
    title: "透明收费体系",
    description: "固定介绍费，无隐藏成本；资金走第三方托管，每笔支出可追溯。",
  },
  {
    title: "全程交付保障",
    description: "专属项目经理、里程碑验收、质量核查，保障时间节点与交付标准。",
  },
  {
    title: "跨国协作经验",
    description: "中英双语团队，熟悉多时区协作流程，降低沟通成本。",
  },
];

export const AdvantagesSection: React.FC = () => {
  return (
    <section
      id="advantages"
      className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center rounded-full bg-[rgba(143,140,128,0.16)] px-3 py-1 text-xs font-medium text-[color:var(--accent-secondary)]">
          我们的优势
        </span>
        <h2 className="mt-4 font-headline text-3xl font-semibold text-[color:var(--text-primary)] sm:text-4xl">
          可信赖的创意项目中介伙伴
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {advantages.map((advantage, index) => (
          <motion.div
            key={advantage.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.06 }}
            className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/95 p-8 shadow-[0_26px_60px_rgba(23,28,38,0.12)] backdrop-blur-xl"
          >
            <div className="text-lg font-semibold text-[color:var(--text-primary)]">
              {advantage.title}
            </div>
            <p className="mt-3 text-sm text-[color:var(--text-muted)] leading-relaxed">
              {advantage.description}
            </p>
            <span className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[rgba(44,107,103,0.1)] blur-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
