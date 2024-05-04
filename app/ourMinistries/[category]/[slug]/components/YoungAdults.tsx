import TitleBorderTop from "@/components/TitleBorderTop";
import Image from "next/image";
import React from "react";
import Title from "./Title";
import GridImgCarousel from "@/lib/components/GridImgCarousel";
import { getYoungAdultsContent } from "@/app/utils/subMinistriesActions";
import { TeamImages } from "./team-images";
import { GalleryImages } from "./gallery-images";

export default async function YoungAdults() {
  const content = await getYoungAdultsContent();
  const programs = content?.programs.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();

    return dateA - dateB;
  });
  const missionSection = content?.settings.settings.subsection;
  const galleryImages = content?.gallery;
  const teamImages = content?.teams;
  return (
    <div className="space-y-14 md:space-y-20">
      <div className="wrapper ">
        {/* mission section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* video section */}
          <div className=" w-full lg:w-1/2  aspect-video lg:h-[480px] mx-auto bg-red-500 ">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/j93q9lK8Lz4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* mission,vision,events */}
          {missionSection && (
            <div className="lg:w-1/2 space-y-3">
              {/* mission */}
              <div className="border-2 rounded-lg p-3 space-y-2   mx-6 lg:mx-12">
                <h1 className="capitalize text-xl sm:text-2xl text-primary">
                  {missionSection?.our_mission.title}
                </h1>

                <div
                  className="font-medium text-sm text-pretty md:text-base "
                  dangerouslySetInnerHTML={{
                    __html: missionSection?.our_mission.content,
                  }}
                />
              </div>
              {/* vision */}
              <div className="border-2 rounded-lg p-3 space-y-2   mx-6 lg:mx-12">
                <h1 className="capitalize text-xl sm:text-2xl text-primary">
                  {missionSection?.our_vision.title}
                </h1>

                <div
                  className="font-medium text-sm text-pretty md:text-base "
                  dangerouslySetInnerHTML={{
                    __html: missionSection?.our_vision.content,
                  }}
                />
              </div>
              {/* events */}
              <div className="border-2 rounded-lg p-3 space-y-2   mx-6 lg:mx-12">
                <h1 className="capitalize text-xl sm:text-2xl text-primary">
                  {missionSection?.our_events.title}
                </h1>

                <div
                  className=" text-sm text-pretty md:text-base"
                  dangerouslySetInnerHTML={{
                    __html: missionSection?.our_events.content,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* our programs */}
      <div className="wrapper bg-primary/5 py-10 space-y-10">
        <TitleBorderTop title="our programs" />
        <div className=" space-y-14 md:space-y-20    ">
          {programs?.map((program, i) => {
            return (
              <div
                key={i}
                className=" space-y-8  lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   "
              >
                {/* image */}

                <Image
                  src={program.flyer_url}
                  width={556}
                  height={449}
                  className="w-full lg:w-2/5 object-contain "
                  alt="flyer image"
                />

                {/* text-section */}
                <div className="space-y-2 md:space-y-5 prose  lg:w-3/5">
                  <Title title={program.name} />
                  <div
                    className=" prose"
                    dangerouslySetInnerHTML={{ __html: program.description }}
                  />
                  {/* <ul className="text-justify marker:text-black">
                    <li>
                      {" "}
                      The Impact academy will build your spiritual muscle,
                    </li>
                    <li>
                      {" "}
                      You will gain tangible insights discovering who YOU are &
                      what is your PURPOSE here on earth
                    </li>
                    <li>
                      {" "}
                      It will equip you with understanding of God&apos;s word to
                      enforce your life of victory
                    </li>
                    <li>
                      Make you a better believer and you can have confidence to
                      fulfil the great commision.
                    </li>
                    <li>
                      The Impact Academy is a place you want to be to make
                      impact within your circle of influence
                    </li>
                  </ul> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* our gallery */}
      <div className="wrapper w-full space-y-8 ">
        <TitleBorderTop title="Our Gallery" />
        {/* mobile screens */}
        {/* <div className=" block md:hidden lg:hidden ">
          <GridImgCarousel
            imgArr={galleryImages}
            time={5000}
            numOfRows={2}
            numOfCols={1}
          />
        </div> */}
        {/* ABOVE mobile screens */}

        {/* <div className="hidden md:block ">
          <GridImgCarousel
            imgArr={galleryImages}
            time={5000}
            numOfCols={3}
            numOfRows={2}
          />
        </div> */}
        {/*  */}
        <GalleryImages imgArr={galleryImages} />
      </div>
      {/* our Team */}
      <div className="wrapper w-full space-y-8 ">
        <TitleBorderTop title="Our Great Team" />
        {/* mobile screens */}
        {/* <div className=" block md:hidden lg:hidden ">
          <GridImgCarousel
            cardObjArr={teamImages}
            time={5000}
            numOfRows={2}
            numOfCols={1}
            height="300px"
          />
        </div> */}
        {/* ABOVE mobile screens */}

        {/* <div className="hidden md:block ">
          <GridImgCarousel cardObjArr={teamImages} time={5000} height="400px" />
        </div> */}
        <TeamImages teamImages={teamImages} />
      </div>
    </div>
  );
}
