"use client";

import { navLinks } from "@/app/data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  AnimatePresence,
  m,
  stagger,
  useAnimate,
} from "@/lib/framer-motion/motionComponents";
import useIsActiveLink from "@/lib/hooks/useIsActiveLink";
import { Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa6";
import Logo from "../Logo";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavBar() {
  return (
    <nav className=" sticky top-0 z-50 py-2 bg-white text-black">
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:block">
        <LgNav />
      </div>
    </nav>
  );
}

const MobileNav = () => {
  const isActiveLink = useIsActiveLink();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-6 py-4 relative">
      <Link href={"/"} className="w-[28%] max-w-28  h-auto ">
        <Logo className="" />
      </Link>
      <FaBars
        className="text-[28px] cursor-pointer active:scale-90"
        onClick={() => setIsOpen(!isOpen)}
      />
      {/* mobile menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <m.div
            initial={{ x: 300, scaleX: 0 }}
            animate={{ x: 0, scaleX: 1 }}
            exit={{ x: 300, scaleX: 0 }}
            transition={{ duration: 0.5 }}
            onMouseLeave={() => setIsOpen(false)}
            className={`flex  lg:hidden  flex-col w-[min(70%,350px)] overflow-x-hidden  gap-10 font-medium  absolute bg-white top-16 right-0 h-screen  py-8 sm:py-10 px-4`}>
            {navLinks.map((link) => {
              //if home page display logo
              if (link.url === "/") {
                return <React.Fragment key={link.name}></React.Fragment>;
              }

              //if the navlink has a subUrls property, display a dropdown
              if (link.subUrls) {
                const subUrls = link.subUrls;

                return (
                  <Collapsible key={link.name}>
                    <CollapsibleTrigger
                      className={`cursor-pointer hover:border-b-2   underline-offset-8 border-primary flex items-center gap-5 ${pathname.startsWith(link.url) && "border-b-2 "}  `}>
                      <>{link.name}</>
                      <FaChevronDown />
                    </CollapsibleTrigger>
                    <CollapsibleContent className={`py-2 space-y-2 `}>
                      {subUrls.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={`${link.url}${subLink.url}`}
                          className={`
                      block hover:border-b-2 border-primary h-8 whitespace-nowrap
                     ${isActiveLink(subLink.url) && "border-b-2 border-primary"}
                    `}>
                          {subLink.name}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.url}
                  className={`hover:underline decoration-2 underline-offset-8 decoration-primary ${pathname.startsWith(link.url) && "underline"}`}>
                  {link.name}
                </Link>
              );
            })}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const LgNav = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      ".nav-link",
      { y: [50, 0], opacity: [0, 1] },
      { delay: stagger(0.1, { from: "center" }) }
    );
  }, []);

  const isActiveLink = useIsActiveLink();
  const pathname = usePathname();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={scope}
      className="nav-container flex w-full justify-center items-center gap-10 font-medium lg:gap-20">
      {navLinks.map((link) => {
        //if home page display logo
        if (link.url === "/") {
          return (
            <Link className="nav-link" key={link.name} href={link.url}>
              <Logo />
            </Link>
          );
        }

        //if the navlink has a subUrls property, display a dropdown
        if (link.subUrls) {
          const subUrls = link.subUrls;

          return (
            <HoverCard key={link.name} openDelay={10}>
              <HoverCardTrigger
                className={` nav-link cursor-pointer hover:underline decoration-2 underline-offset-8 decoration-primary ${pathname.startsWith(link.url) && "underline"}  `}>
                {link.name}
              </HoverCardTrigger>

              <HoverCardContent className="w-40 text-center space-y-2">
                {subUrls.map((subLink) => (
                  <Link
                    key={subLink.name}
                    href={`${link.url}${subLink.url}`}
                    className={`
                      block hover:border-b-2 border-primary h-8 whitespace-nowrap
                     ${isActiveLink(subLink.url) && "border-b-2 border-primary"}
                    `}>
                    {subLink.name}
                  </Link>
                ))}
              </HoverCardContent>
            </HoverCard>
          );
        }

        return (
          <Link
            key={link.name}
            href={link.url}
            className={`nav-link hover:underline decoration-2 underline-offset-8 decoration-primary ${pathname.startsWith(link.url) && "underline"}`}>
            {link.name}
          </Link>
        );
      })}
    </m.div>
  );
};
