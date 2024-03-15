import EventsBlock from "@/components/EventsBlock";
import Logo from "@/components/Logo";
import ServiceTimes from "@/components/ServiceTimes";
import GetConnected from "@/components/home-page/GetConnected";
import GiveCTA from "@/components/home-page/GiveCTA";
import OurMinistries from "@/components/home-page/OurMinistries";
import OurMission from "@/components/home-page/OurMission";
import PrayerRequestForm from "@/components/home-page/PrayerRequestForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="  py-8 ">
      {/* divider */}
      <div className="wrapper flex items-center w-full gap-3 lg:mb-16 lg:mt-5">
        <div className="line blueGradient w-full h-0.5"></div>
        <Logo className="w-20 lg:w-28" />
        <div className="line blueGradient w-full h-0.5"></div>
      </div>
      {/* service time component */}
      <div className="wrapper mb-14 lg:mb-20">
        <ServiceTimes />
      </div>
      {/* events block */}
      <div className=" mb-14 lg:mb-20">
        <EventsBlock />
      </div>
      <div className="wrapper mb-14 lg:mb-20">
        <OurMission />
      </div>
      <div className="wrapper mb-14 lg:mb-20">
        <OurMinistries />
      </div>
      <div className=" mb-14 lg:mb-20">
        <GiveCTA />
      </div>
      {/* download app image section */}
      <div className=" mb-14 lg:mb-20 flex lg:justify-center lg:items-center lg:gap-20 flex-col lg:flex-row gap-5  relative">
        {/* image section */}
        <div className="flex items-center gap-8 justify-center">
          <Image
            src="/images/phone-left.png"
            alt="phone"
            width={234}
            height={555}
            className=" w-28 h-64 lg:h-80 lg:w-36 object-fill "
          />
          <Image
            src="/images/phone-right.png"
            alt="phone"
            width={234}
            height={555}
            className=" w-28  h-64 lg:h-80 lg:w-36 object-fill "
          />
        </div>
        {/* text section */}
        <div className="flex flex-col gap-6">
          <div className="text container space-y-4 lg:space-y-6">
            <h1 className="font-bold text-xl md:text-2xl text-center ">
              {" "}
              Download The RCCGHE App
            </h1>
            <ol className="space-y-2 lg:space-y-4 mx-auto w-fit">
              <li className="list-disc">Submit Prayer Requests</li>
              <li className="list-disc">Watch And Listen To Sermons</li>
              <li className="list-disc">Find A Small Group</li>
              <li className="list-disc">Access Study Guides</li>
            </ol>
          </div>
          {/* download buttons */}
          <div className="flex items-center justify-center gap-2 ">
            <Image
              src={"/images/get-on-playstore.png"}
              alt="get on playstore image"
              width={300}
              height={300}
              className="w-44  "
            />
            <Image
              src={"/images/get-on-applestore.png"}
              alt="get on appl store image"
              width={300}
              height={300}
              className="w-40 h-[53px] "
            />
          </div>
        </div>
      </div>
      <GetConnected />
      <PrayerRequestForm/>

    </main>
  );
}
