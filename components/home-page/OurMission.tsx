import {
  getHeroContent,
  getOurMissions,
  getPageDisplaySetting,
} from "@/app/utils/api-request";
import ImageFill from "@/lib/components/ImageFill";
import EventsBlock from "../EventsBlock";
import LearnMoreBtn from "../LearnMoreBtn";
import ServiceTimes from "../ServiceTimes";
import TitleBorderTop from "../TitleBorderTop";
import { Skeleton } from "../ui/skeleton";

export default async function OurMission() {
  const missions = await getOurMissions();
  const imgArr = await getHeroContent("our_mission").then((res) => res?.ImgArr);


  return (
    <div className="flex sm:gap-10 lg:gap-14 ">
      <div className="hidden lg:w-2/5 sm:w-4/5 sm:h-[340px]  relative  sm:block">
        {imgArr ? (
          <ImageFill src={imgArr[0]} className="" />
        ) : (
          <Skeleton className=" w-full h-full" />
        )}
      </div>

      <div className=" w-full lg:w-3/5 h-full  flex flex-col gap-5 lg:gap-8">
        {/* title */}
        <TitleBorderTop title="Our Mission & Vision" />
        {/*content  */}
        {missions?.map((mission, i) => (
          <div key={i} className="mission space-y-2">
            <h1 className="text-xl capitalize sm:text-2xl  ">
              {mission.title}
            </h1>
            <p className="desc line-clamp-2  ">{mission.description}</p>
          </div>
        ))}

        {/* learn More button */}
        <LearnMoreBtn url="/about/ourMission" className="w-32" />
      </div>
    </div>
  );
}
