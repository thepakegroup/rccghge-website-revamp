// a reuseable hero component,
// contains image,title, desc?
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  AnimatePresence,
  MotionImage,
  m,
  useAnimate,
} from "@/lib/framer-motion/motionComponents";
import { useEffect, useState } from "react";
import { getHeroContent } from "@/app/utils/actions";
export default function Hero() {
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [content, setContent] = useState<JSX.Element>();
  // let content = <Home />;
  const pathname = usePathname();
  let src = "/images/hero-images/home-hero-img1.png";

  // if (pathname.startsWith("/about/ourPastors")) {
  //   src = "/images/hero-images/our-pastors-img.png";
  // } else if (pathname.endsWith("/about/ourMission")) {
  // } else if (pathname.endsWith("/about/ourStory")) {
  //   src = "/images/hero-images/our-story-img.png";
  // } else if (pathname.endsWith("/about/ourBeliefs")) {
  //   src = "/images/hero-images/our-beliefs-img.png";
  // } else if (pathname.endsWith("/about/rccgWorldwide")) {
  //   src = "/images/hero-images/our-beliefs-img.png";
  // } else if (pathname.endsWith("/new")) {
  //   src = "/images/hero-images/new-img.png";
  // } else if (pathname.endsWith("/service")) {
  //   src = "/images/hero-images/service-img.png";
  // } else if (pathname.endsWith("/give")) {
  //   src = "/images/hero-images/service-img.png";
  // } else if (pathname.endsWith("/connect/prayerRequests")) {
  //   src = "/images/hero-images/prayer-request-img.png";
  // } else if (pathname.endsWith("/connect/needARide")) {
  //   src = "/images/hero-images/need-a-ride-img.png";
  // } else if (pathname.startsWith("/connect/getInTouch")) {
  //   src = "/images/hero-images/our-beliefs-img.png";
  // } else if (pathname.endsWith("/ourMinistries/joinUs")) {
  // } else if (pathname.startsWith("/ourMinistries")) {
  //   src = "/images/hero-images/our-ministries-img.png";
  // } else if (pathname.endsWith("/events")) {
  //   src = "/images/hero-images/our-ministries-img.png";

  // } else {
  //   console.log("not found");
  // }
  useEffect(() => {
    let heroContent;
    (async () => {
      if (pathname.endsWith("/")) {
        heroContent = await getHeroContent("landing_page");

        if (heroContent) {
          setImageUrl(heroContent?.ImgArr[0]);
          setContent(<Home title={heroContent?.title} />);
        }
      } else if (pathname.startsWith("/about/ourPastors")) {
        heroContent = await getHeroContent("our_pastors");

        if (heroContent) {
          setImageUrl(
            heroContent?.ImgArr[0] || "/images/hero-images/our-pastors-img.png"
          );
          setContent(
            <HeroContent
              title={heroContent?.title || "Leadership"}
              desc={
                heroContent?.desc ||
                "Just as Shepherd would not leave his sheep behind, So would the Lord not leave thee behind"
              }
            />
          );
        }
      } else if (pathname.endsWith("/about/ourMission")) {
        heroContent = await getHeroContent("our_mission");

        if (heroContent) {
          setImageUrl(heroContent?.ImgArr[0]);
          setContent(
            <HeroContent
              title={"Our Mission & Vision"}
              desc="With Hearts full of faith we come together to uplift each other. grow spiritually, and spread love in ever action. Fostering a close-knit community and selflessly extending a helping hand."
            />
          );
        }
      } else if (pathname.endsWith("/about/ourStory")) {
        heroContent = await getHeroContent("our_story");

        if (heroContent) {
          setImageUrl(
            heroContent?.ImgArr[0] || "/images/hero-images/our-story-img.png"
          );
          setContent(<HeroContent title={heroContent?.title || "Our Story"} />);
        }
      } else if (pathname.endsWith("/about/ourBeliefs")) {
        heroContent = await getHeroContent("our_beliefs");

        if (heroContent) {
          setImageUrl(
            heroContent?.ImgArr[0] || "/images/hero-images/our-beliefs-img.png"
          );
          setContent(
            <HeroContent
              title={heroContent?.title || "Our Beliefs"}
              desc={heroContent?.desc || "What we believe in"}
            />
          );
        }
      } else if (pathname.endsWith("/about/rccgWorldwide")) {
        heroContent = await getHeroContent("rccghge_worldwide");

        if (heroContent) {
          setImageUrl(
            heroContent?.ImgArr[0] || "/images/hero-images/our-beliefs-img.png"
          );
          setContent(
            <HeroContent
              title={heroContent?.title || "RCCG Worldwide"}
              desc={heroContent?.desc || "65 Years since founding"}
            />
          );
        }
      } else if (pathname.endsWith("/new")) {
        heroContent = await getHeroContent("iam_new_page");

        if (heroContent) {
          setImageUrl(heroContent?.ImgArr[0]);
          setContent(
            <HeroContent
              title={heroContent?.title || "I'm New Here"}
              desc="Here are ways you can give to the church."
            />
          );
        }
      } else if (pathname.endsWith("/service")) {
        heroContent = await getHeroContent("our_service");

        if (heroContent) {
          setImageUrl(heroContent?.ImgArr[0]);
          setContent(
            <HeroContent title={heroContent?.title || "Service Times"} />
          );
        }
      } else if (pathname.endsWith("/give")) {
        // setImageUrl("/images/hero-images/service-img.png");
        heroContent = await getHeroContent("give");

        if (heroContent) {
          setImageUrl(heroContent?.ImgArr[0]);
          setContent(
            <HeroContent
              title={heroContent?.title || "Give"}
              desc="Here are ways you can give to the church."
            />
          );
        }
      } else if (pathname.endsWith("/connect/prayerRequests")) {
        setImageUrl("/images/hero-images/prayer-request-img.png");
        setContent(
          <HeroContent
            title="Prayer Request"
            desc="Have something troubling you? let us know, you are in our prayers."
          />
        );
      } else if (pathname.endsWith("/connect/needARide")) {
        setImageUrl("/images/hero-images/need-a-ride-img.png");
        setContent(
          <HeroContent title="Need A Ride?" desc="You are in safe hands." />
        );
      } else if (pathname.startsWith("/connect/getInTouch")) {
        setImageUrl("/images/hero-images/our-beliefs-img.png");
        setContent(
          <HeroContent
            title="Get In Touch"
            desc="We would be thrilled to hear from you."
          />
        );
      } else if (pathname.startsWith("/ourMinistries")) {
        heroContent = await getHeroContent("our_ministry");

        if (heroContent) {
          setImageUrl(heroContent?.ImgArr[0]);
          setContent(
            <HeroContent
              title={heroContent?.title || "Our Ministries"}
              desc="Join One or Two of our groups, let the Lord use you in mighty ways. We Would be honored so have you"
            />
          );
        }
      } else if (pathname.endsWith("/events")) {
        setImageUrl("/images/hero-images/our-ministries-img.png");
        setContent(
          <HeroContent
            title="Our Upcoming Events"
            desc="Stay up to date, don’t miss any."
          />
        );
      } else {
        console.log("not found");
      }
    })();
  }, [pathname]);

  return (
    <div className="h-[400px]  md:h-[560px]  text-center text-white bg-blue-950 flex flex-col justify-center items-center px-4  relative">
      <AnimatePresence>
        {/* <div className="relative w-full h-full"> */}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        {imageUrl && (
          <MotionImage
            key={imageUrl}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            src={imageUrl}
            alt="hero image"
            fill
            priority
            quality={100}
            className=" object-cover object-center "
          />
        )}
        {/* </div> */}
      </AnimatePresence>
      <div className="z-10 space-y-4 max-w-[800px]">{content}</div>
    </div>
  );
}

const Home = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(".title", { opacity: [0, 1] }, { duration: 0.8, delay: 0.5 });
    animate(
      ".desc",
      { opacity: [0, 1], y: [-30, 0] },
      { duration: 0.8, delay: 0.8 }
    );
  }, [pathname, animate]);
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} ref={scope}>
      <h1 className="title  text-3xl md:text-4xl lg:text-5xl !leading-relaxed  ">
        {title}
      </h1>
      <div className="desc">
        <Button className="lg:text-lg desc" asChild>
          <Link href="/about/ourStory">Learn More About Us </Link>
        </Button>
      </div>
    </m.div>
  );
};
const HeroContent = ({ title, desc }: { title: string; desc?: string }) => {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(".title", { opacity: [0, 1] }, { duration: 0.8, delay: 0.5 });
    animate(
      ".desc",
      { opacity: [0, 1], y: [-30, 0] },
      { duration: 0.8, delay: 0.8 }
    );
  }, [pathname, animate]);
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} ref={scope}>
      <h1 className="title   text-3xl md:text-4xl lg:text-5xl !leading-relaxed  capitalize ">
        {title}
      </h1>
      <div className="desc lg:text-lg text-[15px] px-5">{desc}</div>
    </m.div>
  );
};
