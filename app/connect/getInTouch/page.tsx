import GetConnected from "@/components/home-page/GetConnected";
import ConnectDropdown from "./ConnectDropdown";
import { Metadata } from "next";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { slideInFromBottom } from "@/app/give/page";
import MaxWidthContainer from "@/components/MaxWidthContainer";
export const metadata: Metadata = {
  title: "Get In Touch",
  description: "We would be thrilled to hear from you.",
};
export default function page() {
  return (
    <MaxWidthContainer className="page-spacing">
      <div className="flex items-center justify-center">
        <MotionDiv
          variants={slideInFromBottom(1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-primary/5 p-5 md:p-12 flex flex-col   gap-3  w-full  ">
          <h1 className="text-xl md:text-2xl">
            We would be thrilled to hear from you
          </h1>
          <p className=" md:text-lg">
            We’re glad you’re here! How may we serve you?
          </p>
          <ConnectDropdown />
        </MotionDiv>
      </div>
      <GetConnected />
    </MaxWidthContainer>
  );
}
