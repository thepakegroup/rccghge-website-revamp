import EventsBlock from "@/components/EventsBlock";
import React from "react";

export default function page() {
  return (
    <div className="py-10 ">
      {/* text content */}
      <div className="space-y-5 wrapper mb-8">
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
      <div className=" w-[min(100%,1000px)]  aspect-video lg:h-[480px] wrapper bg-red-500 mb-8"></div>
      <EventsBlock />
    </div>
  );
}
