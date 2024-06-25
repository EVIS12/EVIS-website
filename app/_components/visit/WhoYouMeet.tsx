import { whoExpect } from '@/app/_utils/info';
import React from 'react';

export default function WhoYouMeet() {
  return (
    <section className="section-pad" id="visitors">
      <div className="container">
        <h2 className="title mb-12">
          Who You Can <span className=" text-main-color">Expect</span> To Meet
        </h2>
        <div className="row gap-6 justify-center">
          {whoExpect.map((person, i) => (
            <div className="col-span-6 md:col-span-4 lg:col-span-3" key={i}>
              <div className="card relative w-full h-full border-4 border-main-color rounded-lg grid place-content-center p-4">
                <h4 className=" text-dark-color font-semibold text-sm md:text-base lg:text-xl text-center">
                  {person}
                </h4>
                <span className="grid place-content-center bg-main-color w-6 h-6 md:w-8 md:h-8 rounded-full  text-white absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold">
                  {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
