"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function BottleScrollAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Live viewport width — updates on resize
  const vw = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  useEffect(() => {
    const onResize = () => vw.set(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [vw]);

  // Bottle width: clamp(260px, 28vw, 420px)
  const bottleWidth = useTransform(vw, (w) =>
    Math.min(420, Math.max(260, w * 0.28))
  );

  const x      = useTransform(spring, [0, 1], ["calc(-85vw)", "40px"]);
  const rotate = useTransform(spring, [0, 1], [10, -12]);
  const scale  = useTransform(spring, [0, 1], [0.95, 0.88]);
  const y      = useTransform(spring, [0, 0.5, 1], ["10%", "5%", "30%"]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 80,
          height: 0,
          zIndex: 20,
          pointerEvents: "none",
          overflow: "visible",
        }}
        className="hidden lg:block"
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: bottleWidth,
            x,
            y,
            rotate,
            scale,
            transformOrigin: "center bottom",
            pointerEvents: "none",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bottle-hero.png"
            alt="Chetana Cold Pressed Oil bottle"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>

      {children}
    </div>
  );
}
