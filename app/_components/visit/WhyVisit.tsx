import React from 'react';
import Image from 'next/image';
import evehicleShowcase from '@/public/imgs/evehicleShowcase.webp';
import techParkInnovation from '@/public/imgs/techParkInnovation.webp';
import evTestDrive from '@/public/imgs/evTestDrive.webp';
import opentech from '@/public/imgs/openTech.webp';
import Link from 'next/link';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { RegisterLink } from 'Links';

export const revalidate = 180;

export default async function WhyVisit() {
  const registerLinks = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links/'
  );
  const [visitLink] = registerLinks?.data.filter(
    (item) => item.type === 'visitor'
  );

  return (
    <section className="section-pad" id="why-visit">
      <div className="container">
        <h2 className="title">
          Why Visit <span>EVIS</span>?
        </h2>
        <p className="subtitle">
          Experience the forefront of the electric vehicle revolution. Dive into
          a world where innovation meets experience. Whether you&apos;re a
          business leader, an EV enthusiast, or simply curious, EVIS promises
          insights, connections, and firsthand experiences that are unparalleled
          in the industry.
        </p>
        <div className="content">
          {/* Step-1 */}
          <div className="step my-12 md:my-20 lg:my-24 flex flex-col lg:flex-row">
            <Image
              className="w-full lg:w-1/3 h-[220px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
              src={evehicleShowcase}
              alt="E-car"
              width={500}
              height={500}
            />
            <div className="content w-5/6 mx-auto lg:w-2/3 flex flex-col justify-center">
              <h3 className="title !text-3xl !text-start ml-8 mb-8 hidden lg:block">
                E-Vehicle Showcase
              </h3>
              <div className="bg-[#CFF0F0] p-5 md:p-10 ">
                <h3 className="sub-section-title !text-lg md:!text-3xl mb-3 lg:hidden">
                  E-Vehicle Showcase
                </h3>
                <p className="text-body-gray text-sm md:text-lg lg:text-xl leading-normal">
                  Dive into the realm of cutting-edge transportation. Witness
                  the marvels of tomorrow, today! Explore an array of latest
                  e-vehicle models, futuristic prototypes, and get a firsthand
                  look at the innovative technologies propelling the electric
                  mobility revolution. Discover the future of transport, now on
                  display.
                </p>
              </div>
            </div>
          </div>{' '}
          {/* Step-2 */}
          <h3 className="title !text-3xl !text-start -mb-16 hidden lg:block">
            Innovation at The Tech Park
          </h3>
          <div className="step flex items-center flex-col lg:flex-row-reverse">
            <Image
              className="w-full lg:w-5/12 relative lg:-left-6 h-[250px] md:h-[450px] lg:h-[400px] object-cover rounded-lg"
              src={techParkInnovation}
              alt="Passport with bag"
              width={500}
              height={500}
            />
            <div className="content w-5/6 mx-auto lg:w-7/12">
              <div className="bg-[#CFF0F0] p-5 md:p-10 ">
                <h3 className="sub-section-title !text-lg md:!text-3xl mb-3 lg:hidden">
                  Innovation at The Tech Park
                </h3>
                <p className="text-body-gray text-sm md:text-lg lg:text-xl leading-normal">
                  Explore a space dedicated to ingenuity. Here, pioneering
                  start-ups and insightful student minds present their
                  innovations, offering a comprehensive view of the ongoing
                  developments in the electric vehicle sector. Observe various
                  projects and prototypes that aim to contribute to the evolving
                  world of sustainable mobility.
                </p>
              </div>
            </div>
          </div>
          {/* Step-3 */}
          <div className="step my-12 md:my-20 lg:my-24 flex flex-col lg:flex-row">
            <Image
              className="w-full lg:w-1/3 h-[220px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
              src={evTestDrive}
              alt="E-car"
              width={500}
              height={500}
            />
            <div className="content w-5/6 mx-auto lg:w-2/3 flex flex-col justify-center">
              <h3 className="title !text-3xl !text-start ml-8 mb-8 hidden lg:block">
                EV Test Drive
              </h3>
              <div className="bg-[#CFF0F0] p-5 md:p-10 ">
                <h3 className="sub-section-title !text-lg md:!text-3xl mb-3 lg:hidden">
                  EV Test Drive
                </h3>
                <p className="text-body-gray text-sm md:text-lg lg:text-xl leading-normal">
                  Engage in a hands-on driving experience with cutting-edge
                  electric vehicles. Familiarize yourself with the advancements
                  in EV technology by taking a test drive, providing a closer
                  understanding of the nuances and capabilities these vehicles
                  bring to the road.
                </p>
              </div>
            </div>
          </div>{' '}
          {/* Step-4 */}
          <h3 className="title !text-3xl !text-start -mb-16 hidden lg:block">
            Networking
          </h3>
          <div className="step flex items-center flex-col lg:flex-row-reverse">
            <Image
              className="w-full lg:w-5/12 relative lg:-left-6 h-[250px] md:h-[450px] lg:h-[400px] object-cover rounded-lg"
              src={opentech}
              alt="Passport with bag"
              width={500}
              height={500}
            />
            <div className="content w-5/6 mx-auto lg:w-7/12">
              <div className="bg-[#CFF0F0] p-5 md:p-10 ">
                <h3 className="sub-section-title !text-lg md:!text-3xl mb-3 lg:hidden">
                  Networking
                </h3>
                <p className="text-body-gray text-sm md:text-lg lg:text-xl leading-normal">
                  Engage with industry specialists and glean insights into the
                  nuances of EV technology. Our Networking Reception provides a
                  platform for meaningful connections, ensuring you depart EVIS
                  with a holistic grasp of the newest trends and advancements in
                  the field.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="green-btn mx-auto mt-8 sm:mt-10 md:mt-16"
          href={visitLink.link}
        >
          Register
        </Link>
      </div>
    </section>
  );
}
