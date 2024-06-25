import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { PagesHero } from '@/app/_components';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Our Sponsors & Partners',
};

type Sponsor = {
  id: string;
  logo: string;
  subtitle: string;
  link: string;
};

type RecievedSponsors = {
  id: string;
  name: string;
  sponsers_partners: Sponsor[];
}[];

export const revalidate = 180;

export default async function SponsorsPartners() {
  const sponsorsCategories =
    await axiosInterceptorInstance.get<RecievedSponsors>(
      '/partners_sponsrs/list/'
    );

  return (
    <main>
      <PagesHero title="Our Sponsors & Partners" bg="bg-sponsors-bg" />
      <section className="section-pad">
        <div className="container">
          {sponsorsCategories.data.map(({ id, name, sponsers_partners }) => (
            <div className="category mb-12" key={id}>
              <h3 className="sub-section-title w-fit text-center mx-auto border-[1px] border-main-color !font-medium py-3 px-6">
                {name}
              </h3>
              <div className="logos flex flex-wrap justify-center items-center gap-4 lg:gap-6 mt-4 md:mt-8 lg:mt-12">
                {sponsers_partners.map(({ id, logo, subtitle, link }) => {
                  const ComponentType = link ? 'a' : 'div';

                  return (
                    <ComponentType
                      className="card md:w-[45%] lg:w-[30%] aspect-video bg-white drop-shadow-md overflow-hidden hover:scale-105 transition-all"
                      href={link}
                      target={'_blank'}
                      key={id}
                    >
                      <div className={`image-container h-full py-2 px-6`}>
                        <Image
                          className="object-contain h-full"
                          src={`https://server.evinnovationsummit.com/${logo}`}
                          width={400}
                          height={200}
                          alt={'Logo'}
                        />
                      </div>
                    </ComponentType>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
