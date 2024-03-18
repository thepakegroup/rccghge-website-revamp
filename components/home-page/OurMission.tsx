import ImageFill from "@/lib/components/ImageFill";
import React from "react";
import TitleBorderTop from "../TitleBorderTop";
import LearnMoreBtn from "../LearnMoreBtn";

export default function OurMission() {
  return (
    <div className="flex lg:gap-14 ">
      <div className="hidden lg:w-2/5 lg:h-[340px]  relative  lg:block">
        <ImageFill src="/images/ourMission-img.png" />
      </div>

      <div className=" w-full lg:w-3/5 h-full  flex flex-col gap-5 lg:gap-8">
        {/* title */}
        <TitleBorderTop title="Our Mission & Vision" />
        {/*content  */}
        <div className="mission space-y-2">
          <h1 className="text-xl capitalize sm:text-2xl font-bold ">Our Mission</h1>
          <p className="desc ">
            To prepare families and individuals, for the second coming of our
            Lord and Savior Jesus Christ.
          </p>
        </div>
        <div className="vision space-y-2">
          <h1 className="text-xl capitalize sm:text-2xl font-bold ">Our Vision</h1>
          <p className="desc ">
            To create an atmosphere of true worship, that will bring down the
            glory of God in the midst of His people.
          </p>
        </div>
        {/* learn More button */}
        <LearnMoreBtn url="/ourMission" className="w-32" />
      </div>
    </div>
  );
}
