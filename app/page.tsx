import EventsBlock from "@/components/EventsBlock";
import Logo from "@/components/Logo";
import ServiceTimes from "@/components/ServiceTimes";
import GetConnected from "@/components/home-page/GetConnected";
import GiveCTA from "@/components/home-page/GiveCTA";
import OurMinistries from "@/components/home-page/OurMinistries";
import OurMission from "@/components/home-page/OurMission";
import PrayerRequestForm from "@/components/home-page/PrayerRequestForm";
import Image from "next/image";
import { getPageDisplaySetting } from "./utils/actions";

export default async function Home() {
  const displaySetting = await getPageDisplaySetting("landing_page");
  let our_service_times,
    our_upcoming_events,
    our_mission_vision,
    our_ministries;
  if (displaySetting) {
    ({
      our_service_times,
      our_upcoming_events,
      our_mission_vision,
      our_ministries,
    } = displaySetting);
  }
 
  return (
    <main className=" page-spacing">
      {/* divider */}
      <div className="wrapper flex items-center w-full gap-3 lg:mb-16 lg:mt-5">
        <div className="line blueGradient w-full h-0.5"></div>
        <Logo className="w-20 lg:w-28" />
        <div className="line blueGradient w-full h-0.5"></div>
      </div>
      {our_service_times === "true" && <ServiceTimes />}

      {our_upcoming_events === "true" && <EventsBlock />}
      <div className="wrapper ">
        {our_mission_vision === "true" && <OurMission />}
      </div>
      <div className="wrapper ">
        {our_ministries === "true" && <OurMinistries />}
      </div>
      <GiveCTA />
      {/* download app image section */}
      <div className=" wrapper  flex lg:justify-center lg:items-center md:gap-20 flex-col lg:flex-row gap-5  relative">
        {/* image section */}
        <div className="flex items-center gap-10 lg:gap-18 justify-center ">
          <Image
            src="/images/phone-left.png"
            alt="phone"
            width={234}
            height={555}
            className=" w-28 h-64 md:h-[420px] md:w-52 object-fill  "
          />
          <Image
            src="/images/phone-right.png"
            alt="phone"
            width={234}
            height={555}
            className=" w-28  h-64 md:h-[420px] md:w-52 object-fill "
          />
        </div>
        {/* text section */}
        <div className="flex flex-col gap-6 space-y-4 md:space-y-10">
          <div className="text container space-y-4 md:space-y-10">
            <h1 className="font-bold text-xl md:text-3xl text-center ">
              {" "}
              Download The RCCGHE App
            </h1>
            <ol className="space-y-2 md:space-y-6 mx-auto md:text-xl w-fit">
              <li className="list-disc">Submit Prayer Requests</li>
              <li className="list-disc">Watch And Listen To Sermons</li>
              <li className="list-disc">Find A Small Group</li>
              <li className="list-disc">Access Study Guides</li>
            </ol>
          </div>
          {/* download buttons */}
          <div className="flex items-center justify-center gap-5  ">
            <Image
              src={"/images/get-on-playstore.png"}
              alt="get on playstore image"
              width={300}
              height={300}
              className="w-44 md:w-52   "
            />
            <Image
              src={"/images/get-on-applestore.png"}
              alt="get on appl store image"
              width={300}
              height={300}
              className="w-40 md:w-48 h-[53px] md:h-[63px] "
            />
          </div>
        </div>
      </div>

      <GetConnected />

      <PrayerRequestForm />
    </main>
  );
}
