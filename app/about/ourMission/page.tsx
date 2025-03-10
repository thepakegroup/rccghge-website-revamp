import { slideInFromBottom } from '@/app/give/page';
import { getOurMissions, getPageDisplaySetting } from '@/app/utils/api-request';
import EventsBlock from '@/components/EventsBlock';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import ServiceTimes from '@/components/ServiceTimes';
import { MotionDiv, SlideInFromBottom } from '@/lib/framer-motion/motionComponents';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Our Mission',
  description:
    'To prepare families, friends and individuals, for the second coming of our Lord and Savior Jesus Christ.',
};
export default async function page() {
  const missions = await getOurMissions();
  const displaySetting = await getPageDisplaySetting('our_mission');
  let our_service_times, our_upcoming_events;

  if (displaySetting) {
    ({ our_service_times, our_upcoming_events } = displaySetting);
  }

  return (
    <SlideInFromBottom>
      <div className=" page-spacing ">
        <MaxWidthContainer>
          <MotionDiv
            variants={slideInFromBottom(1, 0)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: true }}
            className="mx-auto max-w-screen-md space-y-5 md:space-y-10"
          >
            {missions?.map((mission, i) => {
              return (
                <div key={i} className="mx-6 rounded-lg border-2 p-3    md:space-y-4 lg:mx-12">
                  <h1 className="text-xl sm:text-2xl">{mission.title}</h1>
                  <hr className="w-2/5 border opacity-50 " />
                  <p className="text-[15px] font-medium sm:text-lg">{mission.description}</p>
                </div>
              );
            })}
          </MotionDiv>
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
