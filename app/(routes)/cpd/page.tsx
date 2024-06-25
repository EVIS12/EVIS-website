import { FAQsAccordion, PagesHero } from '@/app/_components';
import Image from 'next/image';
import cpdLogo from '@/public/imgs/cpdLogo.webp';
import { cpdSignificances } from '@/app/_utils/info';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { FAQ } from 'CPD';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPD Accreditation',
};

export const revalidate = 180;

export default async function CPD() {
  const FAQs = await axiosInterceptorInstance.get<FAQ[]>('/cpd/');

  return (
    <main>
      <PagesHero
        title="CPD Accreditation"
        description="Continuing Professional Development (CPD) is a structured approach to lifelong learning, enabling professionals to enhance their skills and knowledge throughout their careers."
        bg="bg-cpd-bg"
      />

      <section className="bg-main-gradient py-6 md:py-10">
        <div className="container">
          <Image
            className="w-32 md:w-44 lg:w-52 2xl:w-56 mx-auto"
            src={cpdLogo}
            alt="CPD Member Logo"
          />
        </div>{' '}
      </section>

      {/* Start significance Section */}
      <section className="section-pad" id="cpd-significance">
        <div className="container">
          <h2 className="title mb-8 md:mb-16">
            Significance of CPD Accreditation
          </h2>
          <div className="row pt-6 md:pt-0 gap-y-12 md:gap-12">
            {cpdSignificances.map(({ icon, content }, i) => (
              <div
                className="col-span-12 md:col-span-6 bg-white p-4 md:p-8 rounded-md"
                key={i}
              >
                <div className="image-container w-fit mx-auto -mt-10 md:-mt-14 p-3 rounded-full bg-[#F3F9FB] drop-shadow-lg">
                  <Image
                    className="w-8 md:w-10 aspect-square object-contain"
                    src={icon}
                    alt="Significance Icon"
                  />
                </div>
                <p className="sub-section-content text-center mt-4">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End significance Section */}

      <FAQsAccordion FAQs={FAQs.data} />
    </main>
  );
}
