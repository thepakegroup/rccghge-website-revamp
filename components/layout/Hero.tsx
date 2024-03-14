// a reuseable hero component,
// contains image,title, desc?

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[400px] md:h-[500px] lg:h-[560px]  text-center text-white bg-blue-950 flex flex-col justify-center items-center px-4  relative">
      <Image
        src="/images/hero-images/home-hero-img.svg"
        alt="hero image"
        fill
        className="object-cover  object-center"
        priority={true}
      />
      <div className="z-10 space-y-4 max-w-[600px]">
        <h1 className="title  text-2xl lg:text-4xl !leading-relaxed  ">
          Welcome To Heavens Glorious Embassy, In His Presence Through Worship
        </h1>
        <div className="desc">
          <Button className="lg:text-lg" asChild>
            <Link href="/about/ourStory">Learn More About Us </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
