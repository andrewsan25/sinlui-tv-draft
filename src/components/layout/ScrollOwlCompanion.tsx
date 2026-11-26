"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

export function ScrollOwlCompanion() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [viewportH, setViewportH] = useState(800);

  const isHome = pathname === "/home" || pathname === "/";
  const { scrollY, scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  useEffect(() => {
    const syncViewport = () => {
      const vh = window.innerHeight || 800;
      setViewportH(vh);
      const threshold = isHome ? Math.round(vh * 0.62) : 40;
      setIsVisible(window.scrollY > threshold);
    };

    syncViewport();
    window.addEventListener("resize", syncViewport, { passive: true });
    return () => window.removeEventListener("resize", syncViewport);
  }, [isHome]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = isHome ? Math.round(viewportH * 0.62) : 40;
    const nextVisible = latest > threshold;
    if (nextVisible !== isVisible) {
      setIsVisible(nextVisible);
    }
  });

  // 2D Sweeping Curved Trajectory across the viewport
  const startProg = isHome ? 0.12 : 0;
  const rawBaseY = useTransform(
    scrollYProgress,
    [startProg, 1],
    [viewportH * 0.14, viewportH * 0.74]
  );
  const smoothBaseY = useSpring(rawBaseY, {
    stiffness: 75,
    damping: 20,
    mass: 0.6,
  });

  // Elastic vertical swoop lag from scroll velocity
  const rawVelY = useTransform(scrollVelocity, [-2600, 0, 2600], [-36, 0, 36]);
  const smoothVelY = useSpring(rawVelY, { stiffness: 110, damping: 16 });

  const totalY = useTransform(
    [smoothBaseY, smoothVelY],
    ([b, v]: number[]) => b + v
  );

  // Horizontal S-curve weave along right edge
  const rawGlideX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -64, -14, -84, -18]
  );
  const smoothGlideX = useSpring(rawGlideX, {
    stiffness: 65,
    damping: 18,
    mass: 0.7,
  });

  // Expressive flight banking & dive/climb tilt
  const rawBank = useTransform(scrollVelocity, [-2600, 0, 2600], [-22, 0, 22]);
  const bankRotate = useSpring(rawBank, { stiffness: 130, damping: 18 });

  // Staggered luminous wind trail coordinates
  const trail1X = useSpring(smoothGlideX, { stiffness: 55, damping: 18 });
  const trail1Y = useSpring(totalY, { stiffness: 55, damping: 18 });

  const trail2X = useSpring(smoothGlideX, { stiffness: 38, damping: 17 });
  const trail2Y = useSpring(totalY, { stiffness: 38, damping: 17 });

  const trail3X = useSpring(smoothGlideX, { stiffness: 26, damping: 16 });
  const trail3Y = useSpring(totalY, { stiffness: 26, damping: 16 });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      aria-hidden={!isVisible}
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      <AnimatePresence>
        {isVisible ? (
          <>
            {/* Trail Particle 3 (farthest, softest sapphire) */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.35, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{ x: trail3X, y: trail3Y }}
              className="will-change-transform absolute right-12 top-7 h-2 w-2 rounded-full bg-[#2563EB] blur-[1px] sm:right-[4.5rem] sm:top-8"
            />

            {/* Trail Particle 2 (mid, tangerine) */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.55, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{ x: trail2X, y: trail2Y }}
              className="will-change-transform absolute right-12 top-7 h-2.5 w-2.5 rounded-full bg-[#F46F15] blur-[0.5px] sm:right-[4.5rem] sm:top-8"
            />

            {/* Trail Particle 1 (closest, bright orange glow) */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{ x: trail1X, y: trail1Y }}
              className="will-change-transform absolute right-12 top-7 h-3 w-3 rounded-full bg-[#F46F15] shadow-[0_0_12px_rgba(244,111,21,0.7)] sm:right-[4.5rem] sm:top-8"
            />

            {/* Main Free-Flying Sinlui TV Owl */}
            <motion.div
              initial={{ opacity: 0, scale: 0.35 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.35 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: smoothGlideX, y: totalY, rotate: bankRotate }}
              className="will-change-transform absolute right-5 top-0 sm:right-10"
            >
              {/* Continuous Wing-Glide Hover Loop */}
              <motion.button
                type="button"
                onClick={handleScrollToTop}
                aria-label="Terbang ke atas"
                animate={{
                  y: [-6, 6, -6],
                  scaleX: [1, 1.05, 0.97, 1],
                  scaleY: [1, 0.95, 1.03, 1],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-auto group relative flex h-16 w-16 items-center justify-center focus:outline-none sm:h-20 sm:w-20"
              >
                {/* Soft Backlit White Aura (keeps dark wing visible over Navy sections) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-2 rounded-full bg-white/80 blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white"
                />

                {/* Hover Tooltip */}
                <span className="pointer-events-none absolute right-[calc(100%+10px)] translate-x-2 whitespace-nowrap rounded-full border border-[#0F2B5B]/10 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#0F2B5B] opacity-0 shadow-md backdrop-blur-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  Terbang ke atas
                </span>

                {/* Unboxed Free-Flying Owl Silhouette */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-sinlui-owl-transparent.png"
                  alt="Sinlui TV Flying Owl"
                  className="relative z-10 h-16 w-16 object-contain drop-shadow-[0_12px_22px_rgba(15,43,91,0.2)] transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
                />
              </motion.button>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
