import { slideInFromBottom } from "@/app/give/page";
import { getPageWriteUp } from "@/app/utils/actions";
import EventsBlock from "@/components/EventsBlock";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { Metadata } from "next";

import Link from "next/link";

import React from "react";
export const metadata: Metadata = {
  title: "RCCG Worldwide",
  description:
    "The Redeemed Christian Church of God (RCCG) – is a worldwide non-denominational religious organization established in 1952. The RCCG has over 6 million members distributed in over 4,000 parishes in the continents of Africa, Europe, Asia, and America.",
};
export default async function page() {
  const writeUp = await getPageWriteUp("rccg-worldwide");

  return (
    <div className=" page-spacing relative ">
      <MotionDiv
        variants={slideInFromBottom(1, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="z-20  bg-white absolute -top-5 mx-auto rounded-lg left-0 right-0 p-4 w-fit lg:text-lg shadow-md max-w-screen-xl">
        <ul className="flex items-center justify-center gap-10 text-primary text-sm md:text-base">
          <li>
            <Link href={"https://www.rccg.org/"} target="_blank">
              RCCG Worldwide
            </Link>
          </li>
          <li>
            <Link href={"https://www.rccgna.org/"} target="_blank">
              RCCG Americas
            </Link>
          </li>
          <li>
            <Link href={"https://rccgcanada.org/"} target="_blank">
              RCCG Canada
            </Link>
          </li>
          <li>
            <Link href={"https://www.rccguk.church/"} target="_blank">
              RCCG United Kingdom
            </Link>
          </li>
        </ul>
      </MotionDiv>
      {/* text content */}
      <MotionDiv
        variants={slideInFromBottom(1, 0)}
        initial="hidden"
        whileInView="visible"
        className="space-y-5 wrapper !mt-10 mb-12 md:mb-20  max-w-screen-lg">
        <h1
          className="font-semibold text-2xl sm:text-3xl capitalize
        ">
          {writeUp?.heading}
        </h1>
        {/* text body */}
        <div className="space-y-2 tracking-wide leading-relaxed">
          {writeUp?.content && (
            <div dangerouslySetInnerHTML={{ __html: writeUp?.content }} />
          )}
        </div>
      </MotionDiv>
      {/* video section */}
      <div className=" w-[min(100%,1000px)] mb-12 md:mb-20 aspect-video lg:h-[480px] mx-auto bg-red-500 ">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/7bVUARoSFnQ?si=8nPEsy9Y6WDNI2Ff"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
      <EventsBlock />
    </div>
  );
}
