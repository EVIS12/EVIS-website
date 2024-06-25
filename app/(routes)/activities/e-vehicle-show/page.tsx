import { PagesHero } from '@/app/_components';
import Image from 'next/image';
import React from 'react';
import evehicleShowHeroAbout from '@/public/imgs/evehicleShowHeroAbout.webp';
import Link from 'next/link';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { RegisterLink } from 'Links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Vehicle Show',
};

export const revalidate = 180;

export default async function EvehicleShow() {
  const registerLinks = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links/'
  );
  const [visitLink] = registerLinks?.data.filter(
    (item) => item.type === 'visitor'
  );
  return (
    <main>
      <PagesHero
        title="Explore the Future of Sustainable Transportation"
        bg="bg-evehicleShow-bg"
        buttons={[{ title: 'Register', url: visitLink.link }]}
      />
      <section className="section-pad">
        <div className="container">
          <div className="row gap-8">
            <div className="col-span-12 lg:col-span-6">
              <Image
                className="w-full rounded-md"
                src={evehicleShowHeroAbout}
                alt="Evehicle Show"
                width={600}
                height={600}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
              <h4 className=" text-sm md:text-lg lg:text-2xl">
                Welcome to the E-Vehicle Show @ EVIS, where the future of
                sustainable transportation unfolds. Explore a dazzling array of
                the newest e-vehicle models from leading brands. Avail of
                exclusive event-only offers and experience the power of electric
                vehicles. Dive into the technology driving e-mobility&apos;s
                future and engage with industry experts in thought-provoking
                discussions.
              </h4>
              <div className="btns flex justify-center lg:justify-start gap-4 mt-6">
                <Link href={visitLink.link} className="gradient-btn">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
