import TitleBorderTop from "@/components/TitleBorderTop";
import ImageFill from "@/lib/components/ImageFill";
import React from "react";
import { getServiceTimes } from "../utils/actions";

export default async function page() {
  const serviceTimes = await getServiceTimes();
  
  return (
    <div className="space-y-10 py-12 md:py-20 ">
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
              <TitleBorderTop title={service.service_name} />
              <p>{service.service_description}</p>
              <div className="flex items-center gap-3">
                {/* <p className="blueGradient px-8 rounded ">{service.day}</p> */}
                <p className="blueGradient px-8 rounded ">
                  {`${startTime} ${startAmPm} - ${endTime} ${endAmPm}`}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
