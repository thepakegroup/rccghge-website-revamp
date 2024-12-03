import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import NavButtons from "../ourMinistries/[category]/[slug]/components/NavButtons";
import YoungAdults from "../ourMinistries/[category]/[slug]/components/YoungAdults";
import JoinUsForm from "../ourMinistries/[category]/components/JoinUsForm";
import ScrollToTop from "@/lib/components/ScrollToTop";
import LogoDivider from "@/components/LogoDivider";
import { getYoungAdultsContent } from "../utils/subMinistriesActions";
import Title from "../ourMinistries/[category]/[slug]/components/Title";
import { slideInFromBottom } from "../give/page";

export default async function page() {

  let heading = await getYoungAdultsContent().then((res) => ({
    title: res?.settings?.settings?.subheading_text,
    desc: res?.settings?.settings?.subheading_description,
  }));
  return (
    <div className="py-12  flex flex-col gap-14 mb:gap-20 relative overflow-x-hidden">
      {/* <NavButtons params={params} /> */}
      <MotionDiv
        variants={slideInFromBottom(1, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <div className="title-top wrapper">
          <div className="space-y-4 text-center max-w-4xl mx-auto mb-10">
            <Title className="text-center " title={heading?.title || ""} />
            <p className="font-medium">{heading?.desc}</p>
          </div>
        </div>

        <LogoDivider />
        <div
          className={`mt-10 marker:text-black `}>
          <ScrollToTop />
          <YoungAdults />
        </div>
      </MotionDiv>

      {/* <JoinUsForm params={params} /> */}
    </div>
  );
}
