import { PagesHero } from '@/app/_components';
import Image from 'next/image';
import React from 'react';
import techParkAbout from '@/public/imgs/techParkAbout.webp';
import Link from 'next/link';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { RegisterLink } from 'Links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Park',
};

export const revalidate = 180;

export default async function TechPark() {
  const registerLinks = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links/'
  );
  const [visitLink] = registerLinks?.data.filter(
    (item) => item.type === 'visitor'
  );

  return (
    <main>
      <PagesHero
        title="Tech Park: The Future of Mobility"
        description="Discover an ecosystem of innovation, merging today's tech with sustainable solutions."
        bg="bg-techPark-bg"
        buttons={[{ title: 'Register', url: visitLink.link }]}
      />
      <section className="section-pad">
        <div className="container">
          <div className="row gap-8">
            <div className="col-span-12 lg:col-span-6">
              <Image
                className="w-full rounded-md h-[300px] md:h-[450px] object-cover"
                src={techParkAbout}
                alt="Evehicle Show"
                width={600}
                height={600}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
              <h4 className=" text-sm md:text-lg lg:text-xl">
                Welcome to the heart of innovation at EVIS 2024 – the Tech Park.
                This immersive experience is your gateway to the future of
                sustainable transportation. Get ready to witness cutting-edge
                electric and solar vehicles, groundbreaking e-mobility projects,
                and visionary initiatives, all showcased to a global audience.
                The Tech Park proudly features innovative startups, adding
                another layer of excitement to your journey. Plus, discover
                pioneering work by local and regional universities, making this
                a truly comprehensive showcase of sustainable transportation
                innovations. Join us and be part of the revolution in
                sustainable transportation.
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
