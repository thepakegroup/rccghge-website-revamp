import SearchBar from "@/components/SearchBar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageFill from "@/lib/components/ImageFill";
import React from "react";
import { Event, getAllEvents } from "../utils/actions";
export const formattedDateRange = (startDate: Date, endDate: Date) => {
  const formattedStartDate = startDate.toLocaleDateString("en-US", {
    month: "long",
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
  return `${formattedStartDate} - ${formattedStartTime}-${formattedEndTime}`;
};
export default async function page() {
  const months = [
    "january ",
    "febuary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ] as const;
  // Get current month (0-indexed)
  const currentMonthIndex = new Date().getMonth();
  const defaultMonth = months[currentMonthIndex];
  const events = await getAllEvents();

  return (
    <div className="py-12 md:py-20 wrapper space-y-10">
      {/* search bar */}
      <div className="flex items-center gap-10">
        <Select>
          <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0    capitalize  md:text-base w-fit font-semibold ">
            <SelectValue placeholder={defaultMonth} />
          </SelectTrigger>
          <SelectContent>
            {months.map((month) => {
              return (
                <SelectItem
                  className="capitalize md:text-base"
                  key={month}
                  value={month}>
                  {month}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <SearchBar />
      </div>
      {/* Events */}

      <div className="flex flex-col py-10  gap-10">
        {/* cards sections */}
        {events?.map((event, i) => {
          // getting formatted date
          const startDate = new Date(event.start_date);
          const endDate = new Date(event.end_date);

          return (
            <div
              key={i}
              className=" even:flex-row-reverse flex items-center justify-center gap-8 flex-col lg:flex-row">
              {/* image */}
              <div className="relative w-full lg:w-1/2 lg:max-w-[500px] h-80 ">
                <p className="date absolute blueGradient rounded px-2 py-1 z-10 top-2 mx-auto md:text-lg right-0 left-0  w-fit text-nowrap ">
                  {event.location} :{" "}
                  {`${formattedDateRange(startDate, endDate)}`}
                </p>

                <ImageFill
                  src={` https://${event.banner}`}
                  className="rounded-lg"
                />
              </div>
              {/* text */}
              <div className="text space-y-4 lg:w-1/2">
                <h1 className="text-xl md:text-2xl">{event.title}</h1>
                <p className="md:text-lg">{event.short_description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
