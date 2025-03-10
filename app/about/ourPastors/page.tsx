import { slideInFromBottom } from '@/app/give/page';
import { getAllLeaders, getPageDisplaySetting } from '@/app/utils/api-request';
import EventsBlock from '@/components/EventsBlock';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import ServiceTimes from '@/components/ServiceTimes';
import TitleBorderTop from '@/components/TitleBorderTop';
import ImageFill from '@/lib/components/ImageFill';
import { MotionDiv } from '@/lib/framer-motion/motionComponents';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Our Pastors',
  description:
    'Just as Shepherd would not leave his sheep behind, So would the Lord not leave thee behind',
};
export default async function OurPastors() {
  const leaders = await getAllLeaders();
  const displaySetting = await getPageDisplaySetting('our_pastors');
  let our_service_times, our_upcoming_events;

  if (displaySetting) {
    ({ our_service_times, our_upcoming_events } = displaySetting);
  }

  return (
    <div className="space-y-14 py-12  ">
      <MaxWidthContainer className=" space-y-14    text-center">
        {/* lead pastor */}
        <MotionDiv
          variants={slideInFromBottom(1, 1)}
          initial="hidden "
          animate={'visible'}
          className="space-y-14"
        >
          {leaders?.map((leader, i) => {
            return (
              <div
                key={i}
                className=" lg:item-center mx-auto w-[96%] space-y-8 leading-relaxed tracking-wide lg:flex  lg:w-[90%]  lg:gap-24 even:lg:flex-row-reverse   "
              >
                {/* image section */}
                <div className="flex flex-col items-center justify-center gap-2 ">
                  <div className="lg:hidden">
                    <TitleBorderTop title={`${leader.position}`} />
                  </div>
                  <div className="image-container relative flex max-w-sm items-center justify-center py-8 lg:py-0 ">
                    {/* image */}
                    <div className=" relative aspect-square h-64   w-80 md:h-80">
                      {/* orange box */}
                      <div className="box sm: absolute -left-2 -top-2 aspect-square h-1/2 w-52 rounded-lg bg-primary"></div>

                      <ImageFill
                        src={`${process.env.NEXT_PUBLIC_API_URL}/load-media/${leader.profile_picture}`}
                        className="z-10 "
                      />

                      {/* repeat box background */}
                      <div className="absolute -bottom-5 -right-4 aspect-square w-32 ">
                        <ImageFill
                          src="/images/repeat-box-bg-img.png"
                          className=" object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <h1 className="-mt-4 text-lg font-semibold sm:text-xl lg:hidden">
                    {`${leader.name}, ${leader.qualification}`}
                  </h1>
                </div>
                {/* text-section */}
                <div className="space-y-2 md:space-y-5  lg:w-3/5 lg:text-left">
                  <div className="hidden lg:block">
                    <TitleBorderTop title={`${leader.position}`} />
                  </div>
                  <p className="text-justify">{leader.short_description}</p>

                  <h1 className="hidden text-lg font-semibold sm:text-xl lg:block">
                    {`${leader.name}, ${leader.qualification}`}
                  </h1>
                  <Link
                    href={`/about/ourPastors/${leader.slug}`}
                    className="mx-auto flex w-fit items-center justify-center gap-2 text-primary hover:scale-105 hover:gap-3 lg:mx-0  "
                  >
                    Read more <FaArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </MotionDiv>
      </MaxWidthContainer>
      {our_upcoming_events === 'true' && <EventsBlock />}
      {our_service_times === 'true' && <ServiceTimes />}
    </div>
  );
}
