import { getAllLeaders } from "@/app/utils/actions";
import EventsBlock from "@/components/EventsBlock";
import TitleBorderTop from "@/components/TitleBorderTop";
import ImageFill from "@/lib/components/ImageFill";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default async function OurPastors() {
  const leaders = await getAllLeaders();
  console.log(leaders);
  return (
    <div className=" space-y-14 md:space-y-20  py-12 md:py-20 text-center">
      {/* lead pastor */}

      {leaders?.map((leader, i) => {
        return (
          <div
            key={i}
            className=" space-y-2 lg:flex odd:lg:flex-row-reverse lg:justify-between lg:item-center max-w-7xl lg:px-24 lg:gap-10  tracking-wide leading-relaxed   wrapper ">
            {/* image section */}
            <div className="flex flex-col items-center justify-center gap-2 ">
              <div className="lg:hidden">
                <TitleBorderTop title={`Our ${leader.position}`} />
              </div>
              <div className="image-container relative max-w-sm py-8 lg:py-0 flex items-center justify-center ">
                {/* image */}
                <div className=" w-80 h-64 md:h-80   relative aspect-square">
                  {/* orange box */}
                  <div className="box bg-primary rounded-lg absolute -top-2 sm: -left-2 w-52 h-1/2 aspect-square"></div>

                  <ImageFill
                    src={`https://${leader.profile_picture}`}
                    className="z-10 "
                  />

                  {/* repeat box background */}
                  <div className="absolute w-32 aspect-square -bottom-5 -right-4 ">
                    <ImageFill
                      src="/images/repeat-box-bg-img.png"
                      className=" object-contain"
                    />
                  </div>
                </div>
              </div>
              <h1 className="lg:hidden font-bold text-lg sm:text-xl -mt-4">
                {leader.name}
              </h1>
            </div>
            {/* text-section */}
            <div className="space-y-2 md:space-y-5  lg:text-left lg:w-3/5">
              <div className="hidden lg:block">
                <TitleBorderTop title="Our Lead Pastor" />
              </div>
              <p>{leader.short_description}</p>

              <h1 className="hidden lg:block font-bold text-lg sm:text-xl">
                {leader.name}
              </h1>
              <Link
                href={`/about/ourPastors/${leader.slug}`}
                className="flex items-center text-primary justify-center gap-2 hover:gap-3 hover:scale-105 w-fit mx-auto lg:mx-0  ">
                Read more <FaArrowRight />
              </Link>
            </div>
          </div>
        );
      })}

      {/* assistant pastor */}
      <div className=" space-y-2  lg:flex lg:flex-row-reverse  lg:justify-between lg:item-center max-w-7xl lg:px-24 lg:gap-10  tracking-wide leading-relaxed   wrapper ">
        {/* image section */}
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div className="lg:hidden">
            <TitleBorderTop title="Our Associate Pastor" />
          </div>
          <div className="image-container relative max-w-sm py-8 lg:py-0 flex items-center justify-center ">
            {/* image */}
            <div className=" w-80 h-64 md:h-80   relative aspect-square">
              {/* orange box */}
              <div className="box bg-primary rounded-lg absolute -top-2 sm: -left-2 w-52 h-1/2 aspect-square"></div>

              <ImageFill src="/images/associate-pastor.svg" className="z-10 " />

              {/* repeat box background */}
              <div className="absolute w-32 aspect-square -bottom-5 -right-4 ">
                <ImageFill
                  src="/images/repeat-box-bg-img.png"
                  className=" object-contain"
                />
              </div>
            </div>
          </div>
          <h1 className="lg:hidden font-bold text-lg sm:text-xl -mt-4">
            Pastor (Dr.) Ibi Omewah, EdD, LPC-S, NCC
          </h1>
        </div>
        {/* text-section */}
        <div className="space-y-2 md:space-y-5 lg:text-left lg:w-3/5">
          <div className="hidden lg:block">
            <TitleBorderTop title="Our Associate Pastor" />
          </div>
          <p>
            Pastor (Dr.) Ibi Omewah, is the President/CEO at Odein Counseling
            and Rehab LLC-a practice that incorporates faith-based counseling
            for those who desire Christian Counseling. She is a National Board
            Certified, Licensed Professional Counselor.
          </p>
          <h1 className="hidden lg:block font-bold text-lg sm:text-xl">
            Pastor (Dr.) Ibi Omewah, EdD, LPC-S, NCC
          </h1>
          <Link
            href={"/about/ourPastors/associate"}
            className="flex items-center text-primary justify-center gap-2 hover:gap-3 hover:scale-105 w-fit mx-auto lg:mx-0  ">
            Read more <FaArrowRight />
          </Link>
        </div>
      </div>
      <EventsBlock />
    </div>
  );
}
