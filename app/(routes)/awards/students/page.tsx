import { DetailsCard, PagesHero } from '@/app/_components';
import Image from 'next/image';
import React from 'react';
import opentech from '@/public/imgs/openTech.webp';
import studentsAbout from '@/public/imgs/studentsAbout.webp';
import awardsHero from '@/public/imgs/awardsHeroBg.webp';
import techParkCard from '@/public/imgs/techParkCard.webp';
import broadCategoriesCard from '@/public/imgs/techParkAbout.webp';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Students Awards',
};

export default function Students() {
  return (
    <main>
      <PagesHero
        bg="bg-visit-bg"
        title="Electrifying Young Minds"
        description="Fueling the next generation of e-mobility innovators."
        buttons={[{ title: 'Enter now', url: '/awards/students/project-info' }]}
      />
      <section className="section-pad">
        <div className="container">
          <div className="row gap-8">
            <div className="col-span-12 lg:col-span-6 flex flex-col">
              <h2 className="title !text-start mb-4 md:mb-6 lg:mb-8">
                About the <span>Award</span>
              </h2>
              <h4 className="sub-section-body">
                At the heart of the Electric Vehicle Innovation Summit (EVIS)
                lies our commitment to the future – the Student Innovator
                Awards. This special accolade is designed specifically to
                recognize the outstanding EV and e-mobility projects submitted
                by ambitious students from diverse institutions. From
                solar-powered vehicles to innovative charging solutions, we
                invite ideas that redefine transportation.
              </h4>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Image
                className="w-full aspect-video object-cover rounded-md"
                src={studentsAbout}
                alt="Evehicle Show"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="awards-highlights bg-second-color section-pad">
        <div className="container">
          <h2 className="title">
            Award <span>Highlights</span>
          </h2>
          <div className="subtitle">
            Embark on a journey of discovery and innovation at EVIS — where your
            presence makes a difference. Seize the opportunity to:
          </div>
          <div className="cards overflow-hidden cards-container">
            {[
              {
                title: 'Tech Park Feature',
                details:
                  'Stand a chance to showcase your project at the exclusive Technology Park, designed for leading academic institutions and tech startups.',
                bg: broadCategoriesCard,
              },
              {
                title: 'Broad Categories',
                details:
                  'We accept diverse projects, from EV design and charging infrastructure to battery technology and more.',
                bg: techParkCard,
              },
              {
                title: 'Exclusive Prizes',
                details:
                  'Winners and finalists are rewarded with not just prizes and certificates, but also invaluable media coverage and networking opportunities at the Technology Park.',
                bg: awardsHero,
              },
            ].map(({ title, details, bg }, i) => (
              <DetailsCard
                title={title}
                description={details}
                index={i}
                bgUrl={bg ?? opentech}
                key={i}
                textStyle="md:text-lg lg:text-2xl"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <h2 className="title">Submission Criteria</h2>
          <p className="subtitle mb-4">
            Entries are accepted from undergraduates and graduates of regional
            academic institutions.
          </p>
          <h3 className="font-semibold md:text-xl lg:text-2xl mt-10 text-dark-color">
            Projects are <span className="text-main-color">evaluated</span> on:
          </h3>
          <ul className="list-disc list-inside  text-dark-color font-medium mb-4">
            {[
              'Innovation: Originality and forward-thinking ideas.',
              'Sustainability: Environmental friendliness and energy efficiency.',
              'Technical Feasibility: Practicality of implementation and real-world application.',
              'Economic Viability: Cost-effectiveness and market potential.',
              'Environmental Impact: Mitigation of environmental challenges.',
              'Social Relevance: Addressing transportation and mobility concerns.',
            ].map((item, i) => (
              <li
                className="marker:text-main-color text-dark-color mt-2 text-sm md:text-base lg:text-xl font-medium"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-second-color">
        <div className="container">
          <h2 className="title">
            Submission <span>Requirements</span>
          </h2>
          <h3 className=" font-semibold md:text-xl lg:text-2xl mt-10 text-dark-color">
            To be part of this exciting opportunity, ensure you have:
          </h3>
          <ul className="list-disc list-inside text-dark-color  font-medium">
            {[
              'Posters of your project or the actual entry for display at the Technology Park from 20-22 May.',
              'Note: A table will be provided onsite by the organizers.',
              'Deadline: 30 April 2024',
              'Download the information pack <a class="text-main-color underline" href="/download-files?file=302bf6f9-19b2-42b4-9f02-36a710b52cf2" target="_blank">here</a>',
            ].map((item, i) => (
              <li
                className="marker:text-main-color mt-2 text-sm md:text-base lg:text-xl"
                dangerouslySetInnerHTML={{ __html: item }}
                key={i}
              />
            ))}
          </ul>
          <Link
            className="green-btn mt-8"
            href={'/awards/students/project-info'}
          >
            Enter now
          </Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          {[
            {
              title: 'Esteemed Jury',
              description:
                'Our panel of judges comprises eminent experts in the e-mobility field, handpicked for their technical knowledge, experience, and industry insights.',
            },
            {
              title: 'Shape the Future of E-Mobility',
              description:
                'Harness your potential, share your innovative ideas, and let them make a mark in the world of electric vehicles and sustainable transportation.',
            },
            {
              title: 'Apply Now',
              description:
                'For any queries or assistance, <a class="text-main-color underline" href="mailto:example@mail.com">Contact Us.</a>',
            },
          ].map(({ title, description }, i) => (
            <div className="term" key={i}>
              <h3 className=" font-semibold md:text-xl lg:text-2xl mt-10 text-dark-color">
                {title}
              </h3>
              <p
                className="text-dark-color mt-2 text-sm md:text-base lg:text-xl font-medium"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
