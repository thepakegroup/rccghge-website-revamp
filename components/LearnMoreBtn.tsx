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
        ' w-32 bg-primary capitalize hover:bg-orange-400 active:scale-95 lg:text-lg',
        className,
      )}
      asChild
    >
      <Link href={url}>{text || 'Learn More'} </Link>
    </Button>
  );
}
