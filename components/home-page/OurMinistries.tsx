import ImageFill from "@/lib/components/ImageFill";
import {
  MotionDiv,
  MotionLink,
  staggerContainer,
  staggerFromRightItem,
} from "@/lib/framer-motion/motionComponents";
import { FaUsers } from "react-icons/fa6";
import LearnMoreBtn from "../LearnMoreBtn";
import TitleBorderTop from "../TitleBorderTop";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Truncate } from "@/lib/components/truncate";
import { getMinistries } from "@/app/utils/api-request";

export default async function OurMinistries() {
  // Ministry
  const ministries = await getMinistries("Ministry");

  return (
    <div className=" flex flex-col gap-8  py-10 ">
      <TitleBorderTop title="Our Ministries" />
      {/* ministries card container */}
      <ScrollArea className="w-full ">
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          className="ministries-card-container w-full gap-5 flex items-center mb-3">
          {ministries?.map((ministry, i) => {
            return (
              <MotionLink
                variants={staggerFromRightItem}
                key={i}
                className="card bg-white "
                href={`/ourMinistries/${ministry.category}/${ministry.slug}`}>
                <div className="card-img relative h-1/2 ">
                  <ImageFill
                    src={`${process.env.NEXT_PUBLIC_API_URL}/load-media/${ministry.banner}`}
                    className=" rounded-t-md"
                  />
                </div>
                <div className="w-10 absolute top-28 md:top-32 left-2  aspect-square blueGradient rounded-full flex items-center justify-center text-xl text-white">
                  <FaUsers />
                </div>

                <div className="card-content space-y-2 pt-5 p-2 h-1/2 text-black">
                  <h1 className="text-xl  capitalize " title={ministry?.name}>
                    {Truncate(ministry.name, 25)}
                  </h1>
                  <p className="line-clamp-2">
                    {Truncate(ministry.description, 180)}
                  </p>
                </div>
              </MotionLink>
            );
          })}
        </MotionDiv>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <LearnMoreBtn className=" self-end" url="/ourMinistries/Ministry" />
    </div>
  );
}
