import React, { Fragment } from 'react';
import { PagesHero } from '@/app/_components';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Awards',
};

export default function Awards() {
  return (
    <main>
      <PagesHero
        bg="bg-awards-bg"
        title="EVIS Awards"
        subtitle="Deadline extended to 10 May 2024"
        description="Join us in celebrating innovation.  These Awards are more than just accolades, they are a testament to the progress and potential of electric mobility.  Be a part of the change, apply now, and let your ideas pave the way for a sustainable future."
      />

      {[
        {
          title: 'Student <span>Innovation</span> Award',
          subtitle:
            'Dedicated to spotlighting exceptional e-mobility projects from student visionaries, the Student Innovation Award recognizes fresh perspectives in EV design, infrastructure, and sustainable solutions.',
          features: [
            'Diverse Topics: From EV design and battery technology to renewable energy integration and more.',
            'Networking: Gain recognition and valuable networking opportunities within the Technology Park.',
            'Prizes: The winner and finalists will be honored with prizes, certificates, and media coverage.',
          ],
          bg: `bg-awardsStudents-bg`,
          url: '/awards/students',
        },
        {
          title: 'EVIS <span>Start-up</span> Award',
          subtitle:
            'The EVIS Startup Award is another initiative created to acknowledge and celebrate innovative startups in the MENA region e-mobility sector. This award program is established to foster innovation and showcase the significant contributions and impacts of startups in the domains of business and technology.',
          features: [
            'Spotlighting Excellence: We aim to recognize and celebrate startups and entrepreneurs for their exceptional innovation, honoring their impactful contributions to industries, and society.',
            'Fostering the Spirit of Innovation: Our commitment extends to nurturing the spirit of innovation, providing a platform that both honors and inspires the development of revolutionary ideas and solutions.',
            'Empowering Entrepreneurs: At the heart of our mission is empowering the entrepreneurial spirit, supporting and enhancing the entrepreneurial journey, acknowledging its transformative potential.',
          ],
          bg: 'bg-awardsInnovation-bg',
          url: '/awards/start-up',
        },
      ].map(({ title, subtitle, features, bg, url }, i) => (
        <Fragment key={i}>
          <section
            className={`section-pad !pb-4 lg:!pt-24 ${
              i === 1 && 'bg-second-color'
            }`}
          >
            <div className="container">
              <div className="row gap-8">
                <div className="col-span-12 lg:col-span-6">
                  <h2
                    className="title !text-start"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <p className="text-dark-color mt-6 font-medium text-sm md:text-base lg:text-lg ">
                    {subtitle}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <h3 className=" font-semibold md:text-lg lg:text-2xl mb-4">
                    Our Mission:
                  </h3>
                  <ul className=" list-disc list-outside  font-medium text-dark-color">
                    {features.map((item, i) => (
                      <li
                        className="marker:text-main-color text-xs md:text-base lg:text-lg my-2 md:my-4 lg:my-8"
                        key={i}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
            className={`learn-more-banner w-full h-52 md:h-64 lg:h-80 ${bg} main-overlay bg-cover bg-center grid place-content-center`}
          >
            <Link className="green-btn z-[1]" href={url}>
              Learn More &amp; Apply
            </Link>
          </section>
        </Fragment>
      ))}
    </main>
  );
}
