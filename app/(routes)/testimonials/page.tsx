import { PagesHero } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { TestimonialDetails } from 'PressCenter';
import Image from 'next/image';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials',
};

export const revalidate = 180;

export default async function Testimonials() {
  const testimonials = await axiosInterceptorInstance.get<{
    count: number;
    results: TestimonialDetails[];
  }>(`/blog/testimonials/`);

  return (
    <main>
      <PagesHero
        bg="bg-testimonials-bg"
        title="Testimonials"
        description="Hear what industry leaders, experts, and attendees have to say about their EVIS experiences and the future of electric mobility."
      />
      <section className="section-pad">
        <div className="container">
          {testimonials?.data?.results?.map(
            ({ id, name, video_id, photo, subtitle, body }, i) => (
              <div
                className={`card my-8 md:my-14  bg-second-color rounded-xl p-4 md:p-6 lg:p-10 flex flex-col ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 md:gap-12`}
                key={id}
              >
                <iframe
                  className="w-full lg:w-4/12  h-[250px] md:h-[400px] lg:h-[350px] 4xl:h-[450px] rounded-xl"
                  src={`https://www.youtube.com/embed/${video_id}`}
                  loading="lazy"
                ></iframe>
                <div className="content w-full lg:w-8/12  flex flex-col">
                  <div className="profile flex items-center">
                    <Image
                      className="rounded-full mr-4 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 4xl:w-20 4xl:h-20 object-cover"
                      src={photo ?? ''}
                      alt={`${name} photo`}
                      width={400}
                      height={400}
                    />
                    <div className="info flex flex-col">
                      <h4 className="name  text-dark-color md:text-lg lg:text-xl 4xl:text-2xl font-medium lg:mb-1">
                        {name}
                      </h4>
                      <p className="text-body-gray text-xs md:text-sm 4xl:text-base">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="leading-[1.7] text-body-gray mt-4 lg:mt-6 text-sm md:text-base lg:text-lg 4xl:text-2xl">
                    {body}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
