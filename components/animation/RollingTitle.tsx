"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function RollingTitle({ children }: { children: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.span
      className="rolling-title"
      initial="rest"
      whileInView="visible"
      whileHover="roll"
      viewport={{ once: true, amount: 0.3 }}
      aria-label={children.trim()}
    >
      {children.trim().split(/\s+/).map((word, index) => (
        <span className="rolling-word" aria-hidden="true" key={`${word}-${index}`}>
          <motion.span
            className="rolling-word-inner"
            variants={{
              rest: { y: reducedMotion ? "0%" : "105%", rotateX: 0 },
              visible: { y: "0%", rotateX: 0 },
              roll: { y: "0%", rotateX: reducedMotion ? 0 : [0, -90, 0] },
            }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : Math.min(index * 0.025, 0.3) }}
          >
            {word}
          </motion.span>
          {" "}
        </span>
      ))}
    </motion.span>
  );
}
