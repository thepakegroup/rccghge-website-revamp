import { getAllMissions } from "@/app/utils/actions";
import EventsBlock from "@/components/EventsBlock";
import ServiceTimes from "@/components/ServiceTimes";
import React from "react";

export default async function page() {
  const mission = await getAllMissions();


  return (
    <div className="flex flex-col page-spacing ">
      <div className="space-y-5 md:space-y-10 max-w-screen-md mx-auto">
        {mission?.map((mission, i) => {
          return (
            <div
              key={i}
              className="border-2 rounded-lg p-3 md:space-y-4   mx-6 lg:mx-12">
              <h1 className="text-xl sm:text-2xl">{mission.title}</h1>
              <p className="font-medium text-[15px] sm:text-lg">
                {mission.description}
              </p>
            </div>
          );
        })}
      </div>
      {/* service time component */}
      <div className=" ">
        <ServiceTimes />
      </div>
      {/* events block */}
      <div className=" ">
        <EventsBlock />
      </div>
    </div>
  );
}
