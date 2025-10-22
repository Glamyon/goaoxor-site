import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    label: "info@goaoxor.com",
    description: "发送项目简述，顾问 24 小时内回复",
    href: "mailto:info@goaoxor.com?subject=创意项目咨询",
  },
  {
    icon: Phone,
    label: "+86 135-0000-0000",
    description: "预约视频会议，确认需求与预算边界",
    href: "tel:+8613500000000",
  },
  {
    icon: Calendar,
    label: "安排 30 分钟顾问通话",
    description: "锁定时间，快速评估创意落地路径",
    href: "https://calendly.com/",
  },
];

export const CTASection: React.FC = () => {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden px-6 py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(44,107,103,0.12)] via-[rgba(16,20,28,0.65)] to-[rgba(20,24,32,0.85)]" />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at top left, rgba(231,237,231,0.4), transparent 55%)" }} />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 text-white lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-xs tracking-[0.32em]">
            PARTNER WITH GOAOXOR
          </span>
          <h2 className="mt-5 font-headline text-4xl font-semibold leading-tight">
            准备开启下一个创意项目？
          </h2>
          <p className="mt-4 text-sm text-white/80 sm:text-base">
            告诉我们项目目标、风格与预算，顾问会在 24 小时内给出匹配方案与时间表，并推荐最合适的创意团队。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://cjp2prduaxqd.jp.larksuite.com/share/base/form/shrjptHJCDN5fqiRazayIQ4cgRb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--accent-primary)] shadow-[0_22px_44px_rgba(10,16,26,0.22)] transition hover:-translate-y-1 hover:bg-[#f7f5f2]"
            >
              📝 填写需求（2 分钟）
            </a>
            <a
              href="mailto:info@goaoxor.com?subject=创意项目咨询"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              💬 联系顾问
            </a>
          </div>
          <p className="mt-6 text-xs text-white/70">支持英文沟通 • 256 位 SSL 加密 • 可签署 NDA</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="grid flex-1 gap-4"
        >
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.a
                key={option.label}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-3xl border border-white/30 bg-white/12 px-6 py-5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-white">{option.label}</span>
                  <span className="text-xs text-white/70">{option.description}</span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
