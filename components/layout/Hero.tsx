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
import { type HeroContent, getHeroContent } from "@/app/utils/actions";
import {
  getChildrenHeroContent,
  getDramaHeroContent,
  getMinistryHeroContent,
  getMinistryHeroContent2,
  getPrayerHeroContent,
  getTeenageContent,
  getTeenageHeroContent,
  getWellnessHeroContent,
  getYoungAdultsHeroContent,
} from "@/app/utils/subMinistriesActions";
export default function Hero() {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [homepageImgUrl, setHomepageImgUrl] = useState<string | undefined>();
  const [content, setContent] = useState<JSX.Element>();

  // setting the hero images and titles
  useEffect(() => {
    let heroContent: HeroContent | undefined;
    let interval: NodeJS.Timeout;
    // Fetch hero content and update image and content
    const fetchAndUpdateHeroContent = async () => {
      let i = 0;
      // HOME PAGE
      if (pathname.endsWith("/")) {
        heroContent = await getHeroContent("landing_page");
        if (heroContent) {
          // Set interval to change the image every 5 seconds
          setHomepageImgUrl(heroContent?.ImgArr[0]);
          interval = setInterval(() => {
            if (heroContent) {
              setHomepageImgUrl(heroContent.ImgArr[i]);
              i = (i + 1) % heroContent.ImgArr.length;
            }
          }, 5000);
          setContent(<Home title={heroContent?.title} />);
        }
      } else {
        clearInterval(interval);
        // ABOUT PAGE
        if (pathname.startsWith("/about/ourPastors")) {
          heroContent = await getHeroContent("our_pastors");

          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc={heroContent?.desc}
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
                desc="With Hearts full of faith we come together to uplift each other. grow spiritually, and spread love in every action. Fostering a close-knit community and selflessly extending a helping hand."
              />
            );
          }
        } else if (pathname.endsWith("/about/ourStory")) {
          heroContent = await getHeroContent("our_story");

          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(<HeroContent title={heroContent?.title} />);
          }
        } else if (pathname.endsWith("/about/ourBeliefs")) {
          heroContent = await getHeroContent("our_beliefs");

          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc={heroContent?.desc}
              />
            );
          }
        } else if (pathname.endsWith("/about/rccgWorldwide")) {
          heroContent = await getHeroContent("rccghge_worldwide");
          const foundingYear = 1952;
          const currentYear = new Date().getFullYear();
          const yearsSinceFounding = currentYear - foundingYear;
          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc={`${yearsSinceFounding} Years since founding`}
              />
            );
          }
        }
        // NEW || SERVICE || GIVE PAGE
        else if (pathname.endsWith("/new")) {
          heroContent = await getHeroContent("iam_new_page");

          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc="Welcome to RCCG Heavens Glorious Embassy."
              />
            );
          }
        } else if (pathname.endsWith("/service")) {
          heroContent = await getHeroContent("our_service");

          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(<HeroContent title={heroContent?.title} />);
          }
        } else if (pathname.endsWith("/give")) {
          heroContent = await getHeroContent("give");

          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc="Here are ways you can give to the church."
              />
            );
          }
        }
        // CONNECT PAGE
        else if (pathname.endsWith("/connect/prayerRequests")) {
          heroContent = await getHeroContent("prayer_request");

          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc={heroContent?.desc}
              />
            );
          }
        } else if (pathname.endsWith("/connect/needARide")) {
          heroContent = await getHeroContent("need_a_ride");

          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc={heroContent?.desc}
              />
            );
          }
        } else if (pathname.startsWith("/connect/getInTouch")) {
          heroContent = await getHeroContent("get_in_touch");

          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc={heroContent?.desc}
              />
            );
          }
        }
        // MINISTRIES
        else if (pathname.startsWith("/ourMinistries")) {
          heroContent = await getHeroContent("our_ministry");
          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc="Join One or Two of our groups, let the Lord use you in mighty ways. We Would be honored to have you"
              />
            );
          }
          // MINISTRIES SUB PAGES (Departments and Ministries)
          if (pathname.endsWith("/young-adult-ministry")) {
            heroContent = await getYoungAdultsHeroContent();
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/hge-children-ministry")) {
            heroContent = await getChildrenHeroContent();
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/drama-ministry")) {
            heroContent = await getDramaHeroContent();

            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/prayer-ministry")) {
            heroContent = await getPrayerHeroContent();
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }

          if (pathname.endsWith("/hge-wellness-ministry")) {
            heroContent = await getWellnessHeroContent();
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/teenage-ministry")) {
            heroContent = await getTeenageHeroContent();
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          // same fetch
          if (pathname.endsWith("/church-office")) {
            heroContent = await getMinistryHeroContent2(
              "church_office_ministry"
            );
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/technical-department")) {
            heroContent = await getMinistryHeroContent2("technical_ministry");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          //same fetch
          if (pathname.endsWith("/pre-marital-marriage-counselling")) {
            heroContent = await getMinistryHeroContent(
              "pre-marital-marriage-department"
            );
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/believers-class-membership-class")) {
            heroContent = await getMinistryHeroContent("believers_membership");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/protocol-department")) {
            heroContent = await getMinistryHeroContent("protocol_department");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/greeters-department")) {
            heroContent = await getMinistryHeroContent("greeters_department");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/holy-police-department")) {
            heroContent = await getMinistryHeroContent("holy_police_deparment");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/ushering-department")) {
            heroContent = await getMinistryHeroContent("ushering_department");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/media-publication-department")) {
            heroContent = await getMinistryHeroContent(
              "media_publication_ministry"
            );
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/it-department")) {
            heroContent = await getMinistryHeroContent("it_department");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/public-relations-department")) {
            heroContent = await getMinistryHeroContent(
              "public_relations_ministry"
            );
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/evangelism")) {
            heroContent = await getMinistryHeroContent("evangelism_ministry");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/women-s-ministry")) {
            heroContent = await getMinistryHeroContent("womens_ministry");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/music-ministry")) {
            heroContent = await getMinistryHeroContent(
              "embassy_choir_ministry"
            );
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/sunday-school-department")) {
            heroContent = await getMinistryHeroContent(
              "sunday_school_ministry"
            );
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/sanitation-janitorial-department")) {
            heroContent = await getMinistryHeroContent("sanitation_ministry");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/connect-ministry")) {
            heroContent = await getMinistryHeroContent("connect_ministry");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/transportation-department")) {
            heroContent = await getMinistryHeroContent(
              "transportation_department"
            );
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/follow-up-department")) {
            heroContent = await getMinistryHeroContent("follow_up_ministry");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/hospitality-care-department")) {
            heroContent = await getMinistryHeroContent(
              "hospitality_care_department"
            );
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/men-s-ministry")) {
            heroContent = await getMinistryHeroContent("mens_ministry");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          if (pathname.endsWith("/elders-ministry")) {
            heroContent = await getMinistryHeroContent("elders_minstry");
            if (heroContent) {
              setImageUrl(heroContent?.ImgArr[0]);
              setContent(
                <HeroContent
                  title={heroContent.title}
                  desc={heroContent.desc}
                />
              );
            }
          }
          ///////
        }
        // EVENTS
        else if (pathname.endsWith("/events")) {
          setImageUrl("/images/hero-images/upcoming events.jpg");
          setContent(
            <HeroContent
              title="Our Upcoming Events"
              desc="Stay up to date, don’t miss any."
            />
          );
        } else {
          console.log("not found");
        }
      }
    };
    fetchAndUpdateHeroContent();

    // animate(".content", { opacity: [0, 1] }, { duration: 0.8, delay: 0.8 });
    return () => clearInterval(interval);
  }, [pathname, animate]);

  // if the pathname is "/" and heroContent.ImgArr array length > 1,
  useEffect(() => {
    // console.log(imageUrl);
  }, [imageUrl]);
  //if on the home page return a different hero component
  if (pathname === "/") {
    return (
      <div
        ref={scope}
        className="   text-center bg-blue-950 text-white  flex flex-col  items-center   relative">
        {/* h-[400px]  md:h-[560px] lg:h-[calc(100vh-100px)] */}

        {/* gradient wavy bottom header tilte */}
        <div className="relative   z-20 w-full overflow-hidden">
          <div className="homeGradient h-[200px] sm:h-[250px] "></div>
          <div className="z-10 absolute top-8 sm:top-14 left-0 right-0 px-1 mx-auto content space-y-4 max-w-[800px]">
            {content}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full  -mt-1 "
            viewBox="0 0 1440 320">
            {/* gradient definition */}
            <defs>
              <linearGradient
                id="blueGradient"
                x1="10%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop
                  offset="10%"
                  style={{ stopColor: "#12234e", stopOpacity: 1 }}
                />
               
                <stop
                  offset="100%"
                  style={{ stopColor: "#4473ba", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#blueGradient)"
              fill-opacity="1"
              d="M0,192L40,170.7C80,149,160,107,240,112C320,117,400,171,480,192C560,213,640,203,720,186.7C800,171,880,149,960,128C1040,107,1120,85,1200,90.7C1280,96,1360,128,1400,144L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
          </svg>
        </div>
        <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] -mt-24 sm:-mt-40 lg:-mt-60  bg-blue-950  w-full z-10">
          <AnimatePresence mode="popLayout">
            {/* <div className="relative w-full h-full"> */}
            {/* Dark overlay */}

            {homepageImgUrl && (
              <MotionImage
                key={homepageImgUrl}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={homepageImgUrl}
                alt="hero image"
                fill
                sizes="100vw"
                priority
                quality={100}
                className=" object-cover object-center lg:object-top "
              />
            )}
            {/* </div> */}
          </AnimatePresence>
        </div>
      </div>
    );
  }
  return (
    <div
      ref={scope}
      className="h-[400px]  md:h-[560px] lg:h-[calc(100vh-100px)]   text-center text-white bg-blue-950 flex flex-col justify-center items-center px-4  relative">
      <AnimatePresence mode="popLayout">
        {/* <div className="relative w-full h-full"> */}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-[0.35] z-10"></div>
        {pathname.endsWith("/")
          ? homepageImgUrl && (
              <MotionImage
                key={homepageImgUrl}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={homepageImgUrl}
                alt="hero image"
                fill
                sizes="100vw"
                priority
                quality={100}
                className=" object-cover object-center "
              />
            )
          : imageUrl && (
              <MotionImage
                key={imageUrl}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={imageUrl}
                alt="hero image"
                fill
                sizes="100vw"
                priority
                quality={100}
                className=" object-cover object-center "
              />
            )}
        {/* </div> */}
        <div className="z-10 content space-y-4 max-w-[800px] font-semibold">
          {content}
        </div>
      </AnimatePresence>
    </div>
  );
}

