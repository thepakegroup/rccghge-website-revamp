"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function ConnectDropdown() {
  return (
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
  );
}
