import TitleBorderTop from "@/components/TitleBorderTop";
import Image from "next/image";
import React from "react";
import Title from "./Title";
import GridImgCarousel from "@/lib/components/GridImgCarousel";
import { getYoungAdultsContent } from "@/app/utils/subMinistriesActions";


export default async function YoungAdults() {
  const content = await getYoungAdultsContent();

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
              allowFullScreen></iframe>
          </div>
          {/* mission,vision,events */}
          <div className="lg:w-1/2 space-y-3">
            {/* mission */}
            <div className="border-2 rounded-lg p-3 space-y-2   mx-6 lg:mx-12">
              <h1 className="capitalize text-xl sm:text-2xl text-primary">
                {missionSection?.our_mission.title}
              </h1>

              <p className="font-medium text-sm text-pretty md:text-base ">
                {missionSection?.our_mission.content}
              </p>
            </div>
            {/* vision */}
            <div className="border-2 rounded-lg p-3 space-y-2   mx-6 lg:mx-12">
              <h1 className="capitalize text-xl sm:text-2xl text-primary">
                {missionSection?.our_vision.title}
              </h1>

              <p className="font-medium text-sm text-pretty md:text-base ">
                {missionSection?.our_vision.content}
              </p>
            </div>
            {/* events */}
            <div className="border-2 rounded-lg p-3 space-y-2   mx-6 lg:mx-12">
              <h1 className="capitalize text-xl sm:text-2xl text-primary">
                {missionSection?.our_events.title}
              </h1>
              {missionSection?.our_events.content && (
                <div
                  className="prose text-sm text-pretty md:text-base"
                  dangerouslySetInnerHTML={{
                    __html: missionSection?.our_events.content,
                  }}
                />
              )}
            
            </div>
          </div>
        </div>
      </div>

      {/* our programmers */}
      <div className="wrapper bg-primary/5 py-10 space-y-10">
        <TitleBorderTop title="our programmers" />
        <div className=" space-y-14 md:space-y-20    ">
          {/* impact academy */}
          <div className=" space-y-8  lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
            {/* image */}

            <Image
              src={`/images/ourMinistries/young-adult1.png`}
              width={556}
              height={449}
              className="w-full lg:w-2/5 object-contain "
              alt="technical department image"
            />

            {/* text-section */}
            <div className="space-y-2 md:space-y-5 prose  lg:w-3/5">
              <Title title={`The IMPACT Academy`} />

              <ul className="text-justify marker:text-black">
                <li> The Impact academy will build your spiritual muscle,</li>
                <li>
                  {" "}
                  You will gain tangible insights discovering who YOU are & what
                  is your PURPOSE here on earth
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
                  The Impact Academy is a place you want to be to make impact
                  within your circle of influence
                </li>
              </ul>
            </div>
          </div>
          {/* scripture unplugged */}
          <div className=" space-y-8  lg:flex even:lg:flex-row-reverse mx-auto lg:item-center max-w-7xl  lg:gap-24   ">
            {/* image */}

            <Image
              src={`/images/ourMinistries/young-adult2.png`}
              width={556}
              height={449}
              className="w-full lg:w-2/5 object-contain "
              alt="technical department image"
            />

            {/* text-section */}
            <div className="space-y-2 md:space-y-5 prose  lg:w-3/5">
              <Title title={`Scripture Unplugged`} />

              <p className="text-justify">
                Scripture UNPLUGGED is an open contemporary bible study platform
                for young adults; where we encourage one another with biblical
                truth.
              </p>
              <ul className="text-justify marker:text-black">
                <li>
                  It will provide us an opportunity to ask questions as it
                  relates to our everyday living and grow in our spiritual
                  lives.
                </li>
                <li>
                  It’s an interactive platform to connect with and inspire each
                  other.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* our gallery */}
      <div className="wrapper w-full space-y-8 ">
        <TitleBorderTop title="our gallery" />
        {/* mobile screens */}
        <div className=" block md:hidden lg:hidden ">
          <GridImgCarousel
            imgArr={galleryImages}
            time={5000}
            numOfRows={2}
            numOfCols={1}
          />
        </div>
        {/* ABOVE mobile screens */}

        <div className="hidden md:block ">
          <GridImgCarousel
            imgArr={galleryImages}
            time={5000}
            numOfCols={3}
            numOfRows={2}
          />
        </div>
      </div>
      {/* our Team */}
      <div className="wrapper w-full space-y-8 ">
        <TitleBorderTop title="our great team" />
        {/* mobile screens */}
        <div className=" block md:hidden lg:hidden ">
          <GridImgCarousel
            cardObjArr={teamImages}
            time={5000}
            numOfRows={2}
            numOfCols={1}
            height="300px"
          />
        </div>
        {/* ABOVE mobile screens */}

        <div className="hidden md:block ">
          <GridImgCarousel cardObjArr={teamImages} time={5000} height="400px" />
        </div>
      </div>
    </div>
  );
}
