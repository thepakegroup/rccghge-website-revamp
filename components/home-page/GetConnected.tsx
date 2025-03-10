'use client';
import Link from 'next/link';
import React from 'react';
import BookmarkHeading from '../BookmarkHeading';
import MaxWidthContainer from '../MaxWidthContainer';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import InstagramPost from './InstagramPost';
export const revalidate = 0;
export default function GetConnected() {
  React.useEffect(() => {
    const s = document.createElement('script');
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    s.setAttribute('async', 'true');
    document.head.appendChild(s);
  }, []);
  return (
    <div className="space-y-5 md:space-y-12  ">
      <BookmarkHeading title="Get Connected" />
      {/* <script async src="//www.instagram.com/embed.js"></script> */}
      <MaxWidthContainer>
        <ScrollArea className="w-full ">
          <div className="social-card-container  flex  w-full items-center gap-5 px-6 md:px-12 lg:gap-16">
            {/* facebook timeline */}
            <ScrollArea className="card h-96 w-[340px]  pb-5 ">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Frccg.heavensgloriousembassy&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </ScrollArea>

            {/* twitter timeline */}
            <ScrollArea className="card h-96 w-[340px]  pb-5 ">
              <Link
                className="twitter-timeline text-primary"
                href="https://twitter.com/HgeRccg?ref_src=twsrc%5Etfw"
              >
                Tweets by HgeRccg
              </Link>{' '}
            </ScrollArea>

            {/* instagram timeline */}
            <ScrollArea className="card h-96 w-[340px]  pb-5 ">
              <InstagramPost />
            </ScrollArea>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </MaxWidthContainer>
      <p className="mx-auto text-center text-sm sm:hidden">scroll to see more 👉</p>
    </div>
  );
}
