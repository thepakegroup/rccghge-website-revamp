import EventsBlock from "@/components/EventsBlock";
import Link from "next/link";
import React from "react";

export default function page() {
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
        <h1 className="font-bold text-2xl sm:text-3xl">How It All Began</h1>
        {/* text body */}
        <div className="space-y-2 tracking-wide leading-relaxed">
          <p>
            The Redeemed Christian Church of God (RCCG) – is a worldwide
            non-denominational religious organization established in 1952. The
            RCCG has over 6 million members distributed in over 4,000 parishes
            in the continents of Africa, Europe, Asia, and America.
          </p>
          <p>
            The global mission of the Church is to make heaven by living a life
            of holiness and to take as many people with us.
          </p>
          <p>
            The vision is to plant churches within ten minutes driving distance
            in every developed nation and within five minutes walk in every
            developing nations of the world.
          </p>
          <p>
            The goal is to pursue the vision until every nation of the world is
            reached for Jesus Christ our Lord and savior.
          </p>
        </div>
      </div>
      {/* video section */}
      <div className=" w-[min(100%,1000px)] mb-12 md:mb-20 aspect-video lg:h-[480px] wrapper bg-red-500 "></div>
      <EventsBlock />
    </div>
  );
}
