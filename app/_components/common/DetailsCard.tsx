'use client';
import { StaticImageData } from 'next/image';
import React from 'react';

export default function Card({
  title,
  description,
  bgUrl,
  index,
  textStyle,
}: {
  title: string;
  description: string;
  bgUrl: StaticImageData;
  index: number;
  textStyle?: string;
}) {
  return (
    <div
      style={{ backgroundImage: `url('${bgUrl.src}')` }}
      className={`card bg-cover ${
        index % 2 === 0 ? 'overlay-green' : 'overlay-blue'
      } rounded-lg overflow-hidden flex justify-center items-center p-5 md:p-10 lg:p-16 w-2/3 md:w-1/3 h-[200px] sm:h-[270px] lg:h-[350px] 4xl:h-[450px] relative hover:show-description`}
    >
      <h2 className="text-lg md:text-2xl lg:text-3xl 4xl:text-4xl font-bold  text-center text-white z-[2]">
        {title}
      </h2>
      <div
        className={`description ${
          index % 2 === 0 ? 'bg-green-gradient' : 'bg-blue-gradient'
        } text-white p-3 md:p-5 4xl:p-7 z-5 absolute top-full w-full h-full flex rounded-sm z-[3]`}
      >
        <p className={`${textStyle ?? 'text-xs md:text-base lg:text-[20px]'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
