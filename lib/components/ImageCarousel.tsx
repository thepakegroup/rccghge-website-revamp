"use client";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AnimatePresence,
  MotionImage,
} from "@/lib/framer-motion/motionComponents";
import React, { useEffect, useState } from "react";

export default function ImageCarousel({
  imgArr,
  time,
}: {
  imgArr: string[];
  time: number;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [loaded, setLoaded] = useState(false);
  //useEfect to set intervwl for changing the image index every 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setImageUrl(imgArr[imgIndex]);
      setImgIndex((prevIndex) => (prevIndex + 1) % imgArr.length);
    }, time);
    return () => clearInterval(interval);
  }, [imgIndex, imgArr, time]);
  return (
    <AnimatePresence>
      {imageUrl ? (
        <MotionImage
          src={imageUrl}
          alt="hero image"
          key={imgIndex}
          fill
          sizes="100vw"
          className=" object-cover object-center"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
        />
      ) : (
        <Skeleton key={imgIndex} className=" w-full h-full" />
      )}
    </AnimatePresence>
  );
}
