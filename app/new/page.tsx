import EventsBlock from "@/components/EventsBlock";
import ServiceTimes from "@/components/ServiceTimes";
import TitleBorderTop from "@/components/TitleBorderTop";
import React from "react";

export default function page() {
  return (
    <div className="page-spacing  relative">
      <div className="dic">
        <div className="blueGradient w-[calc(100%-40px)] absolute -top-32 sm:-top-28 wrapper text-white rounded-lg left-0 right-0 p-5 lg:px-40 lg:text-lg">
          <h1 className="text-lg sm:text-xl">
            Welcome to RCCG Heavens Glorious Embassy{" "}
          </h1>
          <p>
            The stewardship of our finances is a tremendous—and often
            overlooked—area of our lives where we can faithfully proclaim the
            gospel. At Heaven’s Glorious Embassy, giving strengthens our
            devotion to Christ and frees us to live open-handedly with the gifts
            God gives us. We trust in Him and His provision instead of our
            perceived self-sufficiency. As people of faith, we give faithfully
            and generously
          </p>
        </div>
        <h1 className="font-bold wrapper  text-2xl sm:text-3xl mt-52 sm:mt-16 lg:mt-20 ">
          A place of belonging for all.
        </h1>
      </div>
      <ServiceTimes />
      <EventsBlock />
      <div className="space-y-8 sm:space-y-12 wrapper max-w-screen ">
        <h1 className="font-bold  text-2xl sm:text-3xl -mb-2">
          Plan your visit
        </h1>
        <div className="flex flex-col gap-8 items-center -lg mx-auto lg:flex-row">
          <div className="space-y-2 md:space-y-5 ">
            <TitleBorderTop title="Arrival & Parking" />
            <p>
              We’re thrilled that you’ve decided to get to know us! Before you
              tour our site, we’d like to share a few things from our heart to
              yours. You see, Heaven’s Glorious Embassy has a vision to create
              an atmosphere of true worship that will bring down the Glory of
              God in the midst of His people. Our mission is to prepare families
              and individuals for the second coming of our Lord and Savior-
              Jesus Christ.
            </p>
          </div>
          <div className="space-y-2 md:space-y-5 ">
            <TitleBorderTop title="The Worship Experience" />
            <p>
              We’re thrilled that you’ve decided to get to know us! Before you
              tour our site, we’d like to share a few things from our heart to
              yours. You see, Heaven’s Glorious Embassy has a vision to create
              an atmosphere of true worship that will bring down the Glory of
              God in the midst of His people. Our mission is to prepare families
              and individuals for the second coming of our Lord and Savior-
              Jesus Christ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
