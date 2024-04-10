import React from "react";
import LearnMoreBtn from "./LearnMoreBtn";
import ImageFill from "@/lib/components/ImageFill";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import TitleBorderTop from "./TitleBorderTop";
import { getServiceTimes } from "@/app/utils/actions";
import {
  MotionDiv,
  staggerContainer,
  staggerFromRightItem,
} from "@/lib/framer-motion/motionComponents";
import { Variants } from "framer-motion";

export default async function ServiceTimes() {
  const serviceTimes = await getServiceTimes();

  return (
    <div className="flex items-center  wrapper  md:gap-8 ">
      <div className="hidden md:w-2/5 md:h-[480px] relative  lg:block">
        <ImageFill src="/images/service-component-img.png" className="" />
      </div>

      <div className=" w-full lg:w-3/5 h-full  flex flex-col gap-5">
        {/* title */}
        <TitleBorderTop title={"Our Service Times"} />
        {/* card */}
        <ScrollArea className="w-full ">
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            className=" card-container w-full h-72 md:h-80 mb-3  flex item-center gap-5">
            {serviceTimes?.map((service, i) => {
              const [startTime, startAmPm, endTime, endAmPm] =
                service.service_period.split(" ");

              return (
                <MotionDiv
                  variants={staggerFromRightItem}
                  key={i}
                  className="card  ">
                  <div className=" absolute top-2 left-2 text-sm z-10 blueGradient rounded px-2 text-white">
                    {`${startTime} ${startAmPm} - ${endTime} ${endAmPm}`}
                  </div>
                  <div className="image relative h-1/2 ">
                    <ImageFill
                      src={
                        service.image_url || "/images/service-component-img.png"
                      }
                      className="rounded-t-md"
                    />
                  </div>

                  <div className="card-content py-2 px-1 h-1/2 ">
                    <p className="card-title font-bold capitalize ">
                      {service.service_name}
                    </p>
                    <p className="desc text-sm line-clamp-4 ">
                      {service.service_description}
                    </p>
                  </div>
                </MotionDiv>
              );
            })}
          </MotionDiv>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <LearnMoreBtn url="/service" />
      </div>
    </div>
  );
}
