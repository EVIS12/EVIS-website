import React from 'react';
import Image from 'next/image';
import { PagesHero } from '@/app/_components';
import testDriveAbout from '@/public/imgs/testDriveAbout.webp';
import Link from 'next/link';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { RegisterLink } from 'Links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EV Test Drive',
};

export const revalidate = 180;

export default async function TestDrive() {
  const registerLinks = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links/'
  );
  const [visitLink] = registerLinks?.data.filter(
    (item) => item.type === 'visitor'
  );

  return (
    <main>
      <PagesHero
        title="Test Drive the Future of Mobility"
        bg="bg-testDrive-bg"
        buttons={[{ title: 'Register', url: visitLink.link }]}
      />
      <section className="section-pad">
        <div className="container">
          <div className="row gap-8">
            <div className="col-span-12 lg:col-span-6">
              <Image
                className="w-full rounded-md"
                src={testDriveAbout}
                alt="Evehicle Show"
                width={600}
                height={600}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
              <h4 className=" text-sm md:text-lg lg:text-xl">
                Discover the Future of Mobility at EVIS! As a part of our
                unwavering dedication to showcasing the latest advancements in
                sustainable transportation, we are pleased to offer exclusive
                test drive opportunities for select electric vehicles. Immerse
                yourself in the world of electric mobility as you experience the
                unparalleled performance, efficiency, and eco-friendly features
                of these cutting-edge vehicles in a hands-on, no-pressure
                environment. It&apos;s a unique opportunity to explore the
                excitement of driving the future of transportation firsthand.
                Join us at EVIS 2023 and elevate your understanding of electric
                mobility with an unforgettable test drive experience.
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
