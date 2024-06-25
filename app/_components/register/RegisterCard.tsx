import Link from 'next/link';
import React from 'react';

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

export default function RegisterCard({ icon, title, description, url }: Props) {
  return (
    <div className="bg-white rounded-xl p-8 w-10/12 md:w-5/12 lg:w-1/3 shadow-lg drop-shadow-md flex flex-col justify-between">
      <div className="content">
        <div className="w-12 h-12 md:w-14 md:h-14 4xl:w-20 4xl:h-20 p-3 md:p-4 4xl:p-5 bg-main-gradient flex justify-center items-center rounded-md shadow-md drop-shadow-md">
          {icon}
        </div>
        <h3 className="  text-dark-color font-bold text-xl md:text-2xl 4xl:text-4xl my-2 md:my-3 4xl:my-5">
          {title}
        </h3>
        <p className=" text-sm md:text-lg 4xl:text-2xl text-body-gray">
          {description}
        </p>
      </div>
      <Link
        className="white-btn mt-4 md:mt-6 4xl:mt-10 !w-full text-center"
        href={url}
        target="_blank"
      >
        Register now
      </Link>
    </div>
  );
}
