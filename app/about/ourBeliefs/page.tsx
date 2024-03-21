import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
const beliefs = [
  {
    title: "God the father",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
  {
    title: "Jesus christ",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
  {
    title: "The Holy Spirit",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
  {
    title: "the death & the ressurection of jesus christ",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
  {
    title: "salvation",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
  {
    title: "the holy bible",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
  {
    title: "the baptism of the holy ghost",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
  {
    title: "water baptism",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
  {
    title: "the blood of jesus christ",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
  {
    title: "the second comming of christ",
    desc: "Creator of Heaven and Earth who made man in His own image and likeness",
  },
];
export default function page() {
  return (
    <div className=" page-spacing ">
      <h1 className="capitalize text-2xl sm:text-3xl font-semibold wrapper text-center">
        this we believe; our declaration of faith
      </h1>
      {/* accordion */}
      <Accordion type="single" collapsible className=" space-y-8 md:space-y-12  ">
        {beliefs.map((item, i) => {
          return (
            <AccordionItem
              value={`item-${i + 1}`}
              key={i}
              className="border lg:rounded-lg bg-primary/5  w-[min(100%,768px)] mx-auto px-6 py-2 md:px-8 md:py-3">
              <AccordionTrigger className="">
                <div className="flex items-center gap-5  ">
                  <div className="w-8 md:w-10 shrink-0 aspect-square blueGradient rounded-full flex justify-center items-center !hover:no-underline   font-bold text-xl text-white ">
                    {i + 1}
                  </div>
                  <h1 className="text-lg md:text-xl  capitalize text-left ">
                    {item.title}
                  </h1>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg font-mediunm">
                {item.desc}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
