"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const useOutEffect = (ref) => {
  const [blur, setBlur] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const blurAmount = latest > 0.7 ? (latest - 0.5) * 10 : 0;
      setBlur(blurAmount);
    });
  }, [scrollYProgress]);

  const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.3, 1], [0, 30]);
  const x = useTransform(scrollYProgress, [0.5, 1], [0, 30]);

  // ✅ Adding RotationX, RotationY, and RotationZ
  const rotateX = useTransform(scrollYProgress, [0.7, 1], [0, 180]); // Rotates X-axis
  const rotateY = useTransform(scrollYProgress, [0.7, 1], [0, 180]); // Rotates Y-axis
  const rotateZ = useTransform(scrollYProgress, [0.7, 1], [0, 180]); // Rotates Z-axis

  return {
    scale,
    blur,
    opacity,
    y,
    x,
    rotateX,
    rotateY,
    rotateZ,
    scrollYProgress,
  };
};
