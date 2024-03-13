"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

import { navLinks } from "@/app/data";
import useIsActiveLink from "@/lib/hooks/useIsActiveLink";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

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
    <nav className="">
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
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <Logo className="w-[30%] h-auto "/>
      <FaBars className="text-[28px]" />
    </div>
  );
};
const LgNav = () => {
  const isActiveLink = useIsActiveLink();
  const pathname = usePathname();
  return (
    <div className="flex w-full justify-center items-center gap-10 font-medium md:gap-20">
      {navLinks.map((link) => {
        //if home page display logo
        if (link.url === "/") {
          return (
            <Link key={link.name} href={link.url}>
              <Logo />
            </Link>
          );
        }

        //if the navlink has a subUrls property, display a dropdown
        if (link.subUrls) {
          const subUrls = link.subUrls;

          return (
            <HoverCard key={link.name}>
              <HoverCardTrigger
                className={`cursor-pointer hover:underline decoration-2 underline-offset-8 decoration-primary ${pathname.startsWith(link.url) && "underline"}  `}>
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
            className={`hover:underline decoration-2 underline-offset-8 decoration-primary ${pathname.startsWith(link.url) && "underline"}`}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};
