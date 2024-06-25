import { PagesHero } from '@/app/_components';
import Image from 'next/image';
import React from 'react';
import openTechAbout from '@/public/imgs/openTechAbout.webp';
import Link from 'next/link';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { RegisterLink } from 'Links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Networking',
};

export const revalidate = 180;

export default async function NetworkingReception() {
  const registerLinks = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links/'
  );
  const [visitLink] = registerLinks?.data.filter(
    (item) => item.type === 'visitor'
  );

  return (
    <main>
      <PagesHero
        title="Networking"
        description="Steer the Discourse: Share Your Insights at EVIS 2024's Open Tech Session"
        bg="bg-openTech-bg"
        buttons={[{ title: 'Register', url: visitLink.link }]}
      />
      <section className="section-pad">
        <div className="container">
          <div className="row gap-8">
            <div className="col-span-12 lg:col-span-6">
              <Image
                className="w-full rounded-md"
                src={openTechAbout}
                alt="Evehicle Show"
                width={600}
                height={600}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
              <h4 className=" text-sm md:text-lg lg:text-xl">
                Our Networking Reception serves as the culmination of three days
                of profound discourse at the Electric Vehicle Innovation Summit.
                This event isn&rsquo;t just another gathering; it&rsquo;s a hub
                for forging connections, fostering innovation, and cultivating
                partnerships. Join us for an evening of meaningful exchanges,
                where industry leaders, innovators, and enthusiasts come
                together to celebrate the advancements in e-mobility and pave
                the way for a sustainable future.
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
