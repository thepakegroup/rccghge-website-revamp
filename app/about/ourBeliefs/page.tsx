import { slideInFromBottom } from "@/app/give/page";
import { getOurBeliefs } from "@/app/utils/actions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv } from "@/lib/framer-motion/motionComponents";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Our Beliefs",
  description: "This We Believe; Our Declaration Of Faith",
};
export default async function page() {
  const beliefs = await getOurBeliefs();

  return (
    <div className=" page-spacing ">
      <MotionDiv
        variants={slideInFromBottom(1, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-14 md:space-y-20">
        <h1 className="capitalize text-2xl sm:text-3xl font-semibold wrapper text-center">
          Our Beliefs
        </h1>
        {/* accordion */}
        <Accordion
          type="multiple"
          defaultValue={beliefs?.map((item) => item.title) || []}
          // collapsible
          className=" space-y-8 md:space-y-12  ">
          {beliefs?.map((item, i) => {
          
            return (
              <AccordionItem
                value={item.title}
                key={i}
                className="border lg:rounded-lg bg-primary/5  w-[min(100%,768px)] mx-auto px-6 py-2 md:px-8 md:py-3">
                <AccordionTrigger className="">
                  <div className="flex items-center gap-5  ">
                    <div className="w-8 md:w-10 shrink-0 aspect-square blueGradient rounded-full flex justify-center items-center !hover:no-underline   font-bold text-xl text-white ">
                      {i + 1}
                    </div>
                    <h1 className="text-lg md:text-xl  capitalize text-left ">
                      {item.title.toLowerCase()}
                    </h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg font-mediunm">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </MotionDiv>
    </div>
  );
}
