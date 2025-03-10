import MaxWidthContainer from '@/components/MaxWidthContainer';
import TitleBorderTop from '@/components/TitleBorderTop';
import ImageFill from '@/lib/components/ImageFill';
import { MotionDiv } from '@/lib/framer-motion/motionComponents';
import { Metadata } from 'next';
import { slideInFromBottom } from '../../give/page';
import { getServiceTimes } from '../../utils/api-request';
export const metadata: Metadata = {
  title: 'Service Times',
};
export default async function page() {
  const serviceTimes = await getServiceTimes();

  return (
    <div className="py-12  ">
      <MotionDiv
        variants={slideInFromBottom(1, 0)}
        initial="hidden"
        whileInView={'visible'}
        viewport={{ once: true }}
        className="space-y-10 "
      >
        {serviceTimes?.map((service, i) => {
          const [startTime, startAmPm, endTime, endAmPm] = service.service_period.split(' ');

          return (
            <div key={i} className="wrapper bg-primary/5 py-5 sm:py-8  ">
              <MaxWidthContainer className="flex flex-col items-center justify-center gap-5 md:gap-10 lg:flex-row">
                {/* image */}
                <div className="relative h-56 w-full md:h-80   lg:w-2/5">
                  <ImageFill src={service.image_url || '/images/service-times-img1.png'} />
                </div>
                {/* text content */}
                <div className="space-y-5 md:space-y-8 md:text-lg lg:w-3/5">
                  <TitleBorderTop
                    title={service.service_name.toLowerCase()}
                    className=" capitalize"
                  />
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: service.service_description,
                    }}
                  />
                  <div className="flex items-center gap-3">
                    {/* <p className="blueGradient px-8 rounded ">{service.day}</p> */}
                    <p className="blueGradient rounded px-8 py-4  ">
                      {`${startTime} ${startAmPm} - ${endTime} ${endAmPm}`}
                    </p>
                  </div>
                </div>
              </MaxWidthContainer>
            </div>
          );
        })}
      </MotionDiv>
    </div>
  );
}
