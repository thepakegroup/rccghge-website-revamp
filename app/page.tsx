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
import Link from "next/link";
import LogoDivider from "@/components/LogoDivider";

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
      <LogoDivider />
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
      <div className=" wrapper  flex lg:justify-center lg:items-center md:gap-20 flex-col lg:flex-row gap-5 md:py-10  relative">
        {/* image section */}
        <div className="flex items-center gap-10 lg:gap-18 justify-center ">
          <Image
            src="/images/phone-left.png"
            alt="phone"
            width={234}
            height={555}
            quality={100}
            className=" w-28 h-64 md:h-[450px] md:w-52 object-fill  "
          />
          <Image
            src="/images/phone-right.png"
            alt="phone"
            width={234}
            height={555}
            quality={100}
            className=" w-28  h-64 md:h-[450px] md:w-52 object-fill "
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
            <Link
              className="active:scale-90 "
              href={
                "https://play.google.com/store/apps/details?id=org.rccghge.mobile"
              }
              target="_blank">
              <Image
                src={"/images/get-on-playstore.png"}
                alt="get on playstore image"
                width={300}
                height={300}
                className="w-44 md:w-52   "
              />
            </Link>

            <Link
              className="active:scale-90 w-sc"
              href={"https://apps.apple.com/us/app/rccghge/id6463586154"}
              target="_blank">
              <Image
                src={"/images/get-on-applestore.png"}
                alt="get on appl store image"
                width={300}
                height={300}
                className="w-40 md:w-48 h-[53px] md:h-[63px] "
              />
            </Link>
          </div>
        </div>
      </div>

      <GetConnected />

      <PrayerRequestForm />
    </main>
  );
}
