import EventsBlock from "@/components/EventsBlock";
import { Button } from "@/components/ui/button";
import ImageFill from "@/lib/components/ImageFill";
import Link from "next/link";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import MaxWidthContainer from "@/components/MaxWidthContainer";

export const slideInFromBottom = (duration = 0.8, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration, delay: delay },
    },
  };
};
export default async function page() {
  return (
    <div className="page-spacing ">
      <MaxWidthContainer className="page-spacing relative">
        <MotionDiv
          variants={slideInFromBottom(1, 0.5)}
          initial="hidden"
          animate="visible"
          className="blueGradient wrapper absolute -top-10 left-0 right-0 z-20 w-[calc(100%-40px)] rounded-lg p-5 text-white sm:-top-20 lg:px-20 lg:text-lg"
        >
          <h1 className="text-lg sm:text-xl">Our belief about giving</h1>
          <p>
            The stewardship of our finances is a tremendous—and often overlooked—area of our lives
            where we can faithfully proclaim the gospel. At Heaven’s Glorious Embassy, giving
            strengthens our devotion to Christ and frees us to live open-handedly with the gifts God
            gives us. We trust in Him and His provision instead of our perceived self-sufficiency.
            As people of faith, we give faithfully and generously
          </p>
        </MotionDiv>
        {/* give options */}
        <MotionDiv
          variants={slideInFromBottom(1, 0)}
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true }}
          className=" wrapper card-container lg:mt-18 mt-[280px] flex flex-col flex-wrap justify-center  gap-10 pb-10  sm:mt-[100px] md:grid md:grid-cols-2 lg:grid-cols-3 "
        >
          <div className=" card relative h-80 w-full divide-y rounded-lg border px-2 md:w-80   ">
            {/* image */}
            <div className=" relative  h-32  w-full">
              <ImageFill
                src="/images/Givelify_idd7NjfDGX_2.svg"
                className="rounded-t-md object-contain object-center px-10 py-5"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Givelify</h1>
              <p>Use Givelify to give to the church, they are very easy steps to follow.</p>
              <Button asChild className=" px-8  hover:bg-orange-400 active:scale-95 ">
                <Link
                  href={`https://www.givelify.com/donate/mobile-heaven-s-glorious-embassy-plano-tx-2j7wy5MTUwNTcyNw==/donation/amount `}
                >
                  Give
                </Link>
              </Button>
            </div>
          </div>
          {/* secure give */}
          <div className=" card relative h-80 w-full divide-y rounded-lg border px-2 md:w-80 ">
            {/* image */}
            <div className=" relative  h-32  w-full">
              <ImageFill
                src="/images/secure-give.png"
                className="rounded-t-md object-contain object-center px-10 py-5"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Secure give</h1>
              <p>Use Secure give to give to the church, they are very easy steps to follow.</p>
              <Button asChild className=" px-8  hover:bg-orange-400 active:scale-95 ">
                <Link href={`https://app.securegive.com/rccghge`}>Give</Link>
              </Button>
            </div>
          </div>
          {/* zelle */}
          <div className=" card relative h-80 w-full divide-y rounded-lg border px-2  md:w-80 ">
            {/* image */}
            <div className=" relative  h-32  w-full">
              <ImageFill
                src="/images/Zelle®_id9eOrSaCY_6.svg"
                className="rounded-t-md object-contain object-center px-10 py-5"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Zelle</h1>
              <p>
                Zelle to give <span className=" font-semibold text-primary">give@rccghge.org</span>
              </p>
            </div>
          </div>
          {/* text2give */}
          <div className=" card relative h-80 w-full divide-y rounded-lg border px-2 md:w-80 ">
            {/* image */}
            <div className=" relative  h-32  w-full">
              <ImageFill
                src="/images/text2give.png"
                className="rounded-t-md object-contain object-center px-10 py-5"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">TextToGive</h1>
              <p className="">
                You can text to give using te type of giving and the amount. Eg. &quot;Offering
                100&quot; or &quot;Thithe 500&quot; etc to :{' '}
                <span className=" font-semibold text-primary">9724026202</span>
              </p>
            </div>
          </div>
          {/* cashapp */}
          <div className=" card relative h-80 w-full divide-y rounded-lg border px-2 md:w-80 ">
            {/* image */}
            <div className=" relative  h-32  w-full">
              <ImageFill
                src="/images/Cash App_idD6MElyMu_1.svg"
                className="rounded-t-md object-contain object-center px-10 py-5"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">CashApp</h1>
              <p className="">
                CashApp to <span className=" font-semibold text-primary">$RCCGHGE</span>
              </p>
            </div>
          </div>
          {/* mail */}
          <div className="  card relative h-auto w-full divide-y rounded-lg border px-2 md:w-80 ">
            {/* image */}
            <div className=" relative  h-32  w-full">
              <ImageFill
                src="/images/gift-location.jpg"
                className="rounded-t-md object-contain object-center px-10 py-5"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Mail</h1>
              <p>
                <span className="font-semibold">In-Person:</span> Check in favor of RCCG HGE or cash
                to be dropped in the offering basket.
              </p>
              <p className="">
                <span className="font-semibold">By Mail:</span> Checks to be mailed to:
                <span className=" font-semibold text-primary">
                  RCCG-HGE 3800 E Parker Road Plano Texas 75074
                </span>
              </p>
            </div>
          </div>
        </MotionDiv>
      </MaxWidthContainer>
      <EventsBlock />
    </div>
  );
}
