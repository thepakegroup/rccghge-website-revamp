import React from "react";
import { FaCalendar } from "react-icons/fa6";

export default function EventsBlock() {
  return (
    <div className=" flex flex-col items-center lg:flex-row">
      <div className="h-10 wrapper py-10 w-full lg:h-60 lg:w-80 lg:text-center lg:gap-2 lg:pt-16 lg:flex-col flex gap-10  items-center blueGradient text-white">
        <FaCalendar className="text-2xl" />
        <h1 className="text-2xl  capitalize">Our Upcoming Events</h1>
      </div>
      {/* events */}
      <div
        className="flex w-full bg-primary/5 items-center">
        <div className="h-60 w-1/2  flex flex-col gap-1 lg:gap-4 pt-8 lg:pt-16  px-4 ">
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
        <div className="h-60 w-1/2  flex flex-col gap-1 lg:gap-4 pt-8 lg:pt-16  px-4 ">
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
        <div className="hidden lg:flex h-60 w-1/2   flex-col gap-1 lg:gap-4 pt-8 lg:pt-16  px-4 ">
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
    </div>
  );
}
