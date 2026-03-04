"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LOADER_KEY = "portfolio-loader-seen";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = typeof window !== "undefined" && sessionStorage.getItem(LOADER_KEY);
    if (seen) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(LOADER_KEY, "1");
      } catch {
        // ignore
      }
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col items-center justify-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-8"
          >
            <Image
              src="/logoclouet.webp"
              alt="CLOU.ET"
              width={180}
              height={56}
              className="h-12 w-auto dark:invert"
            />
            <div className="w-48 h-0.5 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#1d1d1f] dark:bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
