import React from 'react';
import MaxWidthContainer from './MaxWidthContainer';
import { FaCaretLeft } from 'react-icons/fa6';

export default function BookmarkHeading({ title }: { title: string }) {
  return (
    <h1 className="blueGradient w-[280px]  text-xl font-semibold  capitalize  text-white sm:w-[300px] md:text-3xl lg:w-[500px] 2xl:w-2/5 ">
      <div className="relative flex h-14 items-center px-6 md:h-20 lg:px-12 2xl:justify-end 2xl:pr-[260px]">
        {title}

        <FaCaretLeft className="absolute -right-16 text-9xl md:text-[9rem] " />
      </div>
    </h1>
  );
}
