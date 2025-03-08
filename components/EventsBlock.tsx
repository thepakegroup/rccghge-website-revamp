"use client";
import { Event, get3Events } from "@/app/utils/api-request";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCaretRight } from "react-icons/fa";

export default function EventsBlock() {
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
    return [`${formattedStartMonth}`, `${formattedStartTime} `];
  };
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const eventsData = await get3Events();
      setEvents(eventsData || []);
    }
    fetchEvents();
  }, []);
  return (
    
    <div className=" flex flex-col items-center wrapper  lg:flex-row gap-1 lg:gap-0   ">
      <div className="h-10 pl-2 lg:wrapper  items-center lg:items-start w-full lg:h-80 lg:w-2/5 lg:max-w-80 lg:gap-2 lg:pt-20 lg:flex-col flex gap-5  blueGradient py-8 text-white relative ">
        <Image
          src="/images/calender_icon.png"
          alt="calendar"
          width={30}
          height={30}
        />
        <h1 className="text-2xl md:text-3xl lg:text-left  capitalize">
          Our Upcoming Events
        </h1>
        <FaCaretRight className="hidden lg:block absolute top-20  text-9xl -right-[70px] -z-10 text-[#4977bd]" />
      </div>
      {/* events */}
      <div
        className="flex px-2 py-2  md:px-8 w-full  gap-2 bg-primary/5 h-fit
       lg:h-80 md:divide-x-2 lg:py-5 overflow-auto lg:overflow-hidden relative">
        {events?.length === 0 ? (
          <h1 className="text-center w-full h-full flex items-center font-semibold justify-center text-gray-500  text-xl">
            No upcoming events at the moment
          </h1>
        ) : (
          events?.map((event, i) => {
            const startDate = new Date(event.start_date);
            const endDate = new Date(event.end_date);
            const [formattedStartMonth, formattedTimeRange] =
              formattedDateRange(startDate, endDate);
            return (
              <Link
                key={i}
                href={"/events"}
                className={cn(
                  `flex  text-left overflow-hidden w-full md:px-5  items-start  flex-col gap-3 lg:gap-4 pb-8 lg:py-8 `,
                  i === 2 && "hidden xl:flex",
                  i === 1 && "hidden sm:flex"
                )}>
                <h1 className="title text-lg truncate overflow-ellipsis max-w-xl md:text-xl lg:tracking-wide font-semibold    ">
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
          })
        )}
        {events?.length !== 0 && (
          <Link
            href={"/events"}
            className="  mt-8 lg:mt-0   border-none   lg:text-lg text-primary absolute right-0  left-0 bottom-1  flex items-center gap-2 justify-start  md:justify-end  lg:right-20 lg:bottom-5 font-semibold px-2 md:px-12 lg:px-0">
            <span>see more events</span> <MoveRight className="text-primary" />
          </Link>
        )}
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
