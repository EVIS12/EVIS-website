import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
  btn: {
    url: string;
    title: string;
  };
}

export default function RegisterSection({
  image,
  title,
  description,
  btn,
  className,
}: Props) {
  return (
    <section className={`section-pad ${className}`} id="register-now">
      <div className="container flex items-center flex-wrap">
        <Image
          className="w-full md:w-4/5 mx-auto lg:w-1/2 h-[300px] lg:h-[500px] object-cover rounded-lg"
          src={image}
          alt={`${title} Image`}
          width={400}
          height={400}
        />
        <div className="bg-white data-card p-4 md:p-10 border-2 gradient-border border-t-0 lg:border-t-2 lg:border-s-0 w-4/5 md:w-3/5 mx-auto lg:w-1/2 ">
          <h3 className="text-xl md:text-3xl 4xl:text-4xl mt-4 text-dark-color  font-bold text-center">
            {title}
          </h3>
          <p className="text-sm md:text-lg 4xl:text-xl text-body-gray text-center my-4 md:my-6 4xl:my-10 w-full md:w-2/3 mx-auto">
            {description}
          </p>
          <Link className="green-btn" href={btn.url ?? ''}>
            {btn.title}
          </Link>
        </div>
      </div>
    </section>
  );
}
