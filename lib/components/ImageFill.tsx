import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { cn } from "../utils";

type ImageComponentProps = HTMLAttributes<HTMLImageElement> & {
  alt?: string;
  src: string;
  priority?: boolean;
};
export default function ImageFill({
  className,
  alt,
  src,
  priority = false,
  ...props
}: ImageComponentProps) {
  return (
    <Image
      src={src}
      alt={alt || "image"}
      fill
      priority={priority}
      quality={100}
      {...props}
      className={cn("object-cover object-center", className)}
    />
  );
}
