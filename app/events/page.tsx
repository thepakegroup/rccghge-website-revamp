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

export default function page() {
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
        <div className=" even:flex-row-reverse flex items-center justify-center gap-8 flex-col lg:flex-row">
          {/* image */}
          <div className="relative w-full lg:w-1/2 lg:max-w-[500px] h-80 ">
            <p className="date absolute blueGradient rounded px-2 py-1 z-10 top-2 mx-auto md:text-lg right-0 left-0  w-fit text-nowrap ">
              March 10th- 10AM-12PM
            </p>

            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className="rounded-lg"
            />
          </div>
          {/* text */}
          <div className="text space-y-4 lg:w-1/2">
            <h1 className="text-xl md:text-2xl">Celebration Sunday</h1>
            <p className="md:text-lg">
              Come to the presence of God and feel God in mighty ways! It is a
              time to thank God for everything hr has done. Also, come with your
              dancing shoes because we are dancing like David danced.
            </p>
          </div>
        </div>
        <div className=" even:flex-row-reverse flex items-center justify-center gap-8 flex-col lg:flex-row ">
          {/* image */}
          <div className="relative w-full lg:w-1/2 lg:max-w-[500px] h-80 ">
            <p className="date absolute blueGradient rounded px-2 py-1 z-10 top-2 mx-auto md:text-lg right-0 left-0  w-fit text-nowrap ">
              March 10th- 10AM-12PM
            </p>

            <ImageFill
              src="/images/ourMinistries-card-img.png"
              className="rounded-lg"
            />
          </div>
          {/* text */}
          <div className="text space-y-4 lg:w-1/2">
            <h1 className="text-xl md:text-2xl">Celebration Sunday</h1>
            <p className="md:text-lg">
              Come to the presence of God and feel God in mighty ways! It is a
              time to thank God for everything hr has done. Also, come with your
              dancing shoes because we are dancing like David danced.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
