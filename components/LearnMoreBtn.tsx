import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LearnMoreBtn({
  className,
  url,
}: {
  className?: string;
  url: string;
}) {
  return (
    <Button className={cn(" lg:text-lg hover:bg-orange-400 active:scale-95", className)} asChild>
      <Link href={url}>Learn More </Link>
    </Button>
  );
}
