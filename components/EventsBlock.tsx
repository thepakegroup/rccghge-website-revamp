import Link from "next/link";
import React from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";

export default function EventsBlock() {
  return (
    <div className=" flex flex-col items-center lg:flex-row py-12 md:py-24">
      <div className="h-10 wrapper  w-full lg:h-72 lg:w-2/5 lg:max-w-80 lg:text-center lg:gap-2 lg:pt-16 lg:flex-col flex gap-5 items-center blueGradient py-8 text-white relative">
        <FaCalendar className="text-2xl md:text-3xl " />
        <h1 className="text-2xl md:text-3xl  capitalize">
          Our Upcoming Events
        </h1>
        <FaCaretRight className="hidden lg:block absolute top-20  text-9xl -right-[70px] text-[#4372b9]" />
        <FaCaretDown className=" md:hidden absolute -bottom-7 left-40 text-5xl text-[#2b4a83]" />
      </div>
      {/* events */}
      <Link href={"/events"}>
        <div className="flex wrapper w-full justify-center gap-2 bg-primary/5 items-center lg:h-72 lg:divide-x lg:py-5">
          <div className=" flex w-1/2  md:px-5  flex-col  gap-2 lg:gap-4 py-6 lg:py-8   ">
            <h1 className="title text-lg md:text-xl lg:tracking-wide font-semibold  ">
              Community Outreach Program
            </h1>
            <p className="desc text-sm md:text-lg">
              Join us as we reach out to the local community and make a positive
              impact.
            </p>
            <p className="date lg:p-2 mt-2 text-sm md:text-lg blueGradient text-white p-1 rounded">
              Saturday, Oct 30th
            </p>
          </div>
          <div className=" flex w-1/2  md:px-5  flex-col  gap-2 lg:gap-4 py-6 lg:py-8   ">
            <h1 className="title text-lg md:text-xl lg:tracking-wide font-semibold  ">
              Community Outreach Program
            </h1>
            <p className="desc text-sm md:text-lg">
              Join us as we reach out to the local community and make a positive
              impact.
            </p>
            <p className="date lg:p-2 mt-2 text-sm md:text-lg blueGradient text-white p-1 rounded">
              Saturday, Oct 30th
            </p>
          </div>
          <div className=" hidden xl:flex w-1/2  md:px-5  flex-col  gap-2 lg:gap-4 py-6 lg:py-8   ">
            <h1 className="title text-lg md:text-xl lg:tracking-wide font-semibold  ">
              Community Outreach Program
            </h1>
            <p className="desc text-sm md:text-lg">
              Join us as we reach out to the local community and make a positive
              impact.
            </p>
            <p className="date lg:p-2 mt-2 text-sm md:text-lg blueGradient text-white p-1 rounded">
              Saturday, Oct 30th
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
