"use client";
//
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Grid, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import Image from "next/image";
import { Fragment } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

export const GalleryImages = ({ imgArr }: { imgArr: any }) => {
  //
  return (
    <Fragment>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        // custom nav
        navigation={{
          nextEl: ".go_next_two",
          prevEl: ".go_prev_two",
        }}
        modules={[Grid, Navigation]}
        breakpoints={{
          140: {
            slidesPerView: 1,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          678: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          997: {
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
        grid={{
          rows: 2,
          fill: "row",
        }}
        className="mySwiper w-[99%] mx-auto"
      >
        {imgArr?.map((item: any) => {
          return (
            <SwiperSlide key={item?.item_url}>
              <div className="w-full h-[340px]">
                <Image
                  className="w-full h-full object-cover"
                  src={item?.item_url}
                  alt={item?.item_url}
                  width={300}
                  height={300}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-[99%] mx-auto flex justify-between items-center !mt-5">
        <MoveLeft className="go_prev_two text-white bg-[#FF8412] rounded-full p-1 size-10" />
        <MoveRight className="go_next_two text-white bg-[#FF8412] rounded-full p-1 size-10" />
      </div>
    </Fragment>
  );
};
