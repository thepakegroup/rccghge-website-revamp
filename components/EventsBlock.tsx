import Link from "next/link";
import React from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";

export default function EventsBlock() {
  return (
    <div className=" flex flex-col items-center lg:flex-row">
      <div className="h-10 wrapper py-10 w-full lg:h-60 lg:w-80 lg:text-center lg:gap-2 lg:pt-16 lg:flex-col flex gap-5 items-center blueGradient text-white relative">
        <FaCalendar className="text-2xl" />
        <h1 className="text-2xl  capitalize">Our Upcoming Events</h1>
        <FaCaretRight className="hidden lg:block absolute top-24  text-5xl -right-[28px] text-[#4372b9]" />
        <FaCaretDown className=" sm:hidden absolute -bottom-7 left-40 text-5xl text-[#2b4a83]" />
      </div>
      {/* events */}
      <Link href={"/events"}>
        <div className="flex w-full bg-primary/5 items-center lg:h-60 lg:divide-x lg:py-5">
          <div className="h-60 w-1/2  flex flex-col gap-1 lg:gap-4 pt-8 lg:pt-10  px-4 ">
            <h1 className="title text-lg sm:text-xl lg:tracking-wide font-semibold  ">
              Community Outreach Program
            </h1>
            <p className="desc text-sm sm:text-base">
              Join us as we reach out to the local community and make a positive
              impact.
            </p>
            <p className="date lg:p-2 text-sm sm:text-base blueGradient text-white p-1 rounded">
              Saturday, Oct 30th
            </p>
          </div>

          <div className="h-60 w-1/2  flex flex-col gap-1 lg:gap-4 pt-8 lg:pt-10  px-4 ">
            <h1 className="title text-lg sm:text-xl lg:tracking-wide font-semibold  ">
              Community Outreach Program
            </h1>
            <p className="desc text-sm sm:text-base">
              Join us as we reach out to the local community and make a positive
              impact.
            </p>
            <p className="date lg:p-2 text-sm sm:text-base blueGradient text-white p-1 rounded">
              Saturday, Oct 30th
            </p>
          </div>

          <div className="hidden lg:flex h-60 w-1/2   flex-col gap-1 lg:gap-4 pt-8 lg:pt-10  px-4 ">
            <h1 className="title text-lg sm:text-xl lg:tracking-wide font-semibold  ">
              Community Outreach Program
            </h1>
            <p className="desc text-sm sm:text-base">
              Join us as we reach out to the local community and make a positive
              impact.
            </p>
            <p className="date lg:p-2 text-sm sm:text-base blueGradient text-white p-1 rounded">
              Saturday, Oct 30th
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
