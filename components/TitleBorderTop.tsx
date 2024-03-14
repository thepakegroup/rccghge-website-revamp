import { cn } from "@/lib/utils";
import React from "react";

export default function TitleBorderTop({
  className,
  title,
}: {
  className?: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="line bg-primary w-16 h-1"></div>
      <h1 className={cn("text-xl sm:text-2xl font-bold ", className)}>
        {title}
      </h1>
    </div>
  );
}
