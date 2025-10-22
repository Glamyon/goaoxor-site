import React, { useMemo } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "成功交付项目",
    value: "500+",
    description: "覆盖影视、动画、短视频等创意领域",
  },
  {
    label: "认证创意团队",
    value: "120+",
    description: "通过案例审核与沟通评估的深度合作伙伴",
  },
  {
    label: "客户累计节省",
    value: "$500k+",
    description: "精细预算管理与透明结算保障投入回报",
  },
];

export const StatsSection: React.FC = () => {
  const transition = useMemo(() => ({ duration: 0.6, ease: "easeOut" }), []);

  return (
    <section
      aria-label="关键数据统计"
      className="relative z-0 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={transition}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center rounded-full bg-[rgba(44,107,103,0.12)] px-3 py-1 text-xs font-medium text-[color:var(--accent-primary)]">
          数据化保障
        </span>
        <h2 className="mt-4 font-headline text-3xl font-semibold text-[color:var(--text-primary)] sm:text-4xl">
          可度量的交付可信度
        </h2>
        <p className="mt-3 text-base text-[color:var(--text-muted)] sm:text-lg">
          以真实项目经验与透明数据，让品牌方和创意团队协作更高效、安全。
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/90 p-8 shadow-[0_20px_40px_rgba(23,29,37,0.08)] backdrop-blur-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(23,29,37,0.12)]"
          >
            <div className="text-4xl font-semibold text-[color:var(--accent-primary)] sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-3 text-lg font-medium text-[color:var(--text-primary)]">
              {stat.label}
            </div>
            <p className="mt-2 text-sm text-[color:var(--text-muted)]">
              {stat.description}
            </p>
            <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[rgba(44,107,103,0.12)] blur-xl" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
