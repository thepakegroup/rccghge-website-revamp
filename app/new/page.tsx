import TitleBorderTop from "@/components/TitleBorderTop";
import { Separator } from "@/components/ui/separator";
import ImageFill from "@/lib/components/ImageFill";
import {
  MotionDiv,
  SlideInFromBottom
} from "@/lib/framer-motion/motionComponents";
import { Metadata } from "next";
import { FaCaretLeft } from "react-icons/fa6";
import { slideInFromBottom } from "../give/page";
import { getPageDisplaySetting } from "../utils/api-request";

export const metadata: Metadata = {
  title: "New Here?",
  description: "Welcome to RCCG Heavens Glorious Embassy",
};
export default async function page() {
  const displaySetting = await getPageDisplaySetting("iam_new_page");
  const sundayService = displaySetting?.sundayServices;
  const wednesdayBibleStudy = displaySetting?.wednesdayBibleStudy;

  // extracts the video id
  function extractYouTubeVideoID(url: string) {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get("v");
    } catch (error) {
      console.error("Invalid URL", error);
      return null;
    }
  }

  if (displaySetting !== undefined)
    return (
      <SlideInFromBottom>
        <div className="page-spacing  relative sm:text-lg [&_a]:underline [&_a]:text-[#1ca8db]">
          <div className="">
            <MotionDiv
              variants={slideInFromBottom(1, 0.5)}
              initial="hidden"
              animate="visible"
              className="blueGradient w-[calc(100%-40px)] absolute -top-32 sm:-top-28 wrapper text-white rounded-lg left-0 right-0 p-5 lg:px-20 lg:text-lg z-20 max-w-screen-xl">
              <h1 className="text-lg sm:text-xl">
                {displaySetting.subheading_text}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: displaySetting.subheading_description_text,
                }}
              />
            </MotionDiv>
            {/* video section */}
            <div className="space-y-10 sm:space-y-12 mt-32 sm:mt-24 md:mt-16 lg:mt-10  ">
              <h1 className=" wrapper text-center  text-3xl sm:text-5xl ">
                Welcome to Heaven’s Glorious Embassy
              </h1>
              <div className=" w-[min(100%,1000px)] mb-12  md:mb-20 aspect-video lg:h-[480px] mx-auto bg-red-500 ">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${extractYouTubeVideoID(displaySetting?.pageVideoLink.url)}`}
                  title="Heaven’s Glorious Embassy (HGE) YouTube Channel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
          {/* sunday service */}
          <div className="space-y-8 sm:space-y-12  max-w-screen-2xl ">
            <h1 className="blueGradient  px-6 lg:px-12 text-white font-semibold flex items-center text-xl h-14 md:h-20 w-[280px] md:text-3xl sm:w-[300px] lg:w-[500px] relative">
              Sunday Services
              <FaCaretLeft className="absolute -right-16 md:text-[9rem] text-9xl" />
            </h1>
            <div className="grid grid-cols-1 gap-8 w-full mx-auto lg:grid-cols-[1fr_auto_1fr] wrapper">
              <div className="space-y-8  ">
                <div className="space-y-2 md:space-y-3  ">
                  {/* {displaySetting?.sundayServices} */}
                  <TitleBorderTop title="Adults" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sundayService?.adultsText!,
                    }}
                  />
                  <br />

                  <a
                    href={sundayService?.adultYoutubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-[#1ca8db] text-2xl py-4 lg:py-px font-playfair  font-bold  ">
                    Watch on YouTube
                  </a>
                </div>
                <div className="space-y-2 md:space-y-3  ">
                  <TitleBorderTop title="HGE SEEDS" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sundayService?.hgeSeedsText!,
                    }}
                  />
                 
                </div>
              </div>
              <Separator orientation="vertical" />
              <div className="space-y-8  ">
                <div className="space-y-2 md:space-y-3  ">
                  {/* name was chaged from next gen kids to teenagers chapel */}
                  <TitleBorderTop title="Teenagers Chapel" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sundayService?.teenagersChapelText!,
                    }}
                  />
                </div>
                {/* name was chaged from next gen youth to NEXT–Impact Service */}
                <div className="space-y-2 md:space-y-3  ">
                  <TitleBorderTop title="NEXT – Impact Services" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sundayService?.nextImpactServiceText!,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* image */}
          <div className=" h-80 lg:h-96 relative ">
            <ImageFill src={sundayService?.pageImage!} />
          </div>
          {/* Wednesday bible study*/}
          <div className="space-y-8 sm:space-y-12  max-w-screen ">
            <h1 className="blueGradient  px-6 lg:px-12 text-white font-semibold flex items-center text-xl h-14 md:h-20 w-[280px] md:text-3xl sm:w-[400px] lg:w-[500px] relative">
              Wednesday Bible Study
              <FaCaretLeft className="absolute -right-16 md:text-[9rem] text-9xl" />
            </h1>
            <div className="grid grid-cols-1 gap-8 w-full mx-auto lg:grid-cols-[1fr_auto_1fr] wrapper">
              <div className="space-y-2 md:space-y-3  ">
                {/* <TitleBorderTop title="Adults" /> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: wednesdayBibleStudy?.adultText!,
                  }}
                />
              </div>
              {/* <Separator orientation="vertical" />
              <div className="space-y-8  ">
                <div className="space-y-2 md:space-y-3  ">
                  <TitleBorderTop title="NextGen Youth" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: wednesdayBibleStudy?.nextGenYouthText!,
                    }}
                  />
                </div>
                <div className="space-y-2 md:space-y-3  ">
                  <TitleBorderTop title="NextGen Kids" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: wednesdayBibleStudy?.nextGenKidText!,
                    }}
                  />
                </div>
              </div> */}
            </div>
          </div>
          {/* blue Gratient text */}
          <div className=" flex items-center h-80 lg:h-96 relative blueGradient px-5 lg:px-48 max-w-screen-2xl ">
            <div
              className="text-center w-full text-xl lg:text-3xl !leading-loose tracking-wider"
              dangerouslySetInnerHTML={{
                __html: displaySetting?.blueBannerContent.body,
              }}
            />
          </div>
          {/* plan your visit */}
          <div className="space-y-8 sm:space-y-12 wrapper max-w-screen-2xl ">
            <h1 className=" = text-3xl sm:text-4xl -mb-2">
              Plan your visit
            </h1>
            {/* lg:grid-cols-[1fr_auto_1fr] */}
            <div className="grid grid-cols-1 gap-8 w-full mx-auto  lg:grid-cols-[1fr_auto_1fr]">
              <div className="space-y-2 md:space-y-5  ">
                <TitleBorderTop title="Arrival & Parking" />
                <div
                  dangerouslySetInnerHTML={{
                    __html: displaySetting?.arrivalAndParking!,
                  }}
                />
              </div>
              {/* <Separator orientation="vertical" />
              <div className="space-y-2 md:space-y-5  ">
                <TitleBorderTop title="The Worship Experience" />
                <div
                  dangerouslySetInnerHTML={{
                    __html: displaySetting?.worshipExperience!,
                  }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </SlideInFromBottom>
    );
}
