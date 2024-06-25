import { PagesHero, RegisterSection, Speaker } from '@/app/_components';
import aboutConference from '../../../public/imgs/aboutConference.webp';
import conference from '../../../public/imgs/conference.webp';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AdaptiveCards } from '../providers';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { SpeakerMainInfo } from 'Speakers';
import { DownloadableFile } from 'Files';
import { RegisterLink } from 'Links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conference',
};

export const revalidate = 180;

export default async function Conference() {
  const conferenceSpeakers = await axiosInterceptorInstance.get<
    SpeakerMainInfo[]
  >('/speakers/conference-speakers/');

  const links = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links'
  );
  const [delegateLink] = links.data.filter(({ type }) => type === 'delegate');

  const files = await axiosInterceptorInstance.get<DownloadableFile[]>(
    '/conference/contract-file/'
  );
  const [agenda] = files.data.filter(({ type }) => type === 'EVIS 2024 Agenda');
  return (
    <main>
      <PagesHero
        bg="bg-conference-bg"
        title="Unleashing Insights"
        description="Industry Leaders Discuss Market Disruptors and Future Expectations."
        buttons={[
          {
            title: 'Register',
            url: delegateLink.link,
          },
        ]}
      />

      <section className="about-1 section-pad" id="elevate-knowledge">
        <div className="container grid grid-cols-12 gap-6 md:gap-10 justify-between">
          <div className="content col-span-12 md:col-span-5">
            <h3 className="sub-section-title mb-5">
              Elevate Your EV Industry Knowledge at the EVIS Main Conference!
            </h3>
            <p className="sub-section-content">
              Immerse yourself in the electric vehicle landscape at the EVIS
              Main Conference. Start each day inspired by a keynote from
              influential figures, and engage in lively panel discussions led by
              top industry leaders. Delve into the major market disruptors and
              get a glimpse of the future trends steering the EV realm. Equip
              yourself with insights and trends to stay ahead in the rapidly
              evolving EV industry.
            </p>
            <Link
              href={`/download-files?file=${agenda.id}`}
              className="green-btn !mx-0 mt-6"
            >
              Download agenda
            </Link>
          </div>
          <div className="md:col-span-1"></div>
          <div className="col-span-12 md:col-span-6">
            <Image
              className="w-full rounded-lg"
              src={aboutConference}
              alt="conference image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="speakers section-pad bg-second-color" id="speakers">
        <div className="container">
          <h2 className="title">
            <span>2024</span> Speakers
          </h2>
          <AdaptiveCards>
            {conferenceSpeakers?.data
              .slice(0, 3)
              .map(({ id, name, photo, job_title, company }) => (
                <Speaker
                  id={id}
                  name={name}
                  session={job_title}
                  title={company}
                  image={photo ?? ''}
                  type="new"
                  className="w-full"
                  key={id}
                />
              ))}
          </AdaptiveCards>{' '}
          <Link className="white-btn mt-8 md:mt-14" href="/speakers">
            Explore our speakers
          </Link>
        </div>
      </section>

      <RegisterSection
        className="!pt-6 md:!pt-10 4xl:!pb-28"
        image={conference}
        title="Registration for the Conference"
        description="Eager to lead in the electric mobility revolution? Secure your spot at the EVIS Conference and join the conversation that's driving the future of sustainable transportation."
        btn={{
          title: 'Register',
          url: delegateLink.link,
        }}
      />
    </main>
  );
}
