"use client";
import Link from "next/link";
import Script from "next/script";
import { FaCaretLeft } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import InstagramPost from "./InstagramPost";
import React from "react";
import PageSkeleton from "../PageSkeleton";
import { getInstagramFeed } from "@/app/utils/actions";
export const revalidate = 0;
export default function GetConnected() {
  React.useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
    (async () => {
      const res = await getInstagramFeed();
      console.log(res);
    })();
  }, []);
  return (
    <div className="space-y-5 md:space-y-12  ">
      <h1 className="blueGradient  px-6 lg:px-12 text-white font-semibold flex items-center text-xl h-14 md:h-20 w-[280px] md:text-3xl lg:w-[500px] relative">
        Get Connected
        <FaCaretLeft className="absolute  -right-12 md:text-[9rem] text-9xl" />
      </h1>
      <script async src="//www.instagram.com/embed.js"></script>
      <ScrollArea className="w-full ">
        <div className="social-card-container  md:px-12  w-full gap-5 lg:gap-16 flex items-center px-6">
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

          {/* instagram timeline */}
          <ScrollArea className="card h-96 w-[340px]  pb-5 ">
            <InstagramPost />
          </ScrollArea>
          {/* twitter timeline */}
          <ScrollArea className="card h-96 w-[340px]  pb-5 ">
            <Link
              className="twitter-timeline text-primary"
              href="https://twitter.com/HgeRccg?ref_src=twsrc%5Etfw">
              Tweets by HgeRccg
            </Link>{" "}
            {/* <Script
              async
              strategy="lazyOnload"
              src="https://platform.twitter.com/widgets.js"></Script> */}
          </ScrollArea>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <p className="sm:hidden text-sm mx-auto text-center">
        scroll to see more 👉
      </p>
    </div>
  );
}
