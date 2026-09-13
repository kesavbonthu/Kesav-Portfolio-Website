"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealGroupProps {
  children: ReactNode;
  className?: string;
}

interface ScrollRevealItemProps {
  children: ReactNode;
  className?: string;
}

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.03,
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function ScrollRevealGroup({ children, className }: ScrollRevealGroupProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial={false}
      whileInView="visible"
      animate={reduced ? "visible" : undefined}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({ children, className }: ScrollRevealItemProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} variants={itemVariants} initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.08 }}>
      {children}
    </motion.div>
  );
}
