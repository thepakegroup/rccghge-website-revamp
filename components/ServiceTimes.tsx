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
import MaxWidthContainer from "./MaxWidthContainer";

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
    <div className="wrapper blueGradient flex items-center py-10 md:gap-8">
      <MaxWidthContainer className="flex h-full w-full flex-col gap-5">
        <TitleBorderTop title={'Our Service Times'} />
        <ScrollArea className="w-full">
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -200px 0px' }}
            className="card-container item-center mb-3 flex h-72 w-full gap-5 overflow-hidden md:h-80"
          >
            {serviceTimes?.map((service, i) => {
              const [startTime, startAmPm, endTime, endAmPm] = service.service_period.split(' ');

              return (
                <MotionLink
                  variants={staggerFromRightItem}
                  key={i}
                  className="card"
                  initial="hidden"
                  whileInView="visible"
                  href="/about/service"
                >
                  <div className="blueGradient absolute left-2 top-2 z-10 rounded px-2 text-sm text-white">
                    {`${startTime} ${startAmPm} - ${endTime} ${endAmPm}`}
                    {/* {service.service_name.toLowerCase() === "holy ghost service"
                      ? `${startTime} ${startAmPm} & Every First Friday of the Month`
                      : `${startTime} ${startAmPm} - ${endTime} ${endAmPm}`} */}
                  </div>
                  <div className="image relative h-1/2">
                    <ImageFill
                      src={service.image_url || '/images/service-component-img.png'}
                      className="rounded-t-md"
                    />
                  </div>

                  <div className="card-content h-1/2 px-1 py-2 bg-white text-black  rounded-b-md">
                    <p className="card-title font-bold capitalize">{service.service_name}</p>
                    <div
                      className="desc line-clamp-4 text-sm sm:text-[15px]"
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

        <LearnMoreBtn url="/about/service" />
      </MaxWidthContainer>
    </div>
  );
}
