'use client';
import React from 'react';
import Youtube from 'react-youtube';

export default function Highlights() {
  return (
    <section className="section-pad bg-second-color" id="highlights">
      <div className="container">
        <h2 className="title mb-10">
          Relive the moments of <span className="text-main-color">EVIS</span>{' '}
          2023
        </h2>
        <div className="row gap-4 md:gap-8">
          {[
            { videoId: 'vOtXo5DWJHQ', day: '1' },
            { videoId: 'F8nRU54Lagk', day: '2' },
            { videoId: 'yUOwyzLBKY8', day: '3' },
          ].map(({ videoId, day }, i) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#f8f8f8] border-2 border-light-gray rounded-lg p-4"
              key={i}
            >
              <Youtube
                iframeClassName="w-full aspect-video rounded-lg"
                opts={{
                  height: 'auto',
                  width: 'auto',
                }}
                videoId={videoId}
              />
              <h3 className=" font-semibold text-dark-color md:text-lg lg:text-2xl mt-5 text-center">
                EVIS <span className=" text-main-color">2023</span> DAY {day}{' '}
                Highlights
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
