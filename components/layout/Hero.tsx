// a reuseable hero component,
// contains image,title, desc?
"use client";

import { getHeroContent, type HeroContent } from "@/app/utils/api-request";
import {
  getChildrenHeroContent,
  getDramaHeroContent,
  getMinistryHeroContent,
  getMinistryHeroContent2,
  getPrayerHeroContent,
  getTeenageHeroContent,
  getWellnessHeroContent,
  getYoungAdultsHeroContent,
} from "@/app/utils/subMinistriesActions";
import {
  AnimatePresence,
  MotionImage,
  m,
  useAnimate,
} from "@/lib/framer-motion/motionComponents";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
export default function Hero() {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [homepageImgUrl, setHomepageImgUrl] = useState<string | undefined>();
  const [content, setContent] = useState<JSX.Element>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [homeHeroContent, setHeroContent] = useState<HeroContent | undefined>();
  // setting the hero images and titles
  useEffect(() => {
    let heroContent: HeroContent | undefined;

    // Fetch hero content and update image and content
    const fetchAndUpdateHeroContent = async () => {
      let i = 0;
      // HOME PAGE
      if (pathname.endsWith("/")) {
        heroContent = await getHeroContent("landing_page");
        setHeroContent(heroContent);
        if (heroContent) {
          setHomepageImgUrl(heroContent?.ImgArr[currentImageIndex]);
          setContent(<Home title={heroContent?.title} />);
        }
      } else {
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

          if (pathname.endsWith("/hge-children-ministry")) {
            heroContent = await getChildrenHeroContent();
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
          if (pathname.endsWith("/drama-ministry")) {
            heroContent = await getDramaHeroContent();

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
          if (pathname.endsWith("/prayer-ministry")) {
            heroContent = await getPrayerHeroContent();
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

          if (pathname.endsWith("/hge-wellness-ministry")) {
            heroContent = await getWellnessHeroContent();
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
          if (pathname.endsWith("/teenage-ministry")) {
            heroContent = await getTeenageHeroContent();
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
          // same fetch
          if (pathname.endsWith("/church-office")) {
            heroContent = await getMinistryHeroContent2(
              "church_office_ministry"
            );
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
          if (pathname.endsWith("/technical-department")) {
            heroContent = await getMinistryHeroContent2("technical_ministry");
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
          //same fetch
          if (pathname.endsWith("/pre-marital-marriage-counselling")) {
            heroContent = await getMinistryHeroContent(
              "pre-marital-marriage-department"
            );
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
          if (pathname.endsWith("/believers-class-membership-class")) {
            heroContent = await getMinistryHeroContent("believers_membership");
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
          if (pathname.endsWith("/protocol-department")) {
            heroContent = await getMinistryHeroContent("protocol_department");
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
          if (pathname.endsWith("/greeters-department")) {
            heroContent = await getMinistryHeroContent("greeters_department");
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
          if (pathname.endsWith("/holy-police-department")) {
            heroContent = await getMinistryHeroContent("holy_police_deparment");
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
          if (pathname.endsWith("/ushering-department")) {
            heroContent = await getMinistryHeroContent("ushering_department");
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
          if (pathname.endsWith("/media-publication-department")) {
            heroContent = await getMinistryHeroContent(
              "media_publication_ministry"
            );
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
          if (pathname.endsWith("/it-department")) {
            heroContent = await getMinistryHeroContent("it_department");
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
          if (pathname.endsWith("/public-relations-department")) {
            heroContent = await getMinistryHeroContent(
              "public_relations_ministry"
            );
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
          if (pathname.endsWith("/evangelism")) {
            heroContent = await getMinistryHeroContent("evangelism_ministry");
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
          if (pathname.endsWith("/women-s-ministry")) {
            heroContent = await getMinistryHeroContent("womens_ministry");
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
          if (pathname.endsWith("/music-ministry")) {
            heroContent = await getMinistryHeroContent(
              "embassy_choir_ministry"
            );
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
          if (pathname.endsWith("/sunday-school-department")) {
            heroContent = await getMinistryHeroContent(
              "sunday_school_ministry"
            );
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
          if (pathname.endsWith("/sanitation-janitorial-department")) {
            heroContent = await getMinistryHeroContent("sanitation_ministry");
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
          if (pathname.endsWith("/connect-ministry")) {
            heroContent = await getMinistryHeroContent("connect_ministry");
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
          if (pathname.endsWith("/transportation-department")) {
            heroContent = await getMinistryHeroContent(
              "transportation_department"
            );
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
          if (pathname.endsWith("/follow-up-department")) {
            heroContent = await getMinistryHeroContent("follow_up_ministry");
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
          if (pathname.endsWith("/hospitality-care-department")) {
            heroContent = await getMinistryHeroContent(
              "hospitality_care_department"
            );
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
          if (pathname.endsWith("/men-s-ministry")) {
            heroContent = await getMinistryHeroContent("mens_ministry");
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
          if (pathname.endsWith("/elders-ministry")) {
            heroContent = await getMinistryHeroContent("elders_minstry");
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
        }
        // EVENTS
        //TODO: change path to image folder
        else if (pathname.endsWith("/events")) {
          setImageUrl("/images/event-hero.webp");
          setContent(
            <HeroContent
              title="Our Upcoming Events"
              desc="Stay up to date, don’t miss any."
            />
          );
        }
        // YOUNG ADULT
        else if (pathname.endsWith("/young-adult-ministry")) {
          heroContent = await getYoungAdultsHeroContent();
          if (heroContent) {
            setImageUrl(heroContent?.ImgArr[0]);
            setContent(
              <HeroContent
                title={heroContent?.title}
                desc={heroContent?.desc}
              />
            );
          }
        } else {
          console.log("not found");
        }
      }
    };
    fetchAndUpdateHeroContent();
  }, [pathname, animate, homeHeroContent?.ImgArr.length, currentImageIndex]);

  // Effect to change the image every 7 seconds
  useEffect(() => {
    if (pathname === "/" && homeHeroContent) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % homeHeroContent?.ImgArr.length;
          setHomepageImgUrl(homeHeroContent?.ImgArr[newIndex]);
          return newIndex;
        });
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [pathname, homeHeroContent]);

  //if on the home page return a different hero component
  if (pathname === "/") {
    const PreviousImage = () => {
      if (homeHeroContent)
        setCurrentImageIndex(
          (prevIndex) =>
            (prevIndex - 1 + homeHeroContent?.ImgArr.length) %
            homeHeroContent?.ImgArr.length
        );
    };

    const NextImage = () => {
      if (homeHeroContent)
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % homeHeroContent?.ImgArr.length
        );
    };
    return (
      <div
        ref={scope}
        className="   text-center bg-blue-950 text-white  flex flex-col  items-center   relative">
        {/* header tilte */}
        <div className=" bg-white h-fit   z-20 w-full overflow-hidden relative">
          <div className=" -z-10 svg-background bg-primary/5  absolute inset-0 "></div>
          {/* header content */}

          <div className=" px-4 md:px-6 py-4 md:py-[50px] mx-auto content max-w-screen-lg">
            {content}
          </div>
        </div>
        {/* hero image */}
        <div className="relative h-[450px] lg:h-[600px]   hero-image-container bg-blue-950  w-full z-10 ">
          {/* Image Nav Btn */}
          <div className="absolute w-full flex justify-between md:px-10 items-center h-16 top-1/2 z-30 text-white capitalize ">
            {/* Previous Button */}
            <button
              onClick={PreviousImage}
              className={`prev-btn size-14 md:size-16 bg-zinc-500/60 hover:bg-primary active:scale-90 rounded-full flex items-center group justify-center  `}>
              <MoveLeft strokeWidth={3} size={30} className="shrink-0  " />
            </button>

            {/* Next Button */}
            <button
              onClick={NextImage}
              className={`next-btn   size-14 md:size-16 bg-zinc-500/60 hover:bg-primary active:scale-90 rounded-full flex items-center justify-center group `}>
              <MoveRight strokeWidth={3} size={30} className="shrink-0  " />
            </button>
          </div>
          <AnimatePresence mode="popLayout">
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
                className="object-fill object-center  "
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
      className={cn(
        "h-[400px] lg:h-[70vh] text-center text-white bg-blue-950 flex flex-col justify-center items-center px-4  relative",
        pathname.startsWith("/about/ourPastors") && "lg:h-[100vh]"
      )}>
      <AnimatePresence mode="popLayout">
        {/* Dark overlay */}
        {/* <div
          key="dark-overlay"
          className="absolute inset-0 bg-black opacity-[0.35] z-10"></div> */}
        {imageUrl && (
          <MotionImage
            key={imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={imageUrl}
            alt="hero image"
            fill
            // sizes="100vw"
            priority
            quality={100}
            className={cn(
              " object-fill object-center ",
              pathname.startsWith("/about/ourPastors") && " object-[50%_10%] "
            )}
          />
        )}
        {/* </div> */}
        {content && (
          <div className="z-10 content space-y-4 max-w-[800px] font-semibold">
            {content}
          </div>
        )}
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
  const headingClasses = `[&_h1]:text-2xl  sm:[&_h1]:text-3xl md:[&_h1]:text-5xl [&_h2]:text-lg md:[&_h2]:text-2xl  `;
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} ref={scope}>
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className={`hero-title title space-y-1 md:space-y-2 lg:space-y-5  text-black ${headingClasses} [&_h1]:font-normal  `}
      />

      <div className="desc mt-5 md:mt-[30px]">
        <Button
          className="lg:text-lg desc active:scale-95 text-white  "
          asChild>
          <Link href="/about/ourStory"> Learn about HGE </Link>
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
