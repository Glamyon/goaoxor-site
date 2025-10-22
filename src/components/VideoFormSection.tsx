import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: "easeOut" };

export const VideoFormSection: React.FC = () => {
  return (
    <section
      id="video"
      className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={transition}
        className="relative flex-1 overflow-hidden rounded-[28px] border border-white/40 bg-white/90 shadow-[0_38px_60px_rgba(18,24,34,0.16)] backdrop-blur-2xl"
      >
        <div className="absolute inset-0 bg-[rgba(30,39,48,0.35)]" />
        <img
          src="/assets/team-collaboration.jpg"
          alt="GOAOXOR 创意团队协作"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/25 px-3 py-1 text-xs font-medium text-white">
              了解平台
            </span>
            <h2 className="mt-4 max-w-xl font-headline text-3xl font-semibold tracking-tight text-white md:text-4xl">
              为什么创意品牌都选择 GOAOXOR？
            </h2>
            <p className="mt-4 max-w-lg text-sm text-white/80 md:text-base">
              从筛选团队到里程碑交付，我们提供透明、标准化的项目管理机制，确保创意产出以可控方式落地。
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://player.vimeo.com/video/76979871"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-[color:var(--accent-primary)] shadow-[0_18px_36px_rgba(14,22,39,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              观看服务介绍
            </a>
            <span className="text-xs text-white/70">Vimeo 播放 • 3:45</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ ...transition, delay: 0.1 }}
        className="flex-1 rounded-[28px] border border-white/50 bg-white/90 p-8 shadow-[0_26px_48px_rgba(15,21,31,0.12)] backdrop-blur-xl"
      >
        <h3 className="font-headline text-2xl font-semibold text-[color:var(--text-primary)]">
          快速评估 • 1 分钟
        </h3>
        <p className="mt-2 text-sm text-[color:var(--text-muted)]">
          填写信息，免费获取团队匹配建议。提交后 24 小时内顾问跟进。
        </p>
        <form className="mt-8 space-y-5" noValidate>
          <div className="space-y-1">
            <label className="text-xs font-medium text-[color:var(--text-muted)]">姓名 / 公司</label>
            <input
              type="text"
              required
              placeholder="请输入称呼"
              className="w-full rounded-2xl border border-[rgba(32,38,46,0.08)] bg-white px-4 py-3 text-sm shadow-inner focus:border-[color:var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[rgba(44,107,103,0.18)]"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-[color:var(--text-muted)]">联系邮箱</label>
            <input
              type="email"
              required
              placeholder="info@example.com"
              className="w-full rounded-2xl border border-[rgba(32,38,46,0.08)] bg-white px-4 py-3 text-sm shadow-inner focus:border-[color:var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[rgba(44,107,103,0.18)]"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-[color:var(--text-muted)]">项目类型</label>
            <select
              required
              className="w-full rounded-2xl border border-[rgba(32,38,46,0.08)] bg-white px-4 py-3 text-sm text-[color:var(--text-primary)] shadow-inner focus:border-[color:var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[rgba(44,107,103,0.18)]"
            >
              <option value="" disabled selected>
                请选择项目方向
              </option>
              <option value="视频">🎬 视频 / 影视后期</option>
              <option value="动画">🎨 二维 / 三维动画</option>
              <option value="短视频">📱 短视频内容</option>
              <option value="插画">✏️ 插画 / 品牌视觉</option>
              <option value="其他">❓ 其他创意需求</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-[color:var(--accent-primary)] py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(44,107,103,0.28)] transition hover:-translate-y-1 hover:bg-[rgba(37,86,82,1)]"
          >
            立即匹配团队
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-[color:var(--text-muted)]">
          或点击「1 分钟开始」填写完整需求信息
        </p>
      </motion.div>
    </section>
  );
};

export default VideoFormSection;
