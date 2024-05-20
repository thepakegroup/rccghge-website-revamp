import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../public/images/rccg-logo.svg";
import React, { HTMLAttributes } from "react";

export default function Logo({
  className,
  ...props
}: HTMLAttributes<HTMLImageElement>) {
  return (
    <Image
      src={logo}
      alt={"logo"}
      priority
      quality={100}
      className={className}
      {...props}
    />
  );
}
