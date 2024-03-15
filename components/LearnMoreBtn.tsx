import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LearnMoreBtn({
  className,
  url,
  text
}: {
  className?: string;
    url: string;
  text?: string;
}) {
  return (
    <Button
      className={cn(
        " lg:text-lg w-32 hover:bg-orange-400 active:scale-95 capitalize",
        className
      )}
      asChild>
      <Link href={url}>{ text || "Learn More"} </Link>
    </Button>
  );
}
