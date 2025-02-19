import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Cube from "../Cube/Cube";

const CubeGrid = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const scale = useTransform(smoothProgress, [0, 1], [0, 3]);
  const opacity = useTransform(smoothProgress, [0, 0.05, 1], [0, 1, 1]);

  const rotateX = useTransform(smoothProgress, [0.1, 1], [0, 720]);
  const rotateY = useTransform(smoothProgress, [0.1, 1], [0, 720]);
  const rotateZ = useTransform(smoothProgress, [0.1, 1], [0, 720]);

  const xPositions = [
    useTransform(smoothProgress, [0, 1], [0, -350]),
    useTransform(smoothProgress, [0, 1], [0, 350]),
    useTransform(smoothProgress, [0, 1], [0, -500]),
    useTransform(smoothProgress, [0, 1], [0, 500]),
    useTransform(smoothProgress, [0, 1], [0, -350]),
    useTransform(smoothProgress, [0, 1], [0, 350]),
  ];

  const yPositions = [
    useTransform(smoothProgress, [0, 1], [0, -250]),
    useTransform(smoothProgress, [0, 1], [0, -250]),
    useTransform(smoothProgress, [0, 1], [0, 100]),
    useTransform(smoothProgress, [0, 1], [0, 100]),
    useTransform(smoothProgress, [0, 1], [0, 350]),
    useTransform(smoothProgress, [0, 1], [0, 350]),
  ];

  return (
    <div
      ref={targetRef}
      className="sticky top-[10vh] flex justify-center items-center scale-[0.2]"
    >
      <motion.div style={{ scale, opacity }} className="relative flex">
        
        <motion.div
          style={{
            rotateX,
            rotateY,
            rotateZ,
            x: xPositions[2],
            y: yPositions[2],
          }}
          className="mr-[140px]"
        >
          <Cube />
        </motion.div>
        <motion.div
          style={{
            rotateX,
            rotateY,
            rotateZ,
            x: xPositions[3],
            y: yPositions[3],
          }}
          className="mr-[140px]"
        >
          <Cube />
        </motion.div>
        <motion.div
          style={{
            rotateX,
            rotateY,
            rotateZ,
            x: xPositions[5],
            y: yPositions[5],
          }}
        >
          <Cube />
        </motion.div>

       
        <motion.div
          style={{
            rotateX,
            rotateY,
            rotateZ,
            x: xPositions[0],
            y: yPositions[0],
          }}
          className="absolute -top-[350px] left-[120px] rotate-[50deg]"
        >
          <Cube />
        </motion.div>
        <motion.div
          style={{
            rotateX,
            rotateY,
            rotateZ,
            x: xPositions[1],
            y: yPositions[1],
          }}
          className="absolute -top-[480px] left-[400px] rotate-0"
        >
          <Cube />
        </motion.div>
        <motion.div
          style={{
            rotateX,
            rotateY,
            rotateZ,
            x: xPositions[4],
            y: yPositions[4],
          }}
          className="absolute -top-[350px] right-[100px] rotate-[75deg]"
        >
          <Cube />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CubeGrid;
