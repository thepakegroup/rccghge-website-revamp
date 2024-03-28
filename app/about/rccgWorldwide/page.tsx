import { getPageWriteUp } from "@/app/utils/actions";
import EventsBlock from "@/components/EventsBlock";

import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function page() {
  const writeUp = await getPageWriteUp("rccg-worldwide");
  console.log(writeUp);

  return (
    <div className="py-12 md:py-20  relative ">
      <div className="  bg-white absolute -top-5 mx-auto rounded-lg left-0 right-0 p-4 w-fit lg:text-lg shadow-md">
        <ul className="flex items-center justify-center gap-10 text-primary text-sm md:text-base">
          <li>
            <Link href={"https://www.rccg.org/"} target="_blank">
              RCCG Worldwide
            </Link>
          </li>
          <li>
            <Link href={"https://www.rccgna.org/"} target="_blank">
              RCCG United States
            </Link>
          </li>
          <li>
            <Link href={"https://www.rccguk.church/"} target="_blank">
              RCCG United Kingdom
            </Link>
          </li>
        </ul>
      </div>
      {/* text content */}
      <div className="space-y-5 wrapper mb-12 md:mb-20  max-w-screen-lg">
        <h1
          className="font-bold text-2xl sm:text-3xl capitalize
        ">
          {writeUp?.heading}
        </h1>
        {/* text body */}
        <div className="space-y-2 tracking-wide leading-relaxed">
          {writeUp?.content && (
            <div dangerouslySetInnerHTML={{ __html: writeUp?.content }} />
          )}
        </div>
      </div>
      {/* video section */}
      <div className=" w-[min(100%,1000px)] mb-12 md:mb-20 aspect-video lg:h-[480px] wrapper bg-red-500 "></div>
      <EventsBlock />
    </div>
  );
}
