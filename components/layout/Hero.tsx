// a reuseable hero component,
// contains image,title, desc?
'use client'
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Hero() {
  let content = <Home/>
  const pathname = usePathname()

  let src = "/images/hero-images/home-hero-img1.png";

  if (pathname.endsWith("/about/ourPastors")) {
    src='/images/hero-images/our-pastors-img.png'
  } else if (pathname.endsWith("/about/ourMission")) {
    content = (
      <HeroContent
        title="Our Mission & Vision"
        desc="With Hearts full of faith we come together to uplift each other. grow spiritually, and spread love in ever action. Fostering a close-knit community and selflessly extending a helping hand."
      />
    );
  } else if (pathname.endsWith("/about/ourStory")) {
    src = "/images/hero-images/our-story-img.png";

    content = (
      <HeroContent
        title="Our Story"
      />
    );
  } else {
    console.log("not found");
  }
    
   return (
     <div className="h-[400px] md:h-[500px] lg:h-[560px]  text-center text-white bg-blue-950 flex flex-col justify-center items-center px-4  relative">
       <Image
         src={src}
         alt="hero image"
         fill
         quality={100}
         priority
         className="object-cover  object-center"
       />
       <div className="z-10 space-y-4 max-w-[600px]">
         {content}
       </div>
     </div>
   );
}

const Home = () => {
  return <>
    <h1 className="title  text-2xl lg:text-4xl !leading-relaxed  ">
           Welcome To Heavens Glorious Embassy, In His Presence Through Worship
         </h1>
         <div className="desc">
           <Button className="lg:text-lg" asChild>
             <Link href="/about/ourStory">Learn More About Us </Link>
           </Button>
         </div>
  </>
}
const HeroContent = ({title,desc}:{title:string,desc?:string}) => {
  return (
    <>
      <h1 className="title  text-2xl lg:text-4xl !leading-relaxed  capitalize ">
      {title}
      </h1>
      <div className="desc sm:text-lg text-[15px] px-5">
        {desc}
      </div>
    </>
  );
}