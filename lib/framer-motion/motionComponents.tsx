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

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
const slideInVariant = (
  duration: number = 0.8,
  delay: number = 0
): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };
};



// Functions
export { AnimatePresence, m, slideInVariant, stagger, useAnimate };
