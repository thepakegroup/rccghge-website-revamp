import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { slideInFromBottom } from "../give/page";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv
      variants={slideInFromBottom()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}>
      {children}
    </MotionDiv>
  );
}
