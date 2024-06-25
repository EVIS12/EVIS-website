import { CalendarIcon } from '@/public/icons/SVGIcons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  image: string;
  title: string;
  date: string;
  overview: string;
  views: number;
  id: string;
  className?: string;
}

export default function Article({
  image,
  title,
  date,
  overview,
  id,
  views,
  className,
}: Props) {
  const fullDate = new Date(date);
  const formattedData = `${fullDate.getFullYear()}-${
    fullDate.getMonth() + 1
  }-${fullDate.getDate()}`;

  return (
    <div
      className={`bg-white flex flex-col rounded-lg overflow-hidden ${
        className ?? 'w-10/12 md:w-5/12 lg:w-1/3'
      } h-full shadow-xl drop-shadow-lg border-main-color border-2`}
    >
      <Image
        src={image}
        alt={`Image for ${title}`}
        width={150}
        height={150}
        className="w-full h-48 md:h-60 4xl:h-64 object-cover"
      />
      <div className="content p-4 md:p-5 4xl:p-10 text-body-gray  flex flex-col justify-between h-full">
        <h3 className="text-xl md:text-2xl 4xl:text-3xl font-bold text-dark-color  mb-2 md:mb-3 4xl:mb-4">
          {title}
        </h3>
        <p className="info flex items-center font-medium text-sm md:text-base 4xl:text-lg mb-4">
          <CalendarIcon className="mr-2" /> {formattedData} | {views} Views
        </p>
        <p className="text-sm md:text-base 4xl:text-lg">
          {overview.slice(0, 80)}
        </p>
        <Link
          href={`/media/blog/${id}`}
          className="white-btn !w-full md:!text-lg mt-6 text-center !px-6 !md:px-12"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}
