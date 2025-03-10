import { slideInFromBottom } from '@/app/give/page';
import { getPageDisplaySetting, getPageWriteUp } from '@/app/utils/api-request';
import EventsBlock from '@/components/EventsBlock';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import ServiceTimes from '@/components/ServiceTimes';
import { MotionDiv } from '@/lib/framer-motion/motionComponents';
import { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RCCG Worldwide',
  description:
    'The Redeemed Christian Church of God (RCCG) – is a worldwide non-denominational religious organization established in 1952. The RCCG has over 6 million members distributed in over 4,000 parishes in the continents of Africa, Europe, Asia, and America.',
};
export default async function page() {
  const writeUp = await getPageWriteUp('rccg-worldwide');
  const displaySetting = await getPageDisplaySetting('rccghge_worldwide');
  let our_service_times, our_upcoming_events;

  if (displaySetting) {
    ({ our_service_times, our_upcoming_events } = displaySetting);
  }

  return (
    <div className=" page-spacing relative ">
      <MaxWidthContainer>
        <MotionDiv
          variants={slideInFromBottom(1, 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute  -top-5 left-0 right-0 z-20 mx-auto w-fit rounded-lg bg-white p-4 shadow-md lg:text-lg "
        >
          <ul className="flex items-center justify-center gap-10 text-sm text-primary md:text-base">
            <li>
              <Link href={'https://www.rccg.org/'} target="_blank">
                RCCG Worldwide
              </Link>
            </li>
            <li>
              <Link href={'https://www.rccgna.org/'} target="_blank">
                RCCG Americas
              </Link>
            </li>
            <li>
              <Link href={'https://rccgcanada.org/'} target="_blank">
                RCCG Canada
              </Link>
            </li>
            <li>
              <Link href={'https://www.rccguk.church/'} target="_blank">
                RCCG United Kingdom
              </Link>
            </li>
          </ul>
        </MotionDiv>
        {/* text content */}
        <MotionDiv
          variants={slideInFromBottom(1, 0)}
          initial="hidden"
          whileInView="visible"
          className="wrapper !mt-10 mb-12 space-y-5 md:mb-20  "
        >
          <h1
            className="text-2xl font-semibold capitalize sm:text-3xl
        "
          >
            {writeUp?.heading}
          </h1>
          {/* text body */}
          <div className="space-y-2 leading-relaxed tracking-wide">
            {writeUp?.content && <div dangerouslySetInnerHTML={{ __html: writeUp?.content }} />}
          </div>
        </MotionDiv>
        {/* video section */}
        <div className=" mx-auto mb-12 aspect-video w-[min(100%,1000px)] bg-red-500 md:mb-20 lg:h-[480px] ">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/7bVUARoSFnQ?si=8nPEsy9Y6WDNI2Ff"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </MaxWidthContainer>
      {our_service_times === 'true' && (
        <div>
          <ServiceTimes />
        </div>
      )}
      {/* events block */}
      {our_upcoming_events === 'true' && <EventsBlock />}
    </div>
  );
}
