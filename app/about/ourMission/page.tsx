import {
  getMinistries,
  getOurMissions,
  getPageDisplaySetting,
} from "@/app/utils/actions";
import EventsBlock from "@/components/EventsBlock";
import ServiceTimes from "@/components/ServiceTimes";
import React from "react";

export default async function page() {
  const missions = await getOurMissions();
  const displaySetting = await getPageDisplaySetting("our_mission");
  let our_service_times, our_upcoming_events;

  if (displaySetting) {
    ({ our_service_times, our_upcoming_events } = displaySetting);
  }

  return (
    <div className="flex flex-col page-spacing ">
      <div className="space-y-5 md:space-y-10 max-w-screen-md mx-auto">
        {missions?.map((mission, i) => {
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

      {our_service_times === "true" && <div><ServiceTimes /></div>}

      {/* events block */}

      {our_upcoming_events === "true" && <EventsBlock />}
    </div>
  );
}
