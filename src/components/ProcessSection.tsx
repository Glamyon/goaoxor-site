import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "1. 需求提交",
    duration: "约 1 分钟",
    content:
      "填写在线表单或预约通话，描述项目目标、风格、预算和时间节点。顾问将在 24 小时内确认细节。",
  },
  {
    title: "2. 团队匹配",
    duration: "2-3 个候选",
    content:
      "从 120+ 认证团队中筛选出最匹配的团队，提供案例、报价与时间表，支持多轮对比。",
  },
  {
    title: "3. 确认签约",
    duration: "支付介绍费",
    content:
      "协助签订合同、搭建沟通频道，并处理介绍费和保证金，确保合作条款明确。",
  },
  {
    title: "4. 项目监督",
    duration: "全程跟踪",
    content:
      "设置里程碑检查，实时监控进度，协调沟通，确保按时按质交付。",
  },
  {
    title: "5. 验收结算",
    duration: "+ 长期支持",
    content:
      "协助验收、处理尾款和知识产权移交，VIP 客户享受长期优先匹配。",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center rounded-full bg-[rgba(143,140,128,0.14)] px-3 py-1 text-xs font-medium text-[color:var(--accent-secondary)]">
          5 步交付流程
        </span>
        <h2 className="mt-4 font-headline text-3xl font-semibold text-[color:var(--text-primary)] sm:text-4xl">
          从需求到验收，流程透明可控
        </h2>
        <p className="mt-3 text-base text-[color:var(--text-muted)] sm:text-lg">
          专属项目团队与数字化看板确保协作顺滑、风格统一、风险可控。
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
            className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/90 p-8 shadow-[0_24px_60px_rgba(21,28,36,0.12)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
                {step.title}
              </h3>
              <span className="rounded-full bg-[rgba(44,107,103,0.12)] px-3 py-1 text-xs font-medium text-[color:var(--accent-primary)]">
                {step.duration}
              </span>
            </div>
            <p className="mt-4 text-sm text-[color:var(--text-muted)] leading-relaxed">
              {step.content}
            </p>
            <span className="pointer-events-none absolute -bottom-14 -right-10 h-28 w-28 rounded-full bg-[rgba(143,140,128,0.16)] blur-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
