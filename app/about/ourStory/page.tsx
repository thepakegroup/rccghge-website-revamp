import { getPageWriteUp } from "@/app/utils/actions";
import EventsBlock from "@/components/EventsBlock";
import ServiceTimes from "@/components/ServiceTimes";
import TitleBorderTop from "@/components/TitleBorderTop";
import React from "react";

export default async function page() {
  const writeUp = await getPageWriteUp("our-story");
 
  return (
    <div className=" py-10 sm:py-20 space-y-10 sm:space-y-20">
      <div className="wrapper space-y-5 md:space-y-10 ">
        <TitleBorderTop title="A special welcome to you!" />
        <div className=" sm:text-lg space-y-4 tracking-wide leading-relaxed">
          {writeUp?.content && (
            <div dangerouslySetInnerHTML={{ __html: writeUp?.content }} />
          )}
        </div>
      </div>
      <ServiceTimes />
      <EventsBlock />
    </div>
  );
}
