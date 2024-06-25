import React from 'react';
import { PagesHero } from '@/app/_components';
import flight from '../../../public/imgs/flight.webp';
import experience from '../../../public/imgs/experience.webp';
import visa from '../../../public/imgs/visa.webp';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plan Your Visit',
};

export const revalidate = 180;

export default async function PlanVisit() {
  return (
    <main>
      <PagesHero
        bg="bg-plan-visit-bg"
        title="Plan Your Visit"
        description="Prepare for an exceptional experience at EVIS. Explore travel details, accommodations, and local attractions to make the most of your visit to the electric mobility epicenter."
      />
      <section className="section-pad">
        <div className="container">
          <h2 className="title">
            Plan Your Visit To <span>EVIS</span>
          </h2>

          <div className="steps mt-8 md:mt-16">
            {/* Step-1 */}
            <div className="step my-12 md:my-20 lg:my-24 flex flex-col lg:flex-row">
              <Image
                className="w-full lg:w-1/3 h-[250px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
                src={visa}
                alt="Passport with bag"
                width={500}
                height={500}
              />
              <div className="content w-5/6 mx-auto lg:w-2/3">
                <h3 className="title !text-start ml-8 mb-8 hidden lg:block">
                  Visa Requirements
                </h3>
                <div className="bg-[#CFF0F0] p-5 md:p-10 ">
                  <h3 className="sub-section-title mb-3 lg:hidden">
                    Visa Requirements
                  </h3>
                  <p className="text-body-gray md:text-2xl 4xl:text-3xl leading-normal">
                    Understanding and meeting the visa requirements is a crucial
                    step in ensuring your seamless participation in EVIS 2024.
                    In this section, you&apos;ll find comprehensive information
                    on the specific visa types applicable to your visit, along
                    with a detailed guide on the application process. We&apos;ll
                    also assist you in gathering the necessary supporting
                    documents and provide links to official government
                    resources, making your visa application process as smooth as
                    possible.
                  </p>
                  <a
                    className="green-btn !mx-0 mt-4"
                    href={'https://www.adro.gov.ae/Visas'}
                    target="_blank"
                  >
                    Check Visa Requirements
                  </a>
                </div>
              </div>
            </div>{' '}
            {/* Step-2 */}
            <h3 className="title mt-12 md:mt-20 lg:mt-24 !text-start hidden lg:block">
              Book Your Flight & Hotel
            </h3>
            <div className="step mb-12 md:mb-20 lg:mb-24 flex items-center flex-col lg:flex-row-reverse">
              <Image
                className="w-full lg:w-7/12 relative lg:-left-6 h-[250px] md:h-[450px] lg:h-[400px] object-cover rounded-lg"
                src={flight}
                alt="Passport with bag"
                width={500}
                height={500}
              />
              <div className="content w-5/6 mx-auto lg:w-5/12">
                <div className="bg-[#CFF0F0] p-5 md:p-10 ">
                  <h3 className="sub-section-title !text-lg md:!text-3xl mb-3 lg:hidden">
                    Book Your Flight & Hotel
                  </h3>
                  <p className="text-body-gray md:text-2xl 4xl:text-2xl leading-normal">
                    We&apos;ve made travel planning stress-free for your visit
                    to EVIS 2024. Discover convenient flight options,
                    recommended nearby hotels, and time-saving travel packages.
                    Secure the best deals for flights and accommodations with
                    ease.
                  </p>
                  <a
                    className="green-btn !mx-0 mt-4"
                    href={'mailto:israa.abed@nirvanatls.com'}
                    target="_blank"
                  >
                    Inquire Here
                  </a>
                </div>
              </div>
            </div>
            {/* Step-3 */}
            <div className="step my-12 md:my-20 lg:my-24 flex flex-col lg:flex-row">
              <Image
                className="w-full lg:w-1/3 h-[250px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
                src={experience}
                alt="Passport with bag"
                width={500}
                height={500}
              />
              <div className="content w-5/6 mx-auto lg:w-2/3">
                <h3 className="title !text-start ml-8 mb-8 hidden lg:block">
                  Explore Local Attractions
                </h3>
                <div className="bg-[#CFF0F0] p-5 md:p-10 ">
                  <h3 className="sub-section-title mb-3 lg:hidden">
                    Explore Local Attractions
                  </h3>
                  <p className="text-body-gray md:text-2xl 4xl:text-2xl leading-normal">
                    <span className="">
                      Your visit to EVIS 2024 is more than just the event itself
                      –
                    </span>
                    it&apos;s an opportunity to immerse yourself in the local
                    culture and attractions. Explore the region&apos;s unique
                    cuisine, attend cultural events, and discover landmarks and
                    museums. Opt for guided tours and excursions to delve into
                    the local culture and natural beauty. Extend your stay to
                    enjoy pre and post-event activities, making the most of your
                    time in the region.
                  </p>
                  <a
                    className="green-btn !mx-0 mt-4"
                    href={
                      'https://visitabudhabi.ae/en?pxid=263198&gad_source=1&gclid=CjwKCAiAlcyuBhBnEiwAOGZ2SwMU766O4p2tDegF5lKsTun-rY7h2let6luvBX758vuihjSnAEzNDxoCKY8QAvD_BwE'
                    }
                    target="_blank"
                  >
                    Explore Attractions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
