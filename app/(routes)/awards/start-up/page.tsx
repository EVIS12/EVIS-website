import { PagesHero } from '@/app/_components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EVIS Start-Up Award',
};

export default function StartUp() {
  return (
    <main>
      <main>
        <PagesHero
          bg="bg-visit-bg"
          title="Powering Startups, Sparking Tomorrow"
          description="Fueling the next generation of e-mobility innovators."
          buttons={[
            {
              title: 'Download Entry Form',
              url: 'https://www.evinnovationsummit.com/download-files?file=d829a458-02f0-449b-b707-7b078a0dee1c',
            },
          ]}
        />

        <section className="section-pad bg-second-color">
          <div className="container">
            <h2 className="title">
              Submission <span>Eligibility</span>
            </h2>
            <h3 className="font-semibold md:text-xl lg:text-2xl mt-10 text-dark-color">
              To be eligible for The EVIS Startup Award, startups must meet the
              following criteria:
            </h3>
            <ul className="list-disc text-dark-color pl-4 font-medium mt-4 md:mt-8">
              {[
                '<b>Age of Startup:</b> The startup must have been in operation for a minimum of 1 year and a maximum of 5 years as of the application deadline.',
                '<b>Stage of Development:</b> Startups in the ideation, conception, creation, or prototype stages are not eligible to apply for the awards. Applicants should have a tangible presence in the market.',
                '<b>Business Registration:</b> The startup must be a registered business entity with proof of registration. The legal existence of the startup should not exceed five years from the date of registration.',
                '<b>E-Mobility Focus:</b> The entity must operate in the e-mobility sector, contributing to the advancement and innovation within this specific industry.',
                '<b>Important Note: The deadline for submissions is 10 May 2024.</b>',
              ].map((item, i) => (
                <li
                  className="marker:text-main-color mt-2 text-sm md:text-base lg:text-xl"
                  dangerouslySetInnerHTML={{ __html: item }}
                  key={i}
                />
              ))}
            </ul>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <h2 className="title mb-4">Submission Criteria</h2>

            <h3 className="font-semibold md:text-xl lg:text-2xl mt-10 text-dark-color">
              To apply for The EVIS Startup Award, please ensure that your
              submission includes the following:
            </h3>
            <ul className="list-disc text-dark-color pl-4 font-medium mt-4 md:mt-8">
              {[
                '<b>Application Form:</b> Complete the application form included in the awards information pack. This form is crucial for your entry and must be submitted along with the other required materials. You can download the information pack <a class="text-main-color underline" href="/download-files?file=d829a458-02f0-449b-b707-7b078a0dee1c" target="_blank">here.</a>',
                '<b>Pitch Deck:</b> Prepare a pitch deck of no more than 20 slides. The pitch deck should provide a comprehensive overview of your startup, highlighting its innovative solutions, achievements, and impact within the e-mobility sector.',
                "<b>Supporting Documents:</b> Include any relevant documents, MOUs (Memorandums of Understanding), or agreements that showcase the uniqueness and impact of your startup. These documents should emphasize your startup's contributions and collaborations within the industry.",
                "<b>60-Second Video:</b> Create a 60-second video that encapsulates the essence of your startup's journey, innovation, and impact in the e-mobility sector. Use this video as an opportunity to make your application stand out.",
                '<b>Application fee:</b> A USD 300 entry fee is required with your submission. (Note:This entry fee is waived for exhibiting companies) Upon receiving your submission, you will be sent a payment link for the entry fee. Please ensure timely payment to complete your application process.',
                '<b>Important Note: The deadline for submissions is 10 May 2024.</b>',
              ].map((item, i) => (
                <li
                  className="marker:text-main-color mt-2 text-sm md:text-base lg:text-xl"
                  key={i}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </main>
  );
}
