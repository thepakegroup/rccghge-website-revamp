import React from "react";
import TitleBorderTop from "../TitleBorderTop";
import ImageFill from "@/lib/components/ImageFill";
import LearnMoreBtn from "../LearnMoreBtn";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { FaUsers } from "react-icons/fa6";
import { getMinistries } from "@/app/utils/actions";

export default async function OurMinistries() {
  // Ministry
  const ministries = await getMinistries("Ministry");

  return (
    <div className=" flex flex-col gap-8 ">
      <TitleBorderTop title="Our Ministries" />
      {/* ministries card container */}
      <ScrollArea className="w-full">
        <div className="ministries-card-container w-full gap-5 flex items-center">
          {ministries?.map((ministry, i) => {
            return (
              <div key={i} className="card  ">
                <div className="card-img relative h-1/2 ">
                  <ImageFill
                    src={`${process.env.NEXT_PUBLIC_STAGING_API_URL}/load-media/${ministry.banner}`}
                    className=" rounded-t-md"
                  />
                </div>
                <div className="w-10 absolute top-28 md:top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
                  <FaUsers />
                </div>

                <div className="card-content space-y-2 pt-5 p-2 h-1/2">
                  <h1 className="text-xl  capitalize font-bold">
                    {
                      ministry.name
                    }
                  </h1>
                  <p className="">
                    {ministry.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <LearnMoreBtn url="/ourMinistries/Ministry" />
    </div>
  );
}
