// a reuseable hero component,
// contains image,title, desc?
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
export default function Hero() {
  let content = <Home />;
  const pathname = usePathname();

  let src = "/images/hero-images/home-hero-img1.png";

  if (pathname.startsWith("/about/ourPastors")) {
    src = "/images/hero-images/our-pastors-img.png";
    content = (
      <HeroContent
        title="Leadership"
        desc="Just as Shepherd would not leave his sheep behind, So would the Lord not leave thee behind"
      />
    );
  } else if (pathname.endsWith("/about/ourMission")) {
    content = (
      <HeroContent
        title="Our Mission & Vision"
        desc="With Hearts full of faith we come together to uplift each other. grow spiritually, and spread love in ever action. Fostering a close-knit community and selflessly extending a helping hand."
      />
    );
  } else if (pathname.endsWith("/about/ourStory")) {
    src = "/images/hero-images/our-story-img.png";
    content = <HeroContent title="Our Story" />;
  } else if (pathname.endsWith("/about/ourBeliefs")) {
    src = "/images/hero-images/our-beliefs-img.png";
    content = <HeroContent title="Our Beliefs" desc="What we believe in" />;
  } else if (pathname.endsWith("/about/rccgWorldwide")) {
    src = "/images/hero-images/our-beliefs-img.png";

    content = (
      <HeroContent title="RCCG Worldwide" desc="65 Years since founding" />
    );
  } else if (pathname.endsWith("/new")) {
    src = "/images/hero-images/new-img.png";
    content = (
      <HeroContent
        title="I’m new"
        desc="Here are ways you can give to the church."
      />
    );
  } else if (pathname.endsWith("/service")) {
    src = "/images/hero-images/service-img.png";
    content = <HeroContent title="Service Times" />;
  } else if (pathname.endsWith("/give")) {
    src = "/images/hero-images/service-img.png";
    content = (
      <HeroContent
        title="Give"
        desc="Here are ways you can give to the church."
      />
    );
  } else if (pathname.endsWith("/connect/prayerRequests")) {
    src = "/images/hero-images/prayer-request-img.png";
    content = (
      <HeroContent
        title="Prayer Request"
        desc="Have something troubling you? let us know, you are in our prayers."
      />
    );
  } else if (pathname.endsWith("/connect/needARide")) {
    src = "/images/hero-images/need-a-ride-img.png";
    content = (
      <HeroContent title="Need A Ride?" desc="You are in safe hands." />
    );   
  }else if (pathname.startsWith("/connect/getInTouch")) {
    src = "/images/hero-images/our-beliefs-img.png";
    content = (
      <HeroContent
        title="Get In Touch"
        desc="We would be thrilled to hear from you."
      />
    );
  } else if (pathname.startsWith("/ourMinistries/")) {
    src = "/images/hero-images/our-ministries-img.png";
    content = (
      <HeroContent
        title="Our Ministries"
        desc="Join One or Two of our groups, let the Lord use you in mighty ways. We Would be honored so have you."
      />
    );
  } else {
    console.log("not found");
  }

  return (
    <div className="h-[400px]  md:h-[560px]  text-center text-white bg-blue-950 flex flex-col justify-center items-center px-4  relative">
      <Image
        src={src}
        alt="hero image"
        fill
        priority
        quality={100}
        className=" object-cover object-center "
      />
      <div className="z-10 space-y-4 max-w-[800px]">{content}</div>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <h1 className="title  text-3xl md:text-4xl lg:text-5xl !leading-relaxed  ">
        Welcome To Heavens Glorious Embassy, In His Presence Through Worship
      </h1>
      <div className="desc">
        <Button className="lg:text-lg" asChild>
          <Link href="/about/ourStory">Learn More About Us </Link>
        </Button>
      </div>
    </>
  );
};
const HeroContent = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <>
      <h1 className="title   text-3xl md:text-4xl lg:text-5xl !leading-relaxed  capitalize ">
        {title}
      </h1>
      <div className="desc lg:text-lg text-[15px] px-5">{desc}</div>
    </>
  );
};
