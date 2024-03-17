import React from "react";
import LearnMoreBtn from "./LearnMoreBtn";
import ImageFill from "@/lib/components/ImageFill";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import TitleBorderTop from "./TitleBorderTop";

export default function ServiceTimes() {
  return (
    <div className="flex items-center my-10 wrapper  lg:gap-8 ">
      <div className="hidden lg:w-2/5 lg:h-[380px] relative  lg:block">
        <ImageFill src="/images/service-component-img.png" className="" />
      </div>

      <div className=" w-full lg:w-3/5 h-full  flex flex-col gap-5">
        {/* title */}
        <TitleBorderTop title="Our Service Times" />
        {/* card */}
        <ScrollArea className="w-full">
          <div className=" card-container w-full h-72   flex item-center gap-5">
            <div className="card ">
              <div className=" absolute top-2 left-2 text-sm z-10 blueGradient rounded px-2 text-white">
                9:00 am
              </div>
              <div className="image relative h-1/2 ">
                <ImageFill
                  src="/images/service-component-img.png"
                  className="rounded-t-md"
                />
              </div>

              <div className="card-content py-2 px-1">
                <p className="card-title font-bold capitalize text-xl">
                  sunday service
                </p>
                <p className="desc ">
                  Come worship with us and feel the presence of God.
                </p>
              </div>
            </div>
            <div className="card ">
              <div className=" absolute top-2 left-2 text-sm z-10 blueGradient rounded px-2 text-white">
                9:00 am
              </div>
              <div className="image relative h-1/2 ">
                <ImageFill
                  src="/images/service-component-img.png"
                  className="rounded-t-md"
                />
              </div>

              <div className="card-content py-2 px-1">
                <p className="card-title font-bold capitalize text-xl">
                  sunday service
                </p>
                <p className="desc ">
                  Come worship with us and feel the presence of God.
                </p>
              </div>
            </div>
            <div className="card ">
              <div className=" absolute top-2 left-2 text-sm z-10 blueGradient rounded px-2 text-white">
                9:00 am
              </div>
              <div className="image relative h-1/2 ">
                <ImageFill
                  src="/images/service-component-img.png"
                  className="rounded-t-md"
                />
              </div>

              <div className="card-content py-2 px-1">
                <p className="card-title font-bold capitalize text-xl">
                  sunday service
                </p>
                <p className="desc ">
                  Come worship with us and feel the presence of God.
                </p>
              </div>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <LearnMoreBtn url="/service" />
      </div>
    </div>
  );
}
