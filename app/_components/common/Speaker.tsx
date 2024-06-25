import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  name: string;
  session: string;
  title: string;
  image: string;
  type: string;
  advisor?: boolean;
  className?: string;
  id: string;
}

export default function Speaker({
  name,
  session,
  title,
  image,
  className,
  type,
  advisor,
  id,
}: Props) {
  return (
    <Link
      className={`bg-white !flex flex-col items-center ${
        className ?? 'w-10/12 md:w-5/12 lg:w-1/3'
      } ${
        type === 'new' && 'relative mt-10 md:mt-14 4xl:mt-16'
      } rounded-lg shadow-xl drop-shadow-lg border-main-color border-2 px-3 pb-4 pt-8 md:px-5 md:pb-6 md:pt-12`}
      href={`/${advisor === true ? 'advisory-board' : 'speakers'}/info/${id}`}
    >
      <Image
        className={`bg-white ${
          type === 'new' && 'absolute -top-10 md:-top-14 4xl:-top-16'
        } w-20 h-20 md:w-28 md:h-28 4xl:w-32 4xl:h-32 object-cover rounded-full`}
        width={200}
        height={200}
        src={image}
        alt={`${name} image`}
      />
      <h2 className="font-bold text-center text-xl md:text-3xl 4xl:text-4xl  my-2 md:my-4 4xl:my-8">
        {name}
      </h2>
      <h4 className="text-lg md:text-2xl 4xl:text-3xl  text-center text-main-color mb-1 md:mb-2 4xl:mb-8">
        {session}
      </h4>
      <p className=" text-center text-sm md:text-lg 4xl:text-xl text-body-gray">
        {title}
      </p>
    </Link>
  );
}
