import EventsBlock from "@/components/EventsBlock";
import { Button } from "@/components/ui/button";
import ImageFill from "@/lib/components/ImageFill";
import React from "react";
import { getPageWriteUp } from "../utils/actions";
import { notFound } from "next/navigation";

export default async function give() {
    const writeUp = await getPageWriteUp("donate and give");
    console.log(writeUp);
    // if (!writeUp) {
    //   return notFound();
    // }
  return (
    <div className="page-spacing relative">
      <div>
        <div className="blueGradient w-[calc(100%-40px)] absolute -top-32 sm:-top-20 wrapper text-white rounded-lg left-0 right-0 p-5 lg:px-40 lg:text-lg">
          <h1 className="text-lg sm:text-xl">Our belief about giving</h1>
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
        {/* give options */}
        <div className=" wrapper card-container flex flex-col justify-center lg:flex-row flex-wrap gap-10 mt-52 sm:mt-16 lg:mt-18 pb-10">
          <div className=" card border rounded-lg h-fit  w-full md:w-80 relative   ">
            {/* image */}
            <div className="w-full h-36  relative">
              <ImageFill
                src="/images/give-card-img.png"
                className="rounded-t-md"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Givelify</h1>
              <p>
                Use Givelify to give to the church, they are very easy steps to
                follow.
              </p>
              <Button className=" px-8  hover:bg-orange-400 active:scale-95 ">
                Give
              </Button>
            </div>
          </div>
          <div className=" card border rounded-lg h-fit  w-full md:w-80 relative ">
            {/* image */}
            <div className="w-full h-36  relative">
              <ImageFill
                src="/images/give-card-img.png"
                className="rounded-t-md"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Givelify</h1>
              <p>
                Use Givelify to give to the church, they are very easy steps to
                follow.
              </p>
              <Button className=" px-8  hover:bg-orange-400 active:scale-95 ">
                Give
              </Button>
            </div>
          </div>
          <div className=" card border rounded-lg h-fit  w-full md:w-80 relative ">
            {/* image */}
            <div className="w-full h-36  relative">
              <ImageFill
                src="/images/give-card-img.png"
                className="rounded-t-md"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Givelify</h1>
              <p>
                Use Givelify to give to the church, they are very easy steps to
                follow.
              </p>
              <Button className=" px-8  hover:bg-orange-400 active:scale-95 ">
                Give
              </Button>
            </div>
          </div>
          <div className=" card border rounded-lg h-fit  w-full md:w-80 relative ">
            {/* image */}
            <div className="w-full h-36  relative">
              <ImageFill
                src="/images/give-card-img.png"
                className="rounded-t-md"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Givelify</h1>
              <p>
                Use Givelify to give to the church, they are very easy steps to
                follow.
              </p>
              <Button className=" px-8  hover:bg-orange-400 active:scale-95 ">
                Give
              </Button>
            </div>
          </div>
        </div>
      </div>
      <EventsBlock />
    </div>
  );
}
