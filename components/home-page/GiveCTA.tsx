import React from "react";
import { Button } from "../ui/button";
import LearnMoreBtn from "../LearnMoreBtn";
import ImageFill from "@/lib/components/ImageFill";
import { getHeroContent } from "@/app/utils/actions";
import { Skeleton } from "../ui/skeleton";

export default async function GiveCTA() {
  const imgArr = await getHeroContent("give").then((res) => res?.ImgArr);
  return (
    <div className=" lg:flex items-center h-80 lg:h-96 ">
      <div className="h-full blueGradient text-white flex flex-col justify-center text-center items-center gap-3 px-5 lg:px-20 lg:w-1/2">
        <h1 className="text-2xl lg:text-3xl">Give To The Church</h1>
        <p>
          We are on a journey to winning souls for Christ, and we would love if
          you are a part of this.
        </p>
        <LearnMoreBtn
          url="/give"
          text="Give Now"
          className="bg-white text-blue-950  text-lg hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
        />
      </div>
      <div className="image h-full w-1/2 hidden lg:block relative">
        {imgArr ? (
          <ImageFill src={imgArr[0]} />
        ) : (
          <Skeleton className=" w-full h-full" />
        )}
      </div>
    </div>
  );
}
