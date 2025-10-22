import React from "react";
import { motion } from "framer-motion";

const footerColumns = [
  {
    title: "快速导航",
    links: [
      { label: "首页", href: "#hero" },
      { label: "服务介绍", href: "#video" },
      { label: "交付流程", href: "#process" },
      { label: "客户评价", href: "#testimonials" },
      { label: "提交需求", href: "#contact-cta" },
    ],
  },
  {
    title: "服务资源",
    links: [
      { label: "影视制作", href: "#services" },
      { label: "动画创作", href: "#services" },
      { label: "声音设计", href: "#services" },
      { label: "品牌视觉", href: "#services" },
    ],
  },
  {
    title: "支持与联系",
    links: [
      { label: "服务条款", href: "/terms" },
      { label: "隐私政策", href: "/privacy" },
      { label: "版权信息", href: "/copyright" },
      { label: "info@goaoxor.com", href: "mailto:info@goaoxor.com" },
    ],
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#101419] text-white">
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,74,80,0.25),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-md"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-lg">
            <span className="text-sm font-semibold tracking-[0.08em]">GOAOXOR</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            GOAOXOR 专注创意项目撮合，连接全球客户与中国顶尖创意团队，以标准化流程、实时报价与交付保障，让创意执行更可信赖。
          </p>
        </motion.div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((column) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative border-t border-white/10 px-6 py-6"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} GOAOXOR. 保留所有权利 · 沪ICP备20250001号</span>
          <span>安全传输 · 256 位 SSL 加密 · 可签署 NDA</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
