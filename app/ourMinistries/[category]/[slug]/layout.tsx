import { slideInFromBottom } from "@/app/give/page";
import {
  getChildrenContent,
  getPrayerContent,
  getYoungAdultsContent,
} from "@/app/utils/subMinistriesActions";
import LogoDivider from "@/components/LogoDivider";
import ScrollToTop from "@/lib/components/ScrollToTop";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import React from "react";
import JoinUsForm from "../components/JoinUsForm";
import NavButtons from "./components/NavButtons";
import Title from "./components/Title";

export default async function MinistriesLayout({
  params,
  children,
}: {
  params: { category: string; slug: string };
  children: React.ReactNode;
}) {
  let heading: { title: string | undefined; desc?: string | undefined } = {
    title: "",
    desc: "",
  };
  switch (params.slug) {
    case "young-adult-ministry":
      heading = await getYoungAdultsContent().then((res) => ({
        title: res?.settings?.settings?.subheading_text,
        desc: res?.settings?.settings?.subheading_description,
      }));
      break;
    case "hge-children-ministry":
      heading = await getChildrenContent().then((res) => ({
        title: res?.settings?.settings?.subheading_text,
      }));
      break;
    case "prayer-ministry":
      heading = await getPrayerContent().then((res) => ({
        title: res?.settings?.settings?.subheading_text,
      }));
      break;

    default:
      break;
  }

  return (
    <div className="py-12  flex flex-col gap-14 mb:gap-20 relative overflow-x-hidden">
      <NavButtons params={params} />
      <MotionDiv
        variants={slideInFromBottom(1, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <div className="title-top wrapper">
          {params?.slug === "hge-children-ministry" && heading?.title && (
            <Title className="text-center mb-10" title={heading?.title} />
          )}
          {params?.slug === "prayer-ministry" && heading?.title && (
            <Title className="text-center mb-10" title={heading?.title} />
          )}
          {params?.slug === "young-adult-ministry" && heading?.title && (
            <div className="space-y-4 text-center max-w-4xl mx-auto mb-10">
              <Title className="text-center " title={heading?.title} />
              <p className="font-medium">{heading?.desc}</p>
            </div>
          )}
        </div>

        <LogoDivider />
        <div
          className={` ${params?.slug === "young-adult-ministry" ? "" : "wrapper"} mt-10 marker:text-black `}>
          <ScrollToTop />
          {children}
        </div>
      </MotionDiv>

      <JoinUsForm params={params}  />
    </div>
  );
}
