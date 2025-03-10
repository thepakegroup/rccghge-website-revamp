import EventsBlock from '@/components/EventsBlock';
import LogoDivider from '@/components/LogoDivider';
import ServiceTimes from '@/components/ServiceTimes';
import GetConnected from '@/components/home-page/GetConnected';
import GiveCTA from '@/components/home-page/GiveCTA';
import OurMinistries from '@/components/home-page/OurMinistries';
import OurMission from '@/components/home-page/OurMission';
import PrayerRequestForm from '@/components/home-page/PrayerRequestForm';
import { MotionMain } from '@/lib/framer-motion/motionComponents';
import Image from 'next/image';
import Link from 'next/link';
import { slideInFromBottom } from './give/page';
import { getPageDisplaySetting } from './utils/api-request';
import MaxWidthContainer from '@/components/MaxWidthContainer';
export default async function Home() {
  const displaySetting = await getPageDisplaySetting('landing_page');
  let our_service_times, our_upcoming_events, our_mission_vision, our_ministries, give_section;

  if (displaySetting) {
    ({ our_service_times, our_upcoming_events, our_mission_vision, our_ministries, give_section } =
      displaySetting);
  }

  return (
    <MotionMain
      variants={slideInFromBottom(1, 0.5)}
      initial="hidden"
      animate="visible"
      className=" page-spacing"
    >
      {/* divider */}
      <div className="-my-5">
        <LogoDivider />
      </div>
      {our_service_times === 'true' && <ServiceTimes />}
      {our_upcoming_events === 'true' && <EventsBlock />}
      <MaxWidthContainer className=" page-spacing">
        <div className="wrapper ">{our_mission_vision === 'true' && <OurMission />}</div>
      </MaxWidthContainer>

      <div className="wrapper blueGradient py-10   ">
        {our_ministries === 'true' && <OurMinistries />}
      </div>
      <MaxWidthContainer className=" page-spacing">
        <div className="wrapper ">{give_section && <GiveCTA give_section={give_section} />}</div>
        {/* download app image section */}
        <div className=" wrapper  relative flex flex-col gap-5 sm:flex-row md:gap-20 md:py-10 lg:items-center  lg:justify-center">
          {/* image section */}
          <div className="lg:gap-18 flex items-center justify-center gap-10 sm:w-1/2 ">
            <Image
              src="/images/phone-left.png"
              alt="phone"
              width={234}
              height={555}
              quality={100}
              className=" h-64 w-28 object-fill md:h-[350px] md:w-52 lg:h-[450px]  "
            />
            <Image
              src="/images/phone-right.png"
              alt="phone"
              width={234}
              height={555}
              quality={100}
              className=" h-64  w-28 object-fill md:h-[350px] md:w-52 lg:h-[450px] "
            />
          </div>
          {/* text section */}
          <div className="flex flex-col gap-6 space-y-4 sm:w-1/2 lg:space-y-10">
            <div className="text container  space-y-4 lg:space-y-10">
              <h1 className="text-center text-xl font-bold md:text-2xl lg:text-3xl ">
                {' '}
                Download The RCCGHGE App
              </h1>
              <ol className="mx-auto w-fit space-y-2 md:space-y-6 lg:text-xl">
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
                href={'https://play.google.com/store/apps/details?id=org.rccghge.mobile'}
                target="_blank"
              >
                <Image
                  src={'/images/get-on-playstore.png'}
                  alt="get on playstore image"
                  width={300}
                  height={300}
                  className="w-44 lg:w-52   "
                />
              </Link>

              <Link
                className="w-sc active:scale-90"
                href={'https://apps.apple.com/us/app/rccghge/id6463586154'}
                target="_blank"
              >
                <Image
                  src={'/images/get-on-applestore.png'}
                  alt="get on appl store image"
                  width={300}
                  height={300}
                  className="h-[53px] w-40 lg:h-[63px] lg:w-48 "
                />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
      <GetConnected />

      <PrayerRequestForm />
    </MotionMain>
  );
}
