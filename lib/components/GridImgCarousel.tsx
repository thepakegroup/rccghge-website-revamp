"use client";

import { GalleryItem, Team } from "@/app/utils/subMinistriesActions";
import TitleBorderTop from "@/components/TitleBorderTop";
import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  MotionDiv,
  MotionImage,
} from "@/lib/framer-motion/motionComponents";
import { MoveLeft, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
type Card = {
  imgUrl: string;
  title: string;
  name: string;
};

export default function GridImgCarousel({
  imgArr,
  time,
  cardObjArr,
  numOfRows = 1,
  numOfCols = 3,
  height = "200px",
}: {
  imgArr?: GalleryItem[];
  cardObjArr?: Team[];
  time: number;
  numOfRows?: number;
  numOfCols?: number;
  height?: string;
}) {
  if (!imgArr && !cardObjArr) {
    throw new Error("At least one of imgArr or cardObjArr must be provided");
  }

  const [startIndex, setStartIndex] = useState(0); // Track the start index of the current batch

  const handleNext = () => {
    if (imgArr) {
      // Calculate the total number of items left to display
      const remainingItems =
        imgArr.length - (startIndex + numOfCols * numOfRows);

      // If there are no more items left, do nothing
      if (remainingItems <= 0) return;

      // Otherwise, update startIndex to display the next batch of images
      setStartIndex(
        (prevIndex) =>
          prevIndex + Math.min(numOfCols * numOfRows, remainingItems)
      );
    } else if (cardObjArr) {
      // Calculate the total number of items left to display
      const remainingItems =
        cardObjArr.length - (startIndex + numOfCols * numOfRows);

      // If there are no more items left, do nothing
      if (remainingItems <= 0) return;

      // Otherwise, update startIndex to display the next batch of images
      setStartIndex(
        (prevIndex) =>
          prevIndex + Math.min(numOfCols * numOfRows, remainingItems)
      );
    }
  };

  const handlePrev = () => {
    // Update startIndex to display the previous batch of images
    setStartIndex((prevIndex) =>
      Math.max(prevIndex - numOfCols * numOfRows, 0)
    ); // Decrease startIndex by the number of rows times the number of columns
    // Ensure startIndex doesn't go below 0
  };

  return (
    <AnimatePresence>
      <div className="w-full relative space-y-5">
        <div
          className={` w-full items-center justify-between   `}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numOfCols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${numOfRows}, minmax(0, 1fr))`,
            gap: "1rem",
          }}>
          {imgArr &&
            imgArr
              .slice(startIndex, startIndex + numOfCols * numOfRows)
              .map((item, index) => {
                return (
                  <div
                    key={startIndex + index}
                    className="relative w-full "
                    style={{
                      height: height,
                    }}>
                    <MotionImage
                      key={startIndex + index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={item.item_url}
                      fill
                      alt="grid image"
                      className=" object-cover   object-center"
                    />
                  </div>
                );
              })}
          {cardObjArr &&
            cardObjArr
              .slice(startIndex, startIndex + numOfCols * numOfRows)
              .map((card, index) => {
                const { name, image_url, office } = card;
                return (
                  <MotionDiv
                    className=" relative  flex flex-col gap-4"
                    key={startIndex + index}
                    style={{ height: height }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <div
                      className="image relative h-full "
                      // style={{
                      //   height: height,
                      // }}
                    >
                      <MotionImage
                        key={index}
                        // initial={{ opacity: 0 }}
                        // animate={{ opacity: 1 }}
                        // exit={{ opacity: 0 }}
                        // transition={{ duration: 0.5 }}
                        src={image_url}
                        fill
                        alt="grid image"
                        className=" object-cover   object-center"
                      />
                    </div>
                    <div className="card-content h-fit">
                      {/* title with border top */}
                      <div className="flex flex-col w-fit gap-1">
                        <div className="line bg-primary w-16 h-1"></div>
                        <h1
                          className={
                            "text-xl sm:text-2xl font-bold capitalize"
                          }>
                          {office}
                        </h1>
                      </div>
                      <p className="text-sm">{name}</p>
                    </div>
                  </MotionDiv>
                );
              })}
        </div>
        <div className="flex justify-between  ">
          <Button
            size={"icon"}
            className="rounded-full z-40"
            onClick={handlePrev}>
            <MoveLeft />
          </Button>
          <Button
            size={"icon"}
            className="rounded-full z-40"
            onClick={handleNext}>
            <MoveRight />
          </Button>
        </div>
      </div>
    </AnimatePresence>
  );
}
