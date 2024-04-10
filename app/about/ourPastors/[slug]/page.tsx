import { slideInFromBottom } from "@/app/give/page";
import { getAllLeaders, getSingleLeader } from "@/app/utils/actions";
import EventsBlock from "@/components/EventsBlock";
import TitleBorderTop from "@/components/TitleBorderTop";
import { Button } from "@/components/ui/button";
import ImageFill from "@/lib/components/ImageFill";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const leader = await getSingleLeader(params.slug);
  return {
    title: leader?.name,
    description: leader?.short_description,
  };
}
export default async function page({ params }: { params: { slug: string } }) {
  const leader = await getSingleLeader(params.slug);

  if (!leader) {
    notFound();
  }

  // highlight specified words
  // Define the phrase to highlight
  const toHighlight = "Into His presence through worship.";

  // Highlight the specified words
  const highlightedDesc = leader.full_story_about.replace(
    new RegExp(toHighlight, "gi"),
    `<span class="text-primary">${toHighlight}</span>`
  );

  return (
    <div className="page-spacing text-center">
      <div className="flex flex-col gap-5">
        <MotionDiv
          variants={slideInFromBottom(1, 0)}
          initial="hidden "
          whileInView={"visible"}
          viewport={{ once: true }}
          className="relative space-y-2 lg:flex lg:flex-row-reverse lg:justify-between lg:item-center max-w-7xl lg:px-24 lg:gap-10 tracking-wide leading-relaxed   wrapper ">
          {/* image section */}
          <div className="flex flex-col items-center justify-center lg:justify-start gap-2 ">
            <div className="lg:hidden">
              <TitleBorderTop title={`Our ${leader?.position}`}  />
            </div>
            <div className="image-container relative max-w-sm pt-8 lg:pt-0 flex flex-col items-center justify-center gap-2 md:gap-5 ">
              {/* image */}
              <div className=" w-80  h-64 lg:h-96 lg:w-[400px]  relative aspect-square">
                {/* orange box */}
                <div className="box bg-primary rounded-lg absolute -top-2 sm: -left-2 w-52 h-1/2 aspect-square"></div>

                <ImageFill
                  src={`${process.env.NEXT_PUBLIC_STAGING_API_URL}/load-media/${leader.profile_picture}`}
                  className="z-10 rounded-lg"
                />

                {/* repeat box background */}
                <div className="absolute w-32 aspect-square -bottom-5 -right-4 ">
                  <ImageFill
                    src="/images/repeat-box-bg-img.png"
                    className=" object-contain"
                  />
                </div>
              </div>
              <h1 className="font-bold text-lg sm:text-xl mt-2">
                {leader.name}
              </h1>
            </div>
          </div>
          {/* text-section */}
          <div className="space-y-3 lg:text-left  lg:w-3/5">
            <div className="hidden lg:block">
              <TitleBorderTop title={`Our ${leader?.position}`} />
            </div>
            {/* text body */}
            <p dangerouslySetInnerHTML={{ __html: highlightedDesc }} />
            <Link
              href={`/about/ourPastors`}
              className="flex items-center text-primary justify-center gap-2 hover:gap-3 hover:scale-105 w-fit mx-auto lg:mx-0  ">
              <FaArrowLeft /> Go Back
            </Link>
          </div>
        </MotionDiv>
      </div>
      <EventsBlock />
    </div>
  );
}
