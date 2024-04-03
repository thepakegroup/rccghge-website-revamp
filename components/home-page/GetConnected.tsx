"use client";
import ImageFill from "@/lib/components/ImageFill";
import { FaCaretLeft } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Button } from "../ui/button";
import Link from "next/link";
import Script from "next/script";
import InstagramPost from "./InstagramPost";

export default function GetConnected() {
  return (
    <div className="space-y-5 md:space-y-12 ">
      <h1 className="blueGradient  px-6 lg:px-12 text-white font-semibold flex items-center text-xl h-14 md:h-20 w-[280px] md:text-3xl lg:w-[500px] relative">
        Get Connected
        <FaCaretLeft className="absolute  -right-12 md:text-[9rem] text-9xl" />
      </h1>
      <ScrollArea className="w-full">
        <div className="social-card-container  w-full gap-5 flex items-center px-6">
          {/* facebook timeline */}
          <ScrollArea className="card h-96 w-[340px]  pb-5 ">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Frccg.heavensgloriousembassy&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </ScrollArea>
          {/* twitter timeline */}
          <ScrollArea className="card h-96 w-[340px]  pb-5 ">
            <a
              className="twitter-timeline"
              href="https://twitter.com/HgeRccg?ref_src=twsrc%5Etfw">
              Tweets by HgeRccg
            </a>{" "}
          </ScrollArea>
          {/* instagram timeline */}
          <ScrollArea className="card h-96 w-[340px]  pb-5 ">
            <InstagramPost />
          </ScrollArea>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
        <p className="sm:hidden text-sm mx-auto text-center">scroll to see more 👉</p>
    </div>
  );
}
