import {
  BlogSection,
  Hero,
  PreviousAttendees,
  Statistics,
  SubscribeSection,
} from '../_components';
import Link from 'next/link';

import axiosInterceptorInstance from '../_api/axiosInterceptor';
import { ArticleMaininfo } from 'PressCenter';
import { whoShouldAttend, whyAttend } from '../_utils/info';
import cpdLogo from '@/public/imgs/cpdLogo.webp';
import Image from 'next/image';
import { AttendeesResponse } from '../_api/_hooks/useGetAttendees';

export const revalidate = 180;

export default async function Home() {
  const time = await axiosInterceptorInstance.get<{ id: 1; time: string }>(
    '/home/timer'
  );
  const homeArticles = await axiosInterceptorInstance.get<ArticleMaininfo[]>(
    '/blog/blog-home/'
  );

  const { data } = await axiosInterceptorInstance.get<AttendeesResponse>(
    '/attendees/previous_attendees/?page=1'
  );

  return (
    <main>
      <Hero time={time.data.time} />
      <Link className="block bg-main-gradient py-6 md:py-10" href={'/cpd'}>
        <div className="container">
          <Image
            className="w-32 md:w-44 lg:w-52 2xl:w-56 mx-auto"
            src={cpdLogo}
            alt="CPD Member Logo"
          />
        </div>{' '}
      </Link>
      <Statistics />

      {/* Start Why Attend Section */}
      <section className="section-pad bg-second-color" id="why-attend">
        <div className="container">
          <h2 className="title">Why Attend?</h2>
          <div className="reasons-container grid grid-cols-10 gap-6 mt-8 md:mt-16 lg:mt-20">
            {whyAttend.map(({ Icon, title }, i) => (
              <div
                className="col-span-5 lg:col-span-2 bg-white p-5 md:p-6 drop-shadow-lg rounded-md flex flex-col gap-y-6 items-center text-center"
                key={i}
              >
                <Icon className="w-8 md:w-10" />
                <h4 className="font-semibold text-lg md:text-xl">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Why Attend Section */}

      {/* Start Who Should Attend Section */}
      <section className="section-pad" id="who-should-attend">
        <div className="container">
          <h2 className="title">Who Should Attend?</h2>
          <p className="subtitle">
            The Electric Vehicle Innovation Summit is designed for professionals
            and stakeholders acrossvarious sectors, including:
          </p>
          <div className="reasons-container row gap-6 mt-8 md:mt-16 lg:mt-20">
            {whoShouldAttend.map(({ icon, title }, i) => (
              <div
                className="col-span-12 md:col-span-6 2xl:col-span-4 bg-white p-4 md:p-5 lg:p-6 rounded-md row gap-x-4 md:gap-x-6 lg:gap-x-10 items-center border-[1px] border-light-gray"
                key={i}
              >
                <div className="p-3 md:p-4 col-span-2 md:col-span-3 lg:col-span-2 bg-main-gradient w-12 md:w-16 h-12 md:h-16 rounded-md shadow-md drop-shadow-md">
                  <Image
                    className="object-contain"
                    src={icon}
                    alt={`${title} Icon`}
                  />
                </div>

                <h4 className="col-span-10 md:col-span-9 lg:col-span-10 font-semibold text-lg lg:text-xl md:w-[90%] lg:w-[80%]">
                  {title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Who Should Attend Section */}

      <PreviousAttendees attendees={data.results} />

      <BlogSection className="bg-second-color" articles={homeArticles.data} />

      <SubscribeSection />
    </main>
  );
}
