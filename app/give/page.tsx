import EventsBlock from "@/components/EventsBlock";
import { Button } from "@/components/ui/button";
import ImageFill from "@/lib/components/ImageFill";
import Link from "next/link";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";

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
    <div className="page-spacing relative">
      <div>
        <MotionDiv
          variants={slideInFromBottom(1, 0.5)}
          initial="hidden"
          animate="visible"
          className="z-20 blueGradient w-[calc(100%-40px)] absolute -top-32 sm:-top-20 wrapper text-white rounded-lg left-0 right-0 p-5 lg:px-40 lg:text-lg">
          <h1 className="text-lg sm:text-xl">Our belief about giving</h1>
          <p>
            The stewardship of our finances is a tremendous—and often
            overlooked—area of our lives where we can faithfully proclaim the
            gospel. At Heaven’s Glorious Embassy, giving strengthens our
            devotion to Christ and frees us to live open-handedly with the gifts
            God gives us. We trust in Him and His provision instead of our
            perceived self-sufficiency. As people of faith, we give faithfully
            and generously
          </p>
        </MotionDiv>
        {/* give options */}
        <MotionDiv
          variants={slideInFromBottom(1, 0)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className=" wrapper card-container flex flex-col justify-center md:grid lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl flex-wrap gap-10 mt-52 sm:mt-16 lg:mt-18 pb-10">
          <div className=" h-80 card border rounded-lg divide-y px-2 w-full md:w-80 relative   ">
            {/* image */}
            <div className=" h-32  w-full  relative">
              <ImageFill
                src="/images/Givelify_idd7NjfDGX_2.svg"
                className="rounded-t-md px-10 py-5 object-contain object-center"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Givelify</h1>
              <p>
                Use Givelify to give to the church, they are very easy steps to
                follow.
              </p>
              <Button
                asChild
                className=" px-8  hover:bg-orange-400 active:scale-95 ">
                <Link
                  href={`https://www.givelify.com/donate/mobile-heaven-s-glorious-embassy-plano-tx-2j7wy5MTUwNTcyNw==/donation/amount `}>
                  Give
                </Link>
              </Button>
            </div>
          </div>
          <div className=" h-80 card border rounded-lg divide-y px-2 w-full md:w-80 relative ">
            {/* image */}
            <div className=" h-32  w-full  relative">
              <ImageFill
                src="/images/secure-give.png"
                className="rounded-t-md px-10 py-5 object-contain object-center"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Secure give</h1>
              <p>
                Use Secure give to give to the church, they are very easy steps
                to follow.
              </p>
              <Button
                asChild
                className=" px-8  hover:bg-orange-400 active:scale-95 ">
                <Link href={`https://app.securegive.com/rccghge`}>Give</Link>
              </Button>
            </div>
          </div>
          <div className=" h-80 card border rounded-lg divide-y px-2 w-full md:w-80  relative ">
            {/* image */}
            <div className=" h-32  w-full  relative">
              <ImageFill
                src="/images/Zelle®_id9eOrSaCY_6.svg"
                className="rounded-t-md px-10 py-5 object-contain object-center"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Zelle</h1>
              <p>
                You can write a check in favour of RCCG, Heaven&apos;s Glorius
                Embassy and drop in the offering basket or Zelle to give{" "}
                <span className=" text-primary font-semibold">
                  give@rccghge.org
                </span>
              </p>
            </div>
          </div>
          <div className=" h-80 card border rounded-lg divide-y px-2 w-full md:w-80 relative ">
            {/* image */}
            <div className=" h-32  w-full  relative">
              <ImageFill
                src="/images/text2give.png"
                className="rounded-t-md px-10 py-5 object-contain object-center"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">TextToGive</h1>
              <p className="">
                You can text to give using te type of giving and the amount. Eg.
                &quot;Offering 100&quot; or &quot;Thithe 500&quot; etc to :{" "}
                <span className=" text-primary font-semibold">9724026202</span>
              </p>
            </div>
          </div>
          <div className=" h-80 card border rounded-lg divide-y px-2 w-full md:w-80 relative ">
            {/* image */}
            <div className=" h-32  w-full  relative">
              <ImageFill
                src="/images/Cash App_idD6MElyMu_1.svg"
                className="rounded-t-md px-10 py-5 object-contain object-center"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">CashApp</h1>
              <p className="">
                CashApp to{" "}
                <span className=" text-primary font-semibold">$RCCGHGE</span>
              </p>
            </div>
          </div>
          <div className=" h-80 card border rounded-lg divide-y px-2 w-full md:w-80 relative ">
            {/* image */}
            <div className=" h-32  w-full  relative">
              <ImageFill
                src="/images/gift-location.jpg"
                className="rounded-t-md px-10 py-5 object-contain object-center"
              />
            </div>
            {/* content */}
            <div className="space-y-2 p-4 ">
              <h1 className="text-lg">Mail</h1>
              <p className="">
                You can mail your gifts to the church using the address{" "}
                <span className=" text-primary font-semibold">
                  3800 E Parker Road Plano Texas 75074
                </span>
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>
      <EventsBlock />
    </div>
  );
}
