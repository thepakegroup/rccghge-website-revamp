import EventsBlock from "@/components/EventsBlock";

import PageForm from "./PageForm";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { slideInFromBottom } from "@/app/give/page";
import { getPageDisplaySetting } from "@/app/utils/api-request";

export default async function page() {

  return (
    <div className=" page-spacing ">
      <MotionDiv
        variants={slideInFromBottom(1, 0)}
        initial="hidden"
        whileInView="visible"
        className="space-y-5   md:space-y-14 lg:max-w-3xl bg-white z-10 w-full wrapper  rounded-lg ">
        <h1 className="text-xl md:text-2xl">Kindly Fill The Following</h1>
        <PageForm />
      </MotionDiv>
      <EventsBlock />
    </div>
  );
}
