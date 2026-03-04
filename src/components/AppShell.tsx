"use client";

import { useEffect } from "react";
import PageLoader from "./PageLoader";
import ScrollProgress from "./ScrollProgress";
import CustomCursor from "./CustomCursor";
import BackToTop from "./BackToTop";
import GrainOverlay from "./GrainOverlay";
import EasterEgg from "./EasterEgg";

export default function AppShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: import("lenis").default | null = null;
    let rafId: number;

    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]');
      const href = a?.getAttribute("href");
      if (!a || !href || href === "#") return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el && lenis) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: 0 });
        window.history.pushState(null, "", href);
      }
    };

    const init = async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        smoothWheel: true,
        duration: 0.65,
        wheelMultiplier: 1.8,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
      document.addEventListener("click", onAnchorClick);
    };
    init();

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <PageLoader />
      <CustomCursor />
      <GrainOverlay />
      <EasterEgg />
      {children}
      <BackToTop />
    </>
  );
}
