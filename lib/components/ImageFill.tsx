	import Image from 'next/image';
import React, { HTMLAttributes } from 'react'
import { cn } from '../utils';
    
    	type ImageComponentProps = HTMLAttributes<HTMLImageElement> & {
        alt?: string;
        src: string;
      };
    export default function ImageFill({
      className,
      alt,
      src,
      ...props
    }: ImageComponentProps) {
     return (
       <Image
         src={src}
         alt={alt || "image"}
         fill
         className={cn("object-cover object-center ", className)}
         {...props}
       />
     );
    }
    