import TitleBorderTop from '@/components/TitleBorderTop';
import { Separator } from '@/components/ui/separator';
import ImageFill from '@/lib/components/ImageFill';
import { MotionDiv, SlideInFromBottom } from '@/lib/framer-motion/motionComponents';
import { Metadata } from 'next';
import { FaCaretLeft } from 'react-icons/fa6';
import { slideInFromBottom } from '../give/page';
import { getPageDisplaySetting } from '../utils/api-request';
import EventsBlock from '@/components/EventsBlock';
import ServiceTimes from '@/components/ServiceTimes';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import BookmarkHeading from '@/components/BookmarkHeading';

export const metadata: Metadata = {
  title: 'New Here?',
  description: 'Welcome to RCCG Heavens Glorious Embassy',
};
export default async function page() {
  const displaySetting = await getPageDisplaySetting('iam_new_page');
  const sundayService = displaySetting?.sundayServices;
  const wednesdayBibleStudy = displaySetting?.wednesdayBibleStudy;
  let our_service_times, our_upcoming_events;

  if (displaySetting) {
    ({ our_service_times, our_upcoming_events } = displaySetting);
  }

  // extracts the video id
  function extractYouTubeVideoID(url: string) {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get('v');
    } catch (error) {
      console.error('Invalid URL', error);
      return null;
    }
  }

  if (displaySetting !== undefined)
    return (
      <SlideInFromBottom>
        <div className="page-spacing  relative sm:text-lg ">
          <div className="">
            <MotionDiv
              variants={slideInFromBottom(1, 0.5)}
              initial="hidden"
              animate="visible"
              className="blueGradient wrapper absolute -top-7 left-0 right-0 z-20 w-[calc(100%-40px)] max-w-screen-xl rounded-lg p-5 text-white sm:-top-10 lg:px-20 lg:text-lg"
            >
              <h1 className="text-lg sm:text-xl">{displaySetting.subheading_text}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: displaySetting.subheading_description_text,
                }}
              />
            </MotionDiv>
            {/* video section */}
            <div className="mt-[250px] space-y-10 sm:mt-[160px] sm:space-y-12  lg:mt-[100px]  ">
              <h1 className=" wrapper text-center  text-3xl sm:text-5xl ">
                Welcome to Heaven’s Glorious Embassy
              </h1>
              <div className=" mx-auto mb-12  aspect-video w-[min(100%,1000px)] bg-red-500 md:mb-20 lg:h-[480px] ">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${extractYouTubeVideoID(displaySetting?.pageVideoLink.url)}`}
                  title="Heaven’s Glorious Embassy (HGE) YouTube Channel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          {/* sunday service */}
          <div className="space-y-8 sm:space-y-12   [&_a]:text-[#1ca8db] [&_a]:underline ">
            <BookmarkHeading title="Sunday Service" />
            <MaxWidthContainer className="wrapper mx-auto grid w-full grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr]">
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
                    className=" py-4 font-playfair text-2xl font-bold text-[#1ca8db]  lg:py-px  "
                  >
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
            </MaxWidthContainer>
          </div>
          {/* image */}
          <div className=" relative h-80 lg:h-96 2xl:h-[500px] [&_a]:text-[#1ca8db] [&_a]:underline ">
            <ImageFill src={sundayService?.pageImage!} />
          </div>
          {/* Wednesday bible study*/}
          <div className="space-y-8 sm:space-y-12  [&_a]:text-[#1ca8db] [&_a]:underline ">
            <BookmarkHeading title="wednesday bible study" />

            <MaxWidthContainer className="wrapper mx-auto grid w-full grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr]">
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
            </MaxWidthContainer>
          </div>
          {/* blue Gratient text */}
          <div className=" blueGradient relative flex h-80 items-center px-5 lg:h-96 lg:px-48  ">
            <MaxWidthContainer>
              <div
                className="w-full text-center text-xl !leading-loose tracking-wider lg:text-3xl"
                dangerouslySetInnerHTML={{
                  __html: displaySetting?.blueBannerContent.body,
                }}
              />
            </MaxWidthContainer>
          </div>
          {/* plan your visit */}
          <MaxWidthContainer className="wrapper space-y-8 sm:space-y-12  ">
            <h1 className=" = -mb-2 text-3xl sm:text-4xl">Plan your visit</h1>
            {/* lg:grid-cols-[1fr_auto_1fr] */}
            <div className="mx-auto grid w-full grid-cols-1 gap-8  lg:grid-cols-[1fr_auto_1fr]">
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
          </MaxWidthContainer>
          {/* service time component */}
          {our_service_times === 'true' && (
            <div>
              <ServiceTimes />
            </div>
          )}
          {/* events block */}
          {our_upcoming_events === 'true' && <EventsBlock />}
        </div>
      </SlideInFromBottom>
    );
}
