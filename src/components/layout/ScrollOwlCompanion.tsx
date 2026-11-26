"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export function ScrollOwlCompanion() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  const scrollVelocity = useVelocity(scrollY);
  const rawVelY = useTransform(scrollVelocity, [-2200, 0, 2200], [-9, 0, 9]);
  const velY = useSpring(rawVelY, { stiffness: 170, damping: 22 });

  const rawVelRotate = useTransform(scrollVelocity, [-2200, 0, 2200], [-9, 0, 9]);
  const velRotate = useSpring(rawVelRotate, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const updateVisibility = () => {
      const threshold =
        pathname === "/home" || pathname === "/"
          ? Math.round(window.innerHeight * 0.72)
          : 180;
      setIsVisible(window.scrollY > threshold);
    };

    updateVisibility();
    window.addEventListener("resize", updateVisibility, { passive: true });
    return () => window.removeEventListener("resize", updateVisibility);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold =
      pathname === "/home" || pathname === "/"
        ? Math.round(window.innerHeight * 0.72)
        : 180;
    const nextVisible = latest > threshold;
    if (nextVisible !== isVisible) {
      setIsVisible(nextVisible);
    }
  });

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.45, y: 20 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.45, y: 20 }
          }
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8"
        >
          <motion.div style={shouldReduceMotion ? undefined : { y: velY }}>
            <button
              type="button"
              onClick={handleScrollToTop}
              aria-label="Kembali ke atas"
              className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-[#0F2B5B]/10 bg-white/90 shadow-luxury backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#F46F15]/40 hover:shadow-luxury-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F46F15] sm:h-[60px] sm:w-[60px]"
            >
              {/* Floating Label on Hover */}
              <span className="pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-full border border-[#0F2B5B]/10 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#0F2B5B] opacity-0 shadow-md backdrop-blur-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 translate-x-2">
                Kembali ke atas
              </span>

              {/* Circular Scroll Progress Ring */}
              <svg
                viewBox="0 0 60 60"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="27.5"
                  fill="none"
                  stroke="rgba(15, 43, 91, 0.08)"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="30"
                  cy="30"
                  r="27.5"
                  fill="none"
                  stroke="#F46F15"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  style={{ pathLength: smoothProgress }}
                />
              </svg>

              {/* Companion Owl Mark */}
              <motion.img
                src="/images/logo-sinlui-owl-transparent.png"
                alt="Sinlui TV Companion Owl"
                style={shouldReduceMotion ? undefined : { rotate: velRotate }}
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              />
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
