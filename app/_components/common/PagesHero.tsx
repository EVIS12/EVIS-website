import Link from 'next/link';
import React, { Fragment } from 'react';

interface Props {
  bg: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: {
    title: string;
    url: string;
  }[];
}

export default function PagesHero({
  bg,
  title,
  subtitle,
  description,
  buttons,
}: Props) {
  return (
    <section
      className={`${bg} bg-cover bg-center main-overlay -mt-[100px] md:-mt-[120px] lg:-mt-[150px] 4xl:-mt-[95px] h-[80vh] md:h-[calc(85vh+5px)] flex flex-col items-center justify-center px-10`}
    >
      <h1 className="hero-title mb-4 text-shadow-title-shadow text-center lg:w-2/5 z-[1]">
        {title?.split(' ').includes('EVIS')
          ? title
              .split(' ')
              .map((item, i) =>
                item === 'EVIS' ? (
                  <span key={i}>EVIS </span>
                ) : (
                  <Fragment key={i}>{item} </Fragment>
                )
              )
          : title}
      </h1>

      {description && (
        <p className="text-white w-full md:w-7/12 lg:w-5/12 mx-auto  text-sm md:text-base lg:text-lg 4xl:text-xl leading-relaxed text-center mb-4 z-[1]">
          {description}
        </p>
      )}

      {subtitle && (
        <p className="text-main-color bg-white w-fit py-2 px-4 mx-auto text-center text-lg md:text-xl lg:text-2xl  font-medium my-3 z-[1]">
          {subtitle}
        </p>
      )}
      <div className="btns flex gap-4 mt-4">
        {buttons &&
          buttons.map(({ url, title }, i) => (
            <Link href={url} className="gradient-btn" key={i}>
              {title}
            </Link>
          ))}
      </div>
    </section>
  );
}
