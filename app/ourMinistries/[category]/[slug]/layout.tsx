import LogoDivider from "@/components/LogoDivider";
import ScrollToTop from "@/lib/components/ScrollToTop";
import React from "react";
import JoinUsForm from "../components/JoinUsForm";
import Title from "./components/Title";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { slideInFromBottom } from "@/app/give/page";
import { getYoungAdultsContent } from "@/app/utils/actions";

export default async function MinistriesLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const heading = await getYoungAdultsContent().then((res) => ({
    title: res?.settings?.settings?.subheading_text,
    desc: res?.settings?.settings?.subheading_description,
  }));
  console.log(params.slug);
  return (
    <div className="page-spacing">
      <MotionDiv
        variants={slideInFromBottom(1, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <div className="title-top wrapper">
          {params.slug === "hge-children-ministry" && (
            <Title
              className="text-center mb-10"
              title=" “Jesus says, Let the little children come to me and do not hinder them, for to such belongs the kingdom of heaven” (Matthew 19:14)."
            />
          )}
          {params.slug === "prayer-ministry" && (
            <Title
              className="text-center mb-10"
              title="“Men ought always to pray and not to faint” (Luke 18:1)"
            />
          )}
          {params.slug === "young-adult-ministry" && (
            <div className="space-y-4 text-center max-w-4xl mx-auto mb-10">
              {heading.title && (
                <Title className="text-center " title={heading?.title} />
              )}
              <p className="font-medium">{heading?.desc}</p>
            </div>
          )}
        </div>

        <LogoDivider />
        <div
          className={` ${params.slug === "young-adult-ministry" ? "" : "wrapper"} mt-10 `}>
          <ScrollToTop />
          {children}
        </div>
      </MotionDiv>

      <JoinUsForm />
    </div>
  );
}
