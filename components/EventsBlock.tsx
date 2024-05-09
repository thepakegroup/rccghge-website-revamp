import { get3Events } from "@/app/utils/actions";
import { MoveRight } from "lucide-react";
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
    <div className=" flex flex-col items-center lg:flex-row gap-1 lg:gap-0   ">
      <div className="h-10 wrapper  items-center w-full lg:h-80 lg:w-2/5 lg:max-w-80 lg:gap-2 lg:pt-16 lg:flex-col flex gap-5  blueGradient py-8 text-white relative">
        <FaCalendar className="text-2xl md:text-3xl lg:self-start " />
        <h1 className="text-2xl md:text-3xl  capitalize">
          Our Upcoming Events
        </h1>
        <FaCaretRight className="hidden lg:block absolute top-20  text-9xl -right-[70px] -z-10 text-[#4372b9]" />
      </div>
      {/* events */}
      <div
        className="flex px-2 py-2  md:px-12 w-full  gap-2 bg-primary/5 h-80
       lg:h-80 md:divide-x-2 lg:py-5 overflow-auto lg:overflow-hidden relative"
      >
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
                className={`${i === 2 ? "hidden xl:flex" : i === 0 ? "hidden sm:flex" : "flex"}  text-left overflow-hidden w-full lg:px-5  items-start  flex-col gap-3 lg:gap-4 pb-8 lg:py-8 px-6   `}
              >
                <h1 className="title text-lg truncate max-w-xl md:text-xl lg:tracking-wide font-semibold   ">
                  {event.title}
                </h1>
                <p className="desc  text-sm md:text-lg text-gray-500  line-clamp-3 max-w-xl ">
                  {event.short_description}
                </p>
                <p className="date mt-auto w-fit tracking-wide px-5  lg:p-2  text-sm md:text-base blueGradient text-white p-1 items-center flex  rounded">
                  {formattedStartMonth}, {formattedTimeRange}
                </p>
              </Link>
            );
          })}
        <Link
          href={"/events"}
          className="  mt-8 lg:mt-0  border-none  text-sm text-primary absolute right-0  left-0 bottom-1  flex items-center gap-2 justify-start  md:justify-end  lg:right-20 lg:bottom-5 font-semibold px-7 md:px-12 lg:px-0"
        >
          <span>see more events</span> <MoveRight className="text-primary" />
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
