import ImageFill from "@/lib/components/ImageFill";
import React from "react";
import TitleBorderTop from "../TitleBorderTop";
import LearnMoreBtn from "../LearnMoreBtn";
import { getOurMissions } from "@/app/utils/actions";

export default async function OurMission() {
  const missions = await getOurMissions();
  
  return (
    <div className="flex lg:gap-14 ">
      <div className="hidden lg:w-2/5 lg:h-[340px]  relative  lg:block">
        <ImageFill src="/images/ourMission-img.png" />
      </div>

      <div className=" w-full lg:w-3/5 h-full  flex flex-col gap-5 lg:gap-8">
        {/* title */}
        <TitleBorderTop title="Our Mission & Vision" />
        {/*content  */}
        {missions?.map((mission, i) => (
          <div key={i} className="mission space-y-2">
            <h1 className="text-xl capitalize sm:text-2xl font-bold ">
              {mission.title}
            </h1>
            <p className="desc line-clamp-2 ">
             {mission.description}
            </p>
          </div>
        ))}

        {/* learn More button */}
        <LearnMoreBtn url="/about/ourMission" className="w-32" />
      </div>
    </div>
  );
}
