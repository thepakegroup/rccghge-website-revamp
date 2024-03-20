"use client";
import GetConnected from "@/components/home-page/GetConnected";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import Link from "next/link";

import { FaChevronDown } from "react-icons/fa6";

export default function page() {
  return (
    <div className="pt-12 md:pt-24">
      <div className="flex items-center justify-center">
        <div className="bg-primary/5 p-5 md:p-12 flex flex-col justify-center items-center gap-3 text-center  ">
          <h1 className="text-xl md:text-2xl">
            We would be thrilled to hear from you
          </h1>
          <p className=" md:text-lg">
            We’re glad you’re here! How may we serve you?
          </p>
          <Collapsible className="w-full">
            <CollapsibleTrigger className=" w-full md:text-lg flex items-center gap-20 justify-center bg-white border rounded p-2 ">
              Connect With Us <FaChevronDown />
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-3 p-2">
              <Link
                className="bg-white hover:bg-primary/10 active:scale-90 border rounded p-2"
                href="/connect/getInTouch/connect">
                I am new here and I want to connect
              </Link>

              <Link
                className="bg-white hover:bg-primary/10 active:scale-90 border rounded p-2"
                href="/connect/getInTouch/question">
                I have a question or comment
              </Link>

              <Link
                className="bg-white hover:bg-primary/10 active:scale-90 border rounded p-2"
                href="/connect/getInTouch/newsletter">
                Sign me up for the monthly new letter
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <GetConnected />
    </div>
  );
}
