import { slideInFromBottom } from '@/app/give/page';
import { getSingleLeader } from '@/app/utils/api-request';
import EventsBlock from '@/components/EventsBlock';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import TitleBorderTop from '@/components/TitleBorderTop';
import ImageFill from '@/lib/components/ImageFill';
import { MotionDiv } from '@/lib/framer-motion/motionComponents';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa6';
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const leader = await getSingleLeader(params.slug);
  return {
    title: leader?.name,
    description: leader?.short_description,
  };
}
export default async function page({ params }: { params: { slug: string } }) {
  const leader = await getSingleLeader(params.slug);

  if (!leader) {
    notFound();
  }

  // highlight specified words
  // Define the phrase to highlight
  const toHighlight = 'Into His presence through worship.';

  // Highlight the specified words
  const highlightedDesc = leader.full_story_about.replace(
    new RegExp(toHighlight, 'gi'),
    `<span class="text-primary">${toHighlight}</span>`,
  );

  return (
    <div className="page-spacing text-center">
      <MaxWidthContainer>
        <MotionDiv
          variants={slideInFromBottom(1, 0)}
          initial="hidden "
          whileInView={'visible'}
          viewport={{ once: true }}
          className="lg:item-center wrapper relative space-y-2 leading-relaxed tracking-wide lg:flex lg:flex-row-reverse lg:justify-between lg:gap-10   lg:px-24 "
        >
          {/* image section */}
          <div className="flex flex-col items-center justify-center gap-2 lg:justify-start ">
            <div className="lg:hidden">
              <TitleBorderTop title={`${leader?.position}`} />
            </div>
            <div className="image-container relative flex max-w-sm flex-col items-center justify-center gap-2 pt-8 md:gap-5 lg:pt-0 ">
              {/* image */}
              <div className=" relative  aspect-square h-64 w-80  lg:h-96 lg:w-[400px]">
                {/* orange box */}
                <div className="box sm: absolute -left-2 -top-2 aspect-square h-1/2 w-52 rounded-lg bg-primary"></div>

                <ImageFill
                  src={`${process.env.NEXT_PUBLIC_API_URL}/load-media/${leader.profile_picture}`}
                  className="z-10 rounded-lg"
                />

                {/* repeat box background */}
                <div className="absolute -bottom-5 -right-4 aspect-square w-32 ">
                  <ImageFill src="/images/repeat-box-bg-img.png" className=" object-contain" />
                </div>
              </div>
              <h1 className="mt-2 text-lg font-semibold sm:text-xl">
                {`${leader.name}, ${leader.qualification}`}
              </h1>
            </div>
          </div>
          {/* text-section */}
          <div className="space-y-3 lg:w-3/5  lg:text-left">
            <div className="hidden lg:block">
              <TitleBorderTop title={`${leader?.position}`} />
            </div>
            {/* text body */}
            <p className="text-justify" dangerouslySetInnerHTML={{ __html: highlightedDesc }} />
            <Link
              href={`/about/ourPastors`}
              className="mx-auto flex w-fit items-center justify-center gap-2 text-primary hover:scale-105 hover:gap-3 lg:mx-0  "
            >
              <FaArrowLeft /> Go Back
            </Link>
          </div>
        </MotionDiv>
      </MaxWidthContainer>

      <EventsBlock />
    </div>
  );
}
