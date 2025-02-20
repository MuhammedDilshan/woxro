"use client";

import { ASSETS } from "@/Utils/assetsUtils";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { useOutEffect } from "@/hooks/useOutEffect";
import CubeGrid from "../CubeFlower/ClubFlower";

const Spotlight = () => {
  const targetRef = useRef(null);
  const hederRef = useRef(null);
  const logoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const { blur, opacity, scale } = useOutEffect(hederRef);

  const h3Scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.5]);
  const h3Opacity = useTransform(scrollYProgress, [0, 0.3, 0.35], [1, 1, 0]);
  const h3BlurValue = useTransform(scrollYProgress, [0, 0.3], [0, 30]);

  const [showCubeGrid, setShowCubeGrid] = useState(false);
  const [fadeOutCubes, setFadeOutCubes] = useState(false);
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const unsubscribe = h3Opacity.onChange((value) => {
      if (value === 0) {
        setShowCubeGrid(true);

        if (logoRef.current) {
          const rect = logoRef.current.getBoundingClientRect();
          setLogoPosition({ x: rect.left + rect.width / 2, y: rect.top });
        }
      }
    });

    return () => unsubscribe();
  }, [h3Opacity]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value > 0.7) {
        setFadeOutCubes(true);
      } else {
        setFadeOutCubes(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div className="relative">
      <div
        ref={targetRef}
        className="spotlight bg-[#331707] min-h-[400vh] flex flex-col justify-center items-center"
      >
        <motion.div
          ref={logoRef}
          style={{ filter: `blur(${h3BlurValue.get()}px)`, opacity: h3Opacity }}
          className="sticky top-[10vh]"
        >
          <Image
            src={ASSETS.logo}
            width={180}
            height={180}
            alt="logo"
            className="mx-auto mb-14 transform"
          />
        </motion.div>

        <div className="sticky top-[30vh]" ref={hederRef}>
          <motion.h3
            style={{
              scale: h3Scale,
              opacity: h3Opacity,
              filter: `blur(${h3BlurValue.get()}px)`,
            }}
            className="  text-[30px] sm:text-[50px] lg:text-[80px] text-[#FFE9D9] w-[80%] lg:w-[65%] mx-auto text-center "
          >
            The first media company crafted for the digital-first generation
          </motion.h3>
        </div>

        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.35, 0.6], [0, 1]),
            opacity: useTransform(scrollYProgress, [0.35, 0.6], [0, 1]),
          }}
          className="w-[35%] text-center mt-[100vh] sticky top-[40vh]"
        >
          <h5 className="text-[21px] text-[#FFE9D9]">
            Where innovation meets precision.
          </h5>
          <p className="text-[18px] text-[#FFE9D9]">
            Symphonia unites visionary thinkers, creative architects, and
            analytical experts, collaborating seamlessly to transform challenges
            into opportunities.
          </p>
        </motion.div>

        {showCubeGrid && (
          <motion.div
            className="sticky top-20  w-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOutCubes ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            <CubeGrid targetRef={targetRef} startPosition={logoPosition} />
          </motion.div>
        )}

        <div className="h-[150vh]" />
      </div>
    </motion.div>
  );
};

export default Spotlight;
