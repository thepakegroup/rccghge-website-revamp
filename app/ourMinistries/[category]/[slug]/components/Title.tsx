import { cn } from "@/lib/utils";
import React from "react";

export default function Title({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h1 className={cn("text-2xl sm:text-3xl  capitalize", className)}>
      {title}
    </h1>
  );
}
