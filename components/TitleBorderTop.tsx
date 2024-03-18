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
    <div className="flex flex-col w-fit gap-2">
      <div className="line bg-primary w-16 h-1"></div>
      <h1 className={cn("text-2xl sm:text-3xl font-bold ", className)}>
        {title}
      </h1>
    </div>
  );
}
