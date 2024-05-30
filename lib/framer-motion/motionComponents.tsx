"use client";

import {
  AnimatePresence,
  Variants,
  m,
  stagger,
  useAnimate,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Elements
export const MotionMain = m.main;
export const MotionDiv = m.div;
export const MotionH1 = m.h1;
export const MotionA = m.a;
export const MotionP = m.p;
export const MotionUl = m.ul;
export const MotionLi = m.li;
export const MotionSection = m.section;
export const MotionImage = m(Image);
export const MotionLink = m(Link);

// Variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const staggerFromRightItem: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Functions
export const slideInFromBottom = (duration = 0.8, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration, delay: delay },
    },
  };
};

// Components
export const SlideInFromBottom = ({
  duration = 1,
  delay = 0,
  children,
}: {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}) => {
  return (
    <MotionSection
      variants={slideInFromBottom(duration, delay)}
      initial="hidden"
      animate="visible">
      {children}
    </MotionSection>
  );
};

export { AnimatePresence, m, stagger, useAnimate };
