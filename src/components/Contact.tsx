"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, Github, Linkedin, Loader2 } from "lucide-react";
import MagneticButton from "./MagneticButton";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      console.log(data);
      await new Promise((r) => setTimeout(r, 800));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 scroll-mt-20 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      {/* Grain subtil (visible surtout en dark) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]" aria-hidden>
        <svg className="absolute inset-0 w-full h-full">
          <filter id="contact-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#contact-grain)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest mb-2"
        >
          Un projet en tête ?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-light mb-4"
        >
          <span className="text-gradient-animated">Travaillons ensemble</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 dark:text-gray-400 mb-16"
        >
          Envie d&apos;échanger ? Envoyez-moi un message.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href="mailto:clouetmarvyn@gmail.com"
              className="flex items-center gap-3 text-[#1d1d1f] dark:text-white hover:opacity-80 transition-colors"
            >
              <Mail className="w-5 h-5 text-[#86868b] dark:text-white/50 shrink-0" />
              clouetmarvyn@gmail.com
            </a>
            <a
              href="tel:+33658364915"
              className="flex items-center gap-3 text-[#1d1d1f] dark:text-white hover:opacity-80 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#86868b] dark:text-white/50 shrink-0" />
              06 58 36 49 15
            </a>
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[#86868b] dark:text-white/70 hover:text-[#1d1d1f] dark:hover:text-white hover:bg-[#f5f5f7] dark:hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[#86868b] dark:text-white/70 hover:text-[#1d1d1f] dark:hover:text-white hover:bg-[#f5f5f7] dark:hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Nom et prénom
              </label>
              <input
                id="name"
                {...register("name", { required: "Requis" })}
                placeholder="Nom et prénom"
                className="w-full bg-transparent text-[#1d1d1f] dark:text-white placeholder:text-gray-500 px-0 py-4 border-0 border-b border-[#d2d2d7] dark:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-0 transition-colors duration-300"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Adresse e-mail
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Requis" })}
                placeholder="vous@exemple.com"
                className="w-full bg-transparent text-[#1d1d1f] dark:text-white placeholder:text-gray-500 px-0 py-4 border-0 border-b border-[#d2d2d7] dark:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-0 transition-colors duration-300"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Votre message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: "Requis" })}
                placeholder="Votre message..."
                className="w-full bg-transparent text-[#1d1d1f] dark:text-white placeholder:text-gray-500 px-0 py-4 border-0 border-b border-[#d2d2d7] dark:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-0 transition-colors duration-300 resize-none"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message.message}</p>
              )}
            </div>
            <MagneticButton
              as="button"
              type="submit"
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white px-8 py-4 text-sm font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-violet-500/30 transition-all duration-300 disabled:opacity-70 inline-flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi...
                </>
              ) : (
                "Envoyer"
              )}
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
