import {
  ExhibitorsSlider,
  MainActivities,
  PagesHero,
  RegisterSection,
} from '@/app/_components';
import React from 'react';
import ExhibitImage from '../../../public/imgs/exhibitor.webp';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { whyExhibit } from '@/app/_utils/info';
import Evehicle from '@/public/icons/e-vehicle.webp';
import techPark from '@/public/icons/tech-park.webp';
import testDrive from '@/public/icons/test-drive.webp';
import gateway from '@/public/icons/marketGateway.webp';
import { DownloadableFile } from 'Files';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exhibition',
};

export const revalidate = 180;

export default async function Exhibitor() {
  const files = await axiosInterceptorInstance.get<DownloadableFile[]>(
    '/conference/contract-file/'
  );

  const [sponsorshipFile] = files?.data.filter(
    (item) => item.type === 'Sponsorship Contract'
  );

  const [event_brochure] = files?.data.filter(
    (item) => item.type === 'Event Brochure'
  );

  return (
    <main>
      <PagesHero
        bg="bg-exhibitor-bg"
        title="Drive Your Business Forward"
        description="Elevate your brand, connect and shape sustainable transport."
        buttons={[
          {
            title: 'Download Event Brochure',
            url: `/download-files/?file=${event_brochure.id}`,
          },
        ]}
      />

      <section className="section-pad" id="showcase-your-vision">
        <div className="container">
          <h2 className="title !text-start mb-4 md:mb-8">
            Showcase Your <span className="text-main-color">Vision</span>, Shape
            the EV Future
          </h2>
          <p className="sub-section-content ">
            Welcome to the EV Innovation Summit, a focal point for electric
            vehicle advancements. The exhibition serves as a neutral ground
            where developments in sustainable transport are not just displayed,
            but also discussed and analyzed.
          </p>
          <ul className="row list-disc list-outside px-5 mt-6 md:mt-10 ">
            {whyExhibit.map((item, i) => (
              <li
                className="col-span-12 md:col-span-6 marker:text-main-color my-2"
                key={i}
              >
                <h4 className=" text-dark-color font-semibold text-sm md:text-base lg:text-xl">
                  {item}
                </h4>
              </li>
            ))}
          </ul>{' '}
          <p className="sub-section-content  my-6">
            By showcasing at the summit, you&apos;ll be aligning with a movement
            that values progress and sustainability in the transport sector.
            It&apos;s an opportunity to share your expertise, innovations, and
            vision with a like-minded audience.
          </p>
          <a
            className="gradient-btn"
            href={`/download-files/?file=${sponsorshipFile.id}`}
          >
            Explore Exhibition Opportunities
          </a>
        </div>
      </section>
      <MainActivities
        leftActivities={[
          {
            name: 'Market Gateway',
            icon: gateway,
            link: '/activities/gateway',
            actDescription:
              'Your launchpad to showcase and discover the latest in EV tech.',
          },
          {
            name: 'EV Test Drive',
            icon: testDrive,
            link: '/activities/test-drive',
            actDescription:
              'Experience firsthand the innovations that are driving the future.',
          },
        ]}
        rightActivities={[
          {
            name: 'Tech Park',
            icon: techPark,
            link: '/activities/tech-park',
            actDescription:
              'Explore breakthroughs and get hands-on with cuttingedge technology.',
          },

          {
            name: 'E-Vehicle Show',
            icon: Evehicle,
            link: '/activities/e-vehicle-show',
            actDescription:
              'Witness the finest electric vehicles, from concepts to market leaders.',
          },
        ]}
        mainAddress={{
          title: 'Opportunities at EVIS',
          description:
            'Emerge as an industry leader. Engage with peers, display your innovations, and influence the EV landscape over three power-packed days.',
        }}
      />
      <section className="versions section-pad bg-white" id="our-exhibitors">
        <div className="container mx-auto">
          <h2 className="title mb-2 md:mb-8 lg:mb-4 4xl:mb-20">
            <span>2024</span> Exhibitors
          </h2>

          <ExhibitorsSlider />
          <a
            className="white-btn text-center"
            href={`https://onlineexhibitormanual.net/EVIS2024/exhi/exhibitorlist.aspx`}
            target="_blank"
          >
            Show more
          </a>
        </div>
      </section>
      <RegisterSection
        image={ExhibitImage}
        title="Reserve Your Spot"
        description="Position your brand at the epicenter of electric innovation. By exhibiting at EVIS 2024, you're not just booking a stand — you're securing a strategic advantage. Become a part of this transformative event and pave your way to the future of sustainable mobility."
        btn={{
          title: 'Register',
          url: `/register-form`,
        }}
      />
      <section className="section-pad !pt-4" id="exhibitor-zone">
        <div className="container mx-auto">
          <h2 className="title mb-6">
            EVIS <span className="text-main-color">Exhibitor</span> Zone
          </h2>

          <a
            className="white-btn"
            href={
              'https://onlineexhibitormanual.net/evis2024/ExhibitorLoginZone.aspx'
            }
            target="_blank"
          >
            Login
          </a>
        </div>
      </section>
    </main>
  );
}
