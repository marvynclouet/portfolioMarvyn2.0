"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/avataar.webp"
            alt=""
            width={128}
            height={128}
            className="w-full h-full object-contain opacity-90"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-[#1d1d1f] dark:text-white mb-3">
          Oups, cette page n&apos;existe pas
        </h1>
        <p className="text-[#86868b] dark:text-gray-400 mb-10">
          Erreur 404 — La page que vous cherchez a peut-être été déplacée ou supprimée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white px-8 py-4 text-sm font-medium hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all"
        >
          Retour à l&apos;accueil
        </Link>
      </motion.div>
    </main>
  );
}
