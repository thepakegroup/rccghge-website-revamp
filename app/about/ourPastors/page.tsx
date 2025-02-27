import { slideInFromBottom } from "@/app/give/page";
import { getAllLeaders, getPageDisplaySetting } from "@/app/utils/api-request";
import EventsBlock from "@/components/EventsBlock";
import ServiceTimes from "@/components/ServiceTimes";
import TitleBorderTop from "@/components/TitleBorderTop";
import ImageFill from "@/lib/components/ImageFill";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Our Pastors",
  description:
    "Just as Shepherd would not leave his sheep behind, So would the Lord not leave thee behind",
};
export default async function OurPastors() {
  const leaders = await getAllLeaders();
  const displaySetting = await getPageDisplaySetting("our_pastors");
  let our_service_times, our_upcoming_events;

  if (displaySetting) {
    ({ our_service_times, our_upcoming_events } = displaySetting);
  }

  return (
    <div className="py-12 ">
      <div className=" space-y-14    text-center">
        {/* lead pastor */}
        <MotionDiv
          variants={slideInFromBottom(1, 1)}
          initial="hidden "
          animate={"visible"}
          className="space-y-14">
          {leaders?.map((leader, i) => {
            return (
              <div
                key={i}
                className=" w-[96%] lg:w-[90%] space-y-8 lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24  tracking-wide leading-relaxed   ">
                {/* image section */}
                <div className="flex flex-col items-center justify-center gap-2 ">
                  <div className="lg:hidden">
                    <TitleBorderTop title={`${leader.position}`} />
                  </div>
                  <div className="image-container relative max-w-sm py-8 lg:py-0 flex items-center justify-center ">
                    {/* image */}
                    <div className=" w-80 h-64 md:h-80   relative aspect-square">
                      {/* orange box */}
                      <div className="box bg-primary rounded-lg absolute -top-2 sm: -left-2 w-52 h-1/2 aspect-square"></div>

                      <ImageFill
                        src={`${process.env.NEXT_PUBLIC_STAGING_API_URL}/load-media/${leader.profile_picture}`}
                        className="z-10 "
                      />

                      {/* repeat box background */}
                      <div className="absolute w-32 aspect-square -bottom-5 -right-4 ">
                        <ImageFill
                          src="/images/repeat-box-bg-img.png"
                          className=" object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <h1 className="lg:hidden font-semibold text-lg sm:text-xl -mt-4">
                    {`${leader.name}, ${leader.qualification}`}
                  </h1>
                </div>
                {/* text-section */}
                <div className="space-y-2 md:space-y-5  lg:text-left lg:w-3/5">
                  <div className="hidden lg:block">
                    <TitleBorderTop title={`${leader.position}`} />
                  </div>
                  <p className="text-justify">{leader.short_description}</p>

                  <h1 className="hidden lg:block font-semibold text-lg sm:text-xl">
                    {leader.name}
                  </h1>
                  <Link
                    href={`/about/ourPastors/${leader.slug}`}
                    className="flex items-center text-primary justify-center gap-2 hover:gap-3 hover:scale-105 w-fit mx-auto lg:mx-0  ">
                    Read more <FaArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </MotionDiv>

        {our_upcoming_events === "true" && <EventsBlock />}
        {our_service_times === "true" && <ServiceTimes />}
      </div>
    </div>
  );
}
