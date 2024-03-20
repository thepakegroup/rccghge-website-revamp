import EventsBlock from "@/components/EventsBlock";
import { Button } from "@/components/ui/button";
import ImageFill from "@/lib/components/ImageFill";
import React from "react";

export default function give() {
  return (
    <div className="py-10 relative">
      <div className="blueGradient absolute -top-32 sm:-top-28 mx-6 lg:mx-12 text-white rounded-lg left-0 right-0 p-5 xl:px-32 lg:text-lg">
        <h1 className="text-lg sm:text-xl">Our belief about giving</h1>
        <p>
          The stewardship of our finances is a tremendous—and often
          overlooked—area of our lives where we can faithfully proclaim the
          gospel. At Heaven’s Glorious Embassy, giving strengthens our devotion
          to Christ and frees us to live open-handedly with the gifts God gives
          us. We trust in Him and His provision instead of our perceived
          self-sufficiency. As people of faith, we give faithfully and
          generously
        </p>
      </div>
      {/* give options */}
      <div className=" wrapper card-container flex flex-col justify-center lg:flex-row flex-wrap gap-10 mt-52 sm:mt-16 lg:mt-18 pb-10">
        <div className=" card border rounded-lg h-fit  w-full sm:w-64 relative   ">
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
            <Button className="  hover:bg-orange-400 active:scale-95 ">
              Give
            </Button>
          </div>
        </div>
        <div className=" card border rounded-lg h-fit  w-full sm:w-64 relative ">
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
            <Button className="  hover:bg-orange-400 active:scale-95 ">
              Give
            </Button>
          </div>
        </div>
        <div className=" card border rounded-lg h-fit  w-full sm:w-64 relative ">
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
            <Button className="  hover:bg-orange-400 active:scale-95 ">
              Give
            </Button>
          </div>
        </div>
        <div className=" card border rounded-lg h-fit  w-full sm:w-64 relative ">
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
            <Button className="  hover:bg-orange-400 active:scale-95 ">
              Give
            </Button>
          </div>
        </div>
       
      </div>
      <EventsBlock />r
    </div>
  );
}
