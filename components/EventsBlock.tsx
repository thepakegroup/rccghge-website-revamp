import { get3Events } from "@/app/utils/actions";
import Link from "next/link";
import React from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";

export default async function EventsBlock() {
  const formattedDateRange = (startDate: Date, endDate: Date) => {
    const formattedStartMonth = startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const formattedStartTime = startDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    const formattedEndTime = endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    return [
      `${formattedStartMonth}`,
      `${formattedStartTime} - ${formattedEndTime}`,
    ];
  };
  const events = await get3Events();
  return (
    <div className=" flex flex-col items-center lg:flex-row ">
      <div className="h-10 wrapper  w-full lg:h-80 lg:w-2/5 lg:max-w-80 lg:text-center lg:gap-2 lg:pt-16 lg:flex-col flex gap-5 items-center blueGradient py-8 text-white relative">
        <FaCalendar className="text-2xl md:text-3xl " />
        <h1 className="text-2xl md:text-3xl  capitalize">
          Our Upcoming Events
        </h1>
        <FaCaretRight className="hidden lg:block absolute top-20  text-9xl -right-[70px] text-[#4372b9]" />
        <FaCaretDown className=" md:hidden absolute -bottom-7 left-40 text-5xl text-[#2b4a83]" />
      </div>
      {/* events */}
      <div className="flex px-2 py-2  md:px-12 w-full  gap-2 bg-primary/5 items-center lg:h-80 lg:divide-x lg:py-5 overflow-hidden relative">
        {events &&
          events?.map((event, i) => {
            const startDate = new Date(event.start_date);
            const endDate = new Date(event.end_date);
            const [formattedStartMonth, formattedTimeRange] =
              formattedDateRange(startDate, endDate);
            return (
              <Link
                key={i}
                href={"/events"}
                className={`${i === 2 ? "hidden xl:flex" : "flex"}  text-center overflow-hidden w-full h-full  md:px-5  flex-col  gap-2 lg:gap-4 py-6 lg:py-8   `}>
                <h1 className="title text-lg truncate max-w-xl  md:text-xl lg:tracking-wide font-semibold  ">
                  {event.title}
                </h1>
                <p className="desc text-sm md:text-lg line-clamp-3 max-w-xl">
                  {event.short_description}
                </p>
                <p className="date w-fit tracking-wide px-5  text-center mx-auto  lg:p-2 mt-2 text-sm md:text-base blueGradient text-white p-1 flex-col flex md:block  rounded">
                  <span>{formattedStartMonth}</span>{" "}
                  <span>{formattedTimeRange}</span>
                </p>
              </Link>
            );
          })}
        <Link
          href={"/events"}
          className="  border-none  text-sm text-primary absolute right-0 left-0 bottom-1  text-center lg:text-right lg:right-20 lg:bottom-5 font-semibold ">
          click to see more{" "}
        </Link>
      </div>
    </div>
  );
}
{
  /* <div className=" hidden xl:flex w-1/2  md:px-5  flex-col  gap-2 lg:gap-4 py-6 lg:py-8   ">
  <h1 className="title text-lg md:text-xl lg:tracking-wide font-semibold  ">
    Community Outreach Program
  </h1>
  <p className="desc text-sm md:text-lg">
    Join us as we reach out to the local community and make a positive impact.
  </p>
  <p className="date lg:p-2 mt-2 text-sm md:text-lg blueGradient text-white p-1 rounded">
    Saturday, Oct 30th
  </p>
</div>; */
}
