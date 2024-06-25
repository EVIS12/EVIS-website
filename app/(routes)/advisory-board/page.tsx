import { Speaker } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { SpeakerMainInfo } from 'Speakers';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advisory Board',
};

export const revalidate = 180;

export default async function AdvisoryBoard() {
  const advisors = await axiosInterceptorInstance.get<SpeakerMainInfo[]>(
    '/advisors/advisors-board/'
  );

  return (
    <main>
      <div className="container">
        <div className="section-pad">
          <h2 className="title mb-6 md:mb-16">
            <span>EVIS</span> Advisory Board
          </h2>
          <div className="row gap-y-6 md:gap-6 lg:gap-8">
            {advisors?.data?.map(({ id, name, job_title, photo, company }) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-3" key={id}>
                <Speaker
                  id={id}
                  name={name}
                  session={job_title}
                  title={company}
                  image={photo}
                  advisor={true}
                  type="old"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
