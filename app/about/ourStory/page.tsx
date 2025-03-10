import { slideInFromBottom } from '@/app/give/page';
import { getPageDisplaySetting, getPageWriteUp } from '@/app/utils/api-request';
import EventsBlock from '@/components/EventsBlock';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import ServiceTimes from '@/components/ServiceTimes';
import TitleBorderTop from '@/components/TitleBorderTop';
import { MotionDiv } from '@/lib/framer-motion/motionComponents';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Our Story',
};
export default async function page() {
  const writeUp = await getPageWriteUp('our-story');
  const displaySetting = await getPageDisplaySetting('our_story');
  let our_service_times, our_upcoming_events;

  if (displaySetting) {
    ({ our_service_times, our_upcoming_events } = displaySetting);
  }

  return (
    <div className=" space-y-14  py-12 ">
      <MaxWidthContainer>
        <MotionDiv
          variants={slideInFromBottom(1, 0)}
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true }}
          className="wrapper space-y-5 md:space-y-10 "
        >
          <TitleBorderTop title="A special welcome to you!" />
          <div className=" space-y-4 leading-relaxed tracking-wide sm:text-lg">
            {writeUp?.content && <div dangerouslySetInnerHTML={{ __html: writeUp?.content }} />}
          </div>
        </MotionDiv>
      </MaxWidthContainer>
      {our_service_times === 'true' && <ServiceTimes />}
      {our_upcoming_events === 'true' && <EventsBlock />}
    </div>
  );
}
