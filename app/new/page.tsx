import EventsBlock from "@/components/EventsBlock";
import ServiceTimes from "@/components/ServiceTimes";
import TitleBorderTop from "@/components/TitleBorderTop";
import React from "react";
import { getPageDisplaySetting } from "../utils/actions";
import {
  MotionDiv,
  MotionH1,
  SlideInFromBottom,
} from "@/lib/framer-motion/motionComponents";
import { slideInFromBottom } from "../give/page";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { FaCaretLeft } from "react-icons/fa6";
import Link from "next/link";
import ImageFill from "@/lib/components/ImageFill";

export const metadata: Metadata = {
  title: "New Here?",
  description: "Welcome to RCCG Heavens Glorious Embassy",
};
export default async function page() {
  const displaySetting = await getPageDisplaySetting("iam_new_page");
  let our_service_times, our_upcoming_events;

  if (displaySetting) {
    ({ our_service_times, our_upcoming_events } = displaySetting);
  }
  return (
    <SlideInFromBottom>
      <div className="page-spacing  relative sm:text-lg [&_a]:underline [&_a]:text-[#1ca8db]">
        <div className="">
          <MotionDiv
            variants={slideInFromBottom(1, 0.5)}
            initial="hidden"
            animate="visible"
            className="blueGradient w-[calc(100%-40px)] absolute -top-32 sm:-top-28 wrapper text-white rounded-lg left-0 right-0 p-5 lg:px-20 lg:text-lg z-20 max-w-screen-xl">
            <h1 className="text-lg sm:text-xl">
              Plan your visit to our church
            </h1>
            <p>
              Everyone is welcomed at RCCG HGE. It is our sincere desire that
              all men, women, boys and girls come into a saving knowledge of our
              Lord Jesus Christ and experience daily the power of His eternal
              love. A believer can increasingly grow into an intimate, vibrant
              relationship with Christ as he or she becomes more grounded in His
              Word.
            </p>
          </MotionDiv>
          {/* video section */}
          <div className="space-y-10 sm:space-y-12 mt-32 sm:mt-24 md:mt-16 lg:mt-10  ">
            <h1 className=" wrapper text-center  text-3xl sm:text-5xl ">
              Welcome to Heaven’s Glorious Assembly
            </h1>
            <div className=" w-[min(100%,1000px)] mb-12  md:mb-20 aspect-video lg:h-[480px] mx-auto bg-red-500 ">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aZNXDfOPGbs"
                title="Heaven’s Glorious Embassy (HGE) YouTube Channel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
        {/* sunday service */}
        <div className="space-y-8 sm:space-y-12  max-w-screen-2xl ">
          <h1 className="blueGradient  px-6 lg:px-12 text-white font-semibold flex items-center text-xl h-14 md:h-20 w-[280px] md:text-3xl sm:w-[300px] lg:w-[500px] relative">
            Sunday Services
            <FaCaretLeft className="absolute -right-16 md:text-[9rem] text-9xl" />
          </h1>
          <div className="grid grid-cols-1 gap-8 w-full mx-auto lg:grid-cols-[1fr_auto_1fr] wrapper">
            <div className="space-y-2 md:space-y-3  ">
              <TitleBorderTop title="Adults" />
              <p>
                We offer in-person worship services on Sundays at 8 and 11 am in
                the Worship Center and an online worship service at 11 am on
                YouTube and the HGE Online Church.
              </p>
              <br />
              <a
                href="https://youtube.com/@rccgheavensgloriousembassy?si=u6NvTF0k3CKmdaV6"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[#1ca8db] text-2xl py-4 lg:py-px font-playfair  font-bold  ">
                Watch on YouTube
              </a>
            </div>
            <Separator orientation="vertical" />
            <div className="space-y-8  ">
              <div className="space-y-2 md:space-y-3  ">
                <TitleBorderTop title="NextGen Youth" />
                <p>
                  NextGen Youth (grades 6 - 12) meet in person at 11 am on
                  campus and have a 1 pm broadcast on the{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    youth youtube page
                  </a>
                </p>
              </div>
              <div className="space-y-2 md:space-y-3  ">
                <TitleBorderTop title="NextGen Kids" />
                <p>
                  NextGen Kids (nursery - grade 5) meet in person on campus at 8
                  and 11 am. Visit our{" "}
                  <Link
                    href="/ourMinistries/Ministry/hge-children-ministry"
                    className="text-[#1ca8db]">
                    children’s ministry page
                  </Link>{" "}
                  to register your child to participate!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className=" h-80 lg:h-96 relative ">
          <ImageFill src="/images/hero-images/our-ministries-img.png" />
        </div>
        {/* Wednesday bible study*/}
        <div className="space-y-8 sm:space-y-12  max-w-screen ">
          <h1 className="blueGradient  px-6 lg:px-12 text-white font-semibold flex items-center text-xl h-14 md:h-20 w-[280px] md:text-3xl sm:w-[400px] lg:w-[500px] relative">
            Wednesday Bible Study
            <FaCaretLeft className="absolute -right-16 md:text-[9rem] text-9xl" />
          </h1>
          <div className="grid grid-cols-1 gap-8 w-full mx-auto lg:grid-cols-[1fr_auto_1fr] wrapper">
            <div className="space-y-2 md:space-y-3  ">
              <TitleBorderTop title="Adults" />
              <p>
                It’s the MEN and WOMEN at Wednesday Night Connect. Every 1st and
                3rd Wednesday, it’s Man Church. Every 2nd and 4th Wednesday,
                it’s the Gathering of the Girls. Let’s connect with God and each
                other around DYNAMIC WORSHIP, RELEVANT TEACHING, BIBLICAL
                APPLICATION and LOTS of FUN with music, food, games and more.
              </p>
            </div>
            <Separator orientation="vertical" />
            <div className="space-y-8  ">
              <div className="space-y-2 md:space-y-3  ">
                <TitleBorderTop title="NextGen Youth" />
                <p>
                  NextGen Youth meets at 7:00 pm in person with a check-in time
                  of 6:30 pm. Visit{" "}
                  <a href="" className="text-[#1ca8db]">
                    NextGen Youth
                  </a>{" "}
                  for more information.
                </p>
              </div>
              <div className="space-y-2 md:space-y-3  ">
                <TitleBorderTop title="NextGen Kids" />
                <p>
                  NextGen Kids meet at 7:00 pm in person with a check-in time of
                  6:30 pm.{" "}
                  <Link
                    href="/ourMinistries/Ministry/hge-children-ministry"
                    className="text-[#1ca8db]">
                    children’s ministry page
                  </Link>{" "}
                  to register your child to participate!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* blue Gratient text */}
        <div className=" flex items-center h-80 lg:h-96 relative blueGradient px-5 lg:px-48 max-w-screen-2xl ">
          <h1 className="text-center w-full text-xl lg:text-3xl !leading-loose tracking-wider  ">
            COMMUNION, PRAYER, PRAISE AND WORSHIP, GIVING, AND BIBLICAL TEACHING
            ARE KEY COMPONENTS OF OUR WORSHIP SERVICE EACH WEEK.
          </h1>
        </div>
        {/* plan your visit */}
        <div className="space-y-8 sm:space-y-12 wrapper max-w-screen-2xl ">
          <h1 className=" text-center text-3xl sm:text-4xl -mb-2">
            Plan your visit
          </h1>
          <div className="grid grid-cols-1 gap-8 w-full mx-auto  lg:grid-cols-[1fr_auto_1fr]">
            <div className="space-y-2 md:space-y-5  ">
              <TitleBorderTop title="Arrival & Parking" />
              <p>
                There are four entrances to the parking lots on the south side
                of W. Camp Wisdom Road where our Worship Center is located.
                Please arrive 15-20 minutes prior to the start of service
                because the parking lots fill up quickly. Parking lot
                attendants, wearing bright yellow shirts, are available to help
                you navigate the lots.
              </p>
              <p>
                <span className="font-semibold">Parking for the Disabled</span>
                <br />
                When you enter the church parking lot, a parking attendant can
                direct you to reserved parking near the west side and east side
                entrances of the Worship Center.
              </p>
              <p>
                <span className="font-semibold">Satellite Parking</span>
                <br />
                We offer shuttle service on Sundays from satellite parking
                sites, east of the Worship Center, before and after each
                service.
              </p>
            </div>
            <Separator orientation="vertical" />
            <div className="space-y-2 md:space-y-5  ">
              <TitleBorderTop title="The Worship Experience" />
              <p>
                The four parking lot entrances on the south side of W. Camp
                Wisdom Road lead to the Worship Center’s main foyer. Once you
                enter the Worship Center, you’ll find friendly greeters to
                assist you with directions to the sanctuary and restrooms. An
                usher will help you find a seat. Communion, prayer, praise and
                worship, giving and biblical teaching are key components of our
                worship service each week. You will experience dynamic praise
                and worship, comprising a blend of contemporary and traditional
                gospel music. Our Senior Pastor, Pastor John Omewah, delivers an
                energetic, inspiring and challenging Word from the Lord. Sunday
                morning services are approximately one hour and 45 minutes in
                length
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideInFromBottom>
  );
}
