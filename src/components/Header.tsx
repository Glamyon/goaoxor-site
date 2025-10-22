import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navigation = [
  { name: "首页", href: "#hero" },
  { name: "介绍", href: "#video" },
  { name: "流程", href: "#process" },
  { name: "服务", href: "#services" },
  { name: "客户", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setScrolled(latest > 60);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-xl shadow-[0_18px_42px_rgba(14,22,39,0.12)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/80 px-4 py-2 shadow-[0_12px_30px_rgba(22,28,36,0.08)] backdrop-blur-lg transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(22,28,36,0.12)]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(44,107,103,0.95)] via-[rgba(68,96,92,0.9)] to-[rgba(154,147,132,0.9)] text-white shadow-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-[0.08em] text-[color:var(--text-primary)]">
              GOAOXOR
            </span>
            <span className="text-xs text-[color:var(--text-muted)]">
              创意交付中介
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[color:var(--text-muted)] transition-all hover:text-[color:var(--accent-primary)] hover:underline hover:underline-offset-8"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="rounded-full bg-[rgba(44,107,103,0.12)] px-3 py-1 text-xs font-medium text-[color:var(--accent-primary)]">
            24 小时顾问响应
          </span>
          <a
            href="#contact-cta"
            className="rounded-full bg-[color:var(--accent-primary)] px-6 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(44,107,103,0.28)] transition hover:bg-[rgba(37,86,82,1)] hover:shadow-[0_16px_36px_rgba(37,86,82,0.28)]"
          >
            提交需求
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/80 text-[color:var(--text-primary)] shadow-lg backdrop-blur-md transition lg:hidden"
          aria-label="打开导航菜单"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="px-6 pb-6 lg:hidden"
          >
            <div className="rounded-3xl border border-white/30 bg-white/85 p-6 shadow-[0_24px_60px_rgba(20,25,36,0.12)] backdrop-blur-xl">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-[color:var(--text-primary)] transition hover:bg-[rgba(44,107,103,0.08)] hover:text-[color:var(--accent-primary)]"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#contact-cta"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full rounded-2xl bg-[color:var(--accent-primary)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_14px_30px_rgba(44,107,103,0.3)] transition hover:-translate-y-0.5 hover:bg-[rgba(37,86,82,1)]"
                >
                  提交需求
                </a>
                <span className="text-center text-xs text-[color:var(--text-muted)]">
                  顾问将在 24 小时内与您联系
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};