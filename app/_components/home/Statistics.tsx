import axiosInterceptor from '@/app/_api/axiosInterceptor';
import { statistics } from '@/app/_utils/info';
import { AllStatistics } from 'Statistics';
import React from 'react';

export default async function Statistics() {
  const allStatistics = await axiosInterceptor.get<AllStatistics>(
    '/home/statistics'
  );

  return (
    <section className="section-pad  md:!py-10 4xl:!py-12 !px-0 ">
      <div className="container ">
        <h2 className="title mb-6 md:mb-10">Key Statistics</h2>
        <div className="statistics mx-auto flex flex-wrap justify-center">
          {statistics.map(({ icon, title, key }, i) => (
            <div
              className="flex flex-col items-center m-2 my-5 md:m-6 4xl:m-10 w-40 md:w-48 4xl:w-52"
              key={i}
            >
              <div className="icon bg-main-gradient w-12 h-12   4xl:w-16 4xl:h-16 rounded-full flex justify-center items-center p-3">
                {icon}
              </div>
              <h2 className="number text-2xl md:text-3xl 4xl:text-4xl  font-extrabold mt-4 text-dark-color">
                {allStatistics.data?.[key as keyof AllStatistics]}
              </h2>
              <p className="text-sm md:text-base 4xl:text-xl text-body-gray md:mt-2">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
