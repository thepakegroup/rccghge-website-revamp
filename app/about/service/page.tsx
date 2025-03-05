import TitleBorderTop from "@/components/TitleBorderTop";
import ImageFill from "@/lib/components/ImageFill";
import React from "react";
import { Metadata } from "next";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { slideInFromBottom } from "../../give/page";
import { getServiceTimes } from "../../utils/api-request";
export const metadata: Metadata = {
  title: "Service Times",
};
export default async function page() {
  const serviceTimes = await getServiceTimes();

  return (
    <div className="py-12  ">
      <MotionDiv
        variants={slideInFromBottom(1, 0)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="space-y-10 ">
        {serviceTimes?.map((service, i) => {
          const [startTime, startAmPm, endTime, endAmPm] =
            service.service_period.split(" ");

          return (
            <div
              key={i}
              className="bg-primary/5 wrapper py-5 sm:py-8 flex flex-col items-center justify-center lg:flex-row gap-5 md:gap-10">
              {/* image */}
              <div className="w-full lg:w-2/5 h-56 md:h-80   relative">
                <ImageFill
                  src={service.image_url || "/images/service-times-img1.png"}
                />
              </div>
              {/* text content */}
              <div className="space-y-5 lg:w-3/5 md:space-y-8 md:text-lg">
                <TitleBorderTop
                  title={service.service_name.toLowerCase()}
                  className=" capitalize"
                />
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: service.service_description,
                  }}
                />
                <div className="flex items-center gap-3">
                  {/* <p className="blueGradient px-8 rounded ">{service.day}</p> */}
                  <p className="blueGradient px-8 rounded py-4  ">
                    {`${startTime} ${startAmPm} - ${endTime} ${endAmPm}`}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </MotionDiv>
    </div>
  );
}
