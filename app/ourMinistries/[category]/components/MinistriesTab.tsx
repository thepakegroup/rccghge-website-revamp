"use client";
import { slideInFromBottom } from '@/app/give/page';
import { MotionDiv } from '@/lib/framer-motion/motionComponents';
import useIsActiveLink from '@/lib/hooks/useIsActiveLink';
import Link from 'next/link';
import React from 'react'

export default function MinistriesTab() {
    const isActiveLink = useIsActiveLink();
    
  return (
    <MotionDiv
      variants={slideInFromBottom(1, 0.5)}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      className="z-20 bg-white absolute -top-10  mx-6 lg:mx-12  rounded-lg left-0 right-0 p-5 xl:px-32 lg:text-lg shadow-md ">
      <ul className="flex items-center justify-center gap-10 max-w-screen-xl ">
        <li
          className={`${isActiveLink("/Ministry") && "border-b-2 border-primary"}`}>
          <Link href={"/ourMinistries/Ministry"}>Ministries</Link>
        </li>
        <li
          className={`${isActiveLink("/Department") && "border-b-2 border-primary"}`}>
          <Link href={"/ourMinistries/Department"}>Departments</Link>
        </li>
      </ul>
    </MotionDiv>
  );
}