// hero content for home page
const Home = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(".title", { opacity: [0, 1] }, { duration: 0.8, delay: 1 });
    animate(
      ".desc",
      { opacity: [0, 1], y: [-30, 0] },
      { duration: 0.8, delay: 1.2 }
    );
  }, [pathname, animate]);
  const headingClasses = `[&_h1]:text-3xl sm:[&_h1]:text-4xl md:[&_h1]:text-5xl xl:[&_h1]:text-6xl [&_h2]:text-lg md:[&_h2]:text-2xl xl:[&_h2]:text-3xl `;
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} ref={scope}>
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className={`hero-title title space-y-1 md:space-y-2 lg:space-y-5  text-white  ${headingClasses}  `}
      />

      <div className="desc mt-5">
        <Button
          size={"lg"}
          className="lg:text-lg desc  bg-white text-blue-950 hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
          asChild>
          <Link href="/about/ourStory">Learn More About Us </Link>
        </Button>
      </div>
    </m.div>
  );
};

// hero content for other pages
const HeroContent = ({ title, desc }: { title: string; desc?: string }) => {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(".title", { opacity: [0, 1] }, { duration: 0.8, delay: 1 });
    animate(
      ".desc",
      { opacity: [0, 1], y: [-30, 0] },
      { duration: 0.8, delay: 1.2 }
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
