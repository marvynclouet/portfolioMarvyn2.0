"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const CARD_WIDTH = 340;
const GAP = 24;
const AUTO_SCROLL_MS = 4000;

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const step = CARD_WIDTH + GAP;

    const tick = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      const next = el.scrollLeft + step;
      if (next >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    };

    const id = setInterval(tick, AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="temoignages" className="py-24 md:py-32 px-6 scroll-mt-20 bg-gray-50/50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#86868b] dark:text-gray-400 text-xs uppercase tracking-widest mb-2"
        >
          Témoignages
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light text-[#1d1d1f] dark:text-white mb-12"
        >
          Recommandations
        </motion.h2>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
          >
            {testimonials.map((t, i) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex-shrink-0 w-[300px] md:w-[340px] snap-center rounded-2xl bg-white dark:bg-neutral-900 border border-[#e8e8ed] dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <Quote className="w-8 h-8 text-violet-400/60 mb-4" />
                <p className="text-[#1d1d1f] dark:text-gray-200 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white text-xs font-medium">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-medium text-[#1d1d1f] dark:text-white text-sm">{t.author}</p>
                    <p className="text-[#86868b] dark:text-gray-400 text-xs">
                      {t.role} {t.company !== "—" ? `· ${t.company}` : ""}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
