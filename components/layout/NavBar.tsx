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
import { FaBars, FaChevronDown, FaChevronUp, FaX } from "react-icons/fa6";
import Logo from "../Logo";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export default function NavBar() {
  return (
    <nav className=" sticky   w-screen top-0 z-50 py-2 bg-white shadow-sm shadow-zinc-300 text-black">
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
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const handleSubMenuClick = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isOpen)
      animate(
        ".nav-link",
        { x: [20, 0], opacity: [0, 1] },
        { delay: stagger(0.1, { startDelay: 0.6 }) }
      );
  }, [isOpen, animate]);

  return (
    <div
      ref={scope}
      className="flex justify-between items-center px-6 py-2 relative">
      <Link href={"/"} className="w-[28%] max-w-28  h-auto ">
        <Logo className="" />
      </Link>
      {isOpen ? (
        <FaX
          className="text-2xl cursor-pointer active:scale-90"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsSubMenuOpen(false);
          }}></FaX>
      ) : (
        <FaBars
          className="text-[28px] cursor-pointer active:scale-90"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsSubMenuOpen(false);
          }}
        />
      )}

      {/* mobile menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <m.div
            initial={{ x: 300, scaleX: 0 }}
            animate={{ x: 0, scaleX: 1 }}
            exit={{ x: 300, scaleX: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex  lg:hidden  flex-col w-[min(70%,350px)] overflow-x-hidden  font-medium  absolute bg-white top-16 right-0 h-screen  `}>
            {navLinks.map((link, i) => {
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
                      key={link.name}
                      onClick={() => {
                        setIsSubMenuOpen(!isSubMenuOpen);
                        handleSubMenuClick(i);
                      }}
                      className={`nav-link cursor-pointer hover:border-primary border-b-2 w-full   underline-offset-8  flex items-center gap-5 pl-4 py-3 ${pathname.startsWith(link.url) && "border-primary  "}  `}>
                      <>{link.name}</>
                      {isSubMenuOpen && openSubMenuIndex === i ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent
                      className={`py-2  space-y-2 ${isSubMenuOpen && "border-b-2"} `}>
                      {subUrls.map((subLink) => (
                        <Link
                          onClick={() => setIsOpen(false)}
                          key={subLink.name}
                          href={`${link.url}${subLink.url}`}
                          className={` sub-links
                      block hover:border-b-2 border-primary pl-4 h-8 whitespace-nowrap
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
                  onClick={() => setIsOpen(false)}
                  key={link.name}
                  href={link.url}
                  className={`nav-link hover:border-primary border-b-2 decoration-2 underline-offset-8  pl-4 py-3 w-full ${pathname.startsWith(link.url) && "border-primary"}`}>
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
  }, [animate]);

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

              <HoverCardContent className="w-40 space-y-2 ">
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
