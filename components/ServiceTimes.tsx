"use client"
import { getServiceTimes, ServiceTime } from "@/app/utils/api-request";
import ImageFill from "@/lib/components/ImageFill";
import {
  MotionDiv,
  MotionLink,
  staggerContainer,
  staggerFromRightItem,
} from "@/lib/framer-motion/motionComponents";
import { useEffect, useState } from "react";
import LearnMoreBtn from "./LearnMoreBtn";
import TitleBorderTop from "./TitleBorderTop";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function ServiceTimes() {
  const [serviceTimes, setServiceTimes] = useState<ServiceTime[] | undefined>();

  useEffect(() => {
    async function fetchServiceTimes() {
      const data = await getServiceTimes();
      setServiceTimes(data);
    }
    fetchServiceTimes();
  }, []);

  return (
    <div className="flex items-center wrapper md:gap-8">
      <div className="w-full h-full flex flex-col gap-5">
        <TitleBorderTop title={"Our Service Times"} />
        <ScrollArea className="w-full">
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            className="card-container w-full h-72 md:h-80 mb-3 flex item-center gap-5">
            {serviceTimes?.map((service, i) => {
              const [startTime, startAmPm, endTime, endAmPm] =
                service.service_period.split(" ");

              return (
                <MotionLink
                  variants={staggerFromRightItem}
                  key={i}
                  className="card"
                  href="/service">
                  <div className="absolute top-2 left-2 text-sm z-10 blueGradient rounded px-2 text-white">
                    {`${startTime} ${startAmPm} - ${endTime} ${endAmPm}`}
                    {/* {service.service_name.toLowerCase() === "holy ghost service"
                      ? `${startTime} ${startAmPm} & Every First Friday of the Month`
                      : `${startTime} ${startAmPm} - ${endTime} ${endAmPm}`} */}
                  </div>
                  <div className="image relative h-1/2">
                    <ImageFill
                      src={
                        service.image_url || "/images/service-component-img.png"
                      }
                      className="rounded-t-md"
                    />
                  </div>

                  <div className="card-content py-2 px-1 h-1/2">
                    <p className="card-title font-bold capitalize">
                      {service.service_name}
                    </p>
                    <div
                      className="desc text-sm line-clamp-4 sm:text-[15px]"
                      dangerouslySetInnerHTML={{
                        __html: service?.service_description,
                      }}
                    />
                  </div>
                </MotionLink>
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
