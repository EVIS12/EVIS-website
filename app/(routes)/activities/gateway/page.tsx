import { PagesHero } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import marketGatewayAbout from '@/public/imgs/marketGatewayAbout.webp';
import { RegisterLink } from 'Links';
import Image from 'next/image';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Gateway',
};

export const revalidate = 180;

export default async function Gateway() {
  const registerLinks = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links/'
  );
  const [visitLink] = registerLinks?.data.filter(
    (item) => item.type === 'visitor'
  );

  return (
    <main>
      <PagesHero
        title="EVIS 2024 Abu Dhabi Market Gateway
        Unlocking Business Opportunities in the EV Industry
        Exclusively for Confirmed Exhibitors"
        bg="bg-marketGateway-bg"
        buttons={[{ title: 'Register', url: visitLink.link }]}
      />
      <section className="section-pad">
        <div className="container">
          <div className="row gap-8">
            <div className="col-span-12 lg:col-span-6">
              <Image
                className="w-full rounded-md"
                src={marketGatewayAbout}
                alt="Evehicle Show"
                width={600}
                height={600}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
              <h4 className=" text-sm md:text-xl lg:text-2xl">
                Join us at EVIS2024 Abu Dhabi Market Gateway, where we connect
                exhibitors with potential buyers and create business
                opportunities over three days of networking and collaboration.
                With a focus on the Middle East region, a leading force in the
                EV transition, we help you connect with investors, potential
                partners, and government officials from across the region. As
                countries invest in EV manufacturing facilities and public
                charging infrastructure, the adoption of EVs is accelerating,
                creating numerous business opportunities for companies and
                investors. Join over 200 companies from 50+ countries at
                EVIS2023 and be part of the EV revolution.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
