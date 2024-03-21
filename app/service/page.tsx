import TitleBorderTop from "@/components/TitleBorderTop";
import ImageFill from "@/lib/components/ImageFill";
import React from "react";
const serviceTimes = [
  {
    src: "/images/service-times-img1.png",
    title: "sunday school",
    desc: "Our Sunday School is one moment during which, we furnish ourselves with the undiluted word of God for growth, and for ensuring our allegiance to Christ is being constantly reviewed and renewed with the aid of the scriptures.",
    day: "sunday",
    time: "9am",
  },
  {
    src: "/images/service-times-img1.png",
    title: "celebration service",
    desc: "Our Sunday School is one moment during which, we furnish ourselves with the undiluted word of God for growth, and for ensuring our allegiance to Christ is being constantly reviewed and renewed with the aid of the scriptures.",
    day: "wednesday",
    time: "9am",
  },
  {
    src: "/images/service-times-img1.png",
    title: "Digging Deep: Bible Study - Online Only",
    desc: "Our Sunday School is one moment during which, we furnish ourselves with the undiluted word of God for growth, and for ensuring our allegiance to Christ is being constantly reviewed and renewed with the aid of the scriptures.",
    day: "thursday",
    time: "7am",
  },
];
export default function page() {
  return (
    <div className="space-y-10 py-12 md:py-20 ">
      {serviceTimes.map((service, i) => {
        return (
          <div
            key={i}
            className="bg-primary/5 wrapper py-5 sm:py-8 flex flex-col items-center justify-center lg:flex-row gap-5 md:gap-10">
            {/* image */}
            <div className="w-full h-56 md:h-80   relative">
              <ImageFill src={service.src} />
            </div>
            {/* text content */}
            <div className="space-y-5 md:space-y-8 md:text-lg">
              <TitleBorderTop title={service.title} />
              <p>{service.desc}</p>
              <div className="flex items-center gap-3">
                <p className="blueGradient px-8 rounded ">{service.day}</p>
                <p className="blueGradient px-8 rounded ">{service.time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
