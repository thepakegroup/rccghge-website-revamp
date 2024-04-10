"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function ConnectDropdown() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger
        onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        className=" w-full md:text-lg flex items-center gap-20 justify-center bg-white border rounded p-2 ">
        <>Connect With Us</>
        {isSubMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
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
