import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "你们是什么类型的平台？",
    answer: "我们是创意项目撮合平台，连接全球客户与中国顶尖影视、动画、短视频团队，提供全流程交付保障。",
  },
  {
    question: "语言沟通如何解决？",
    answer: "支持英文沟通，并可根据需求提供中英翻译与双时区排期，确保信息传达准确无误。",
  },
  {
    question: "资金安全如何保障？",
    answer: "合作资金通过第三方托管平台（如支付宝国际、Payoneer）操作，合同明确资金释放节点。",
  },
  {
    question: "可以加急项目吗？",
    answer: "可评估加急需求，顾问会在匹配阶段确认可行性，并说明加急所需的额外预算（通常 +20-50%）。",
  },
  {
    question: "知识产权如何处理？",
    answer: "项目完成后知识产权归客户所有，包含源文件交付，合同会明确版权归属。",
  },
];

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center rounded-full bg-[rgba(143,140,128,0.16)] px-3 py-1 text-xs font-medium text-[color:var(--accent-secondary)]">
          常见问题解答
        </span>
        <h2 className="mt-4 font-headline text-3xl font-semibold text-[color:var(--text-primary)] sm:text-4xl">
          项目前的核心疑问，一次解答
        </h2>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openItems.includes(index);
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
              className="overflow-hidden rounded-3xl border border-white/50 bg-white/95 shadow-[0_22px_58px_rgba(21,27,36,0.12)] backdrop-blur-xl"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <div>
                  <h3 className="text-base font-semibold text-[color:var(--text-primary)]">
                    {faq.question}
                  </h3>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(44,107,103,0.12)] text-[color:var(--accent-primary)]"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-sm text-[color:var(--text-muted)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
