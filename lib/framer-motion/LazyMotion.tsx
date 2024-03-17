"use client";

import { LazyMotion, domMax } from "framer-motion";

export default function FramerMotion({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
}
