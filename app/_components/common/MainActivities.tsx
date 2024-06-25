import React from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Activity {
  name: string;
  icon: StaticImageData;
  link: string;
  actDescription?: string;
}

interface Props {
  leftActivities: Activity[];
  rightActivities: Activity[];
  mainAddress: {
    title: string;
    description?: string;
  };
}

export default function MainActivities({
  leftActivities,
  rightActivities,
  mainAddress: { title, description },
}: Props) {
  return (
    <section className="section-pad bg-second-color" id="main-activities">
      <div className="container">
        <div className="row gap-y-10 lg:gap-8">
          <div className="col-span-12 lg:col-span-4 flex flex-row lg:flex-col gap-4">
            {leftActivities.map(({ name, icon, link, actDescription }, i) => (
              <Link
                href={link}
                className="card relative w-full border-4 border-main-color lg:px-11 py-4 lg:py-6 rounded-lg text-center"
                key={i}
              >
                <h3 className=" text-dark-color mt-4 lg:mt-0  font-semibold lg:text-2xl">
                  {name}
                </h3>
                {actDescription && (
                  <p className="text-xs md:text-base  text-body-gray">
                    {actDescription}
                  </p>
                )}
                <div className="icon bg-main-color w-14 h-14 rounded-full grid place-content-center p-2 absolute right-1/2 top-0 -translate-y-1/2 translate-x-1/2 lg:right-0 lg:translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
                  <Image src={icon} alt={`${name} Icon`} />
                </div>
              </Link>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 grid place-content-center px-8">
            <h2 className="font-bold text-2xl lg:text-3xl  text-center mb-2">
              {title}
            </h2>
            {description && (
              <p className=" text-sm md:text-base  text-dark-color text-center">
                {description}
              </p>
            )}
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-row lg:flex-col gap-4">
            {rightActivities.map(({ name, icon, link, actDescription }, i) => (
              <Link
                href={link}
                className="card relative w-full border-4 border-main-color lg:px-11 py-4 lg:py-6 rounded-lg text-center"
                key={i}
              >
                <h3 className=" text-dark-color mt-4 lg:mt-0  font-semibold lg:text-2xl">
                  {name}
                </h3>
                {actDescription && (
                  <p className="text-xs md:text-base  text-body-gray">
                    {actDescription}
                  </p>
                )}
                <div className="icon bg-main-color w-14 h-14 rounded-full grid place-content-center p-3 absolute right-1/2 top-0 -translate-y-1/2 translate-x-1/2 lg:left-0 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
                  <Image src={icon} alt={`${name} Icon`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
