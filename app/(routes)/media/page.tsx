import React from 'react';
import { BlogSection, PagesHero, RegisterSection } from '@/app/_components';
import Image from 'next/image';
import pressCenterRegister from '@/public/imgs/pressCenter.webp';
import Link from 'next/link';
import { AdaptiveCards } from '../providers';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import {
  ArticleMaininfo,
  NewsMainInfo,
  TestimonialMainInfo,
} from 'PressCenter';
import { RegisterLink } from 'Links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EVIS Media',
};

export const revalidate = 180;

export default async function Media() {
  const pressBlog = await axiosInterceptorInstance.get<ArticleMaininfo[]>(
    '/blog/blog-press'
  );
  const pressNews = await axiosInterceptorInstance.get<NewsMainInfo[]>(
    '/blog/news-press/'
  );
  const pressTestimonials = await axiosInterceptorInstance.get<
    TestimonialMainInfo[]
  >('blog/testimonials-press');

  const registerLinks = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links/'
  );
  const [mediaLink] = registerLinks?.data.filter(
    (item) => item.type === 'media'
  );

  return (
    <main>
      <PagesHero
        bg="bg-press-bg"
        title="EVIS Media Hub"
        description="Stay charged with the latest! Access news, assets, and electrify your coverage."
      />
      <BlogSection
        className="bg-second-color"
        subtitle="Stay on top of all things EVIS with our latest announcements, speaker reveals, and event highlights."
        articles={pressBlog?.data}
      />
      <section className="section-pad news" id="news">
        <div className="container">
          <h2 className="title">
            <span>EVIS</span> News
          </h2>
          <p className="subtitle">
            Stay on top of all things EVIS with our latest announcements,
            speaker reveals, and event highlights.
          </p>

          <AdaptiveCards className="mt-14 flex-col md:w-10/12 2xl:w-7/12 4xl:9/12 mx-auto">
            {pressNews.data
              .slice(0, 4)
              ?.map(({ link, title, body, photo }, i) => (
                <a
                  className={`news w-full bg-white shadow-md drop-shadow-lg rounded-lg overflow-hidden flex items-center flex-col-reverse ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  href={link}
                  target="_blank"
                  key={i}
                >
                  <div className="content text-body-gray  w-full md:w-7/12 2xl:w-8/12 p-4 md:p-6">
                    <h3 className=" font-bold md:text-xl 4xl:text-2xl mb-2 md:mb-4">
                      {title}
                    </h3>
                    <p className="text-sm md:text-base 4xl:text-xl">{body}</p>
                  </div>
                  <Image
                    className="w-full object-cover h-[200px] md:h-[300px] 2xl:h-[220px] md:w-5/12 2xl:w-4/12 bg-white"
                    src={photo ?? pressCenterRegister}
                    alt="Conference Register"
                    width={200}
                    height={200}
                  />
                </a>
              ))}
          </AdaptiveCards>
          <Link className="white-btn mt-10" href={'/media/news'}>
            Show more
          </Link>
        </div>
      </section>

      <section
        className="section-pad testimonials bg-second-color"
        id="testimonials"
      >
        <div className="container">
          <h2 className="title !mb-2">
            Voices of <span>EVIS</span>
          </h2>
          <p className="subtitle">
            What industry professionals and attendees are saying about their
            EVIS experience.
          </p>

          <AdaptiveCards className="!gap-0 md:!mt-6 lg:!mt-24">
            {[
              {
                className: 'lg:left-8',
                info: pressTestimonials.data?.[0] ?? {
                  photo: '',
                  name: '',
                  company: '',
                  id: '',
                },
              },
              {
                className: 'lg:-translate-y-1/3 z-[3]',
                info: pressTestimonials.data?.[1] ?? {
                  photo: '',
                  name: '',
                  company: '',
                  id: '',
                },
              },
              {
                className: 'lg:-left-8',
                info: pressTestimonials.data?.[2] ?? {
                  photo: '',
                  name: '',
                  company: '',
                  id: '',
                },
              },
            ]?.map(
              ({ className, info: { photo, name, company, id } }) =>
                id && (
                  <div
                    className={`bg-white flex flex-col items-center relative ${className} w-full md:w-5/12 lg:w-1/3 rounded-lg shadow-xl drop-shadow-lg border-main-color border-2 px-5 py-10 4xl:px-10 4xl:py-14 my-10`}
                    key={id}
                  >
                    <h2 className="font-bold text-center text-xl md:text-3xl 4xl:text-4xl  mb-4 md:mb-6 4xl:mb-8">
                      {name}
                    </h2>

                    <p className=" text-center text-sm md:text-lg 4xl:text-xl text-body-gray mb-4 md:mb-6 4xl:mb-8">
                      {company}
                    </p>
                    <Image
                      className={`absolute -bottom-10 md:-bottom-14 4xl:-bottom-16 w-20 h-20 md:w-28 md:h-28 4xl:w-32 4xl:h-32 object-cover rounded-full`}
                      width={200}
                      height={200}
                      src={photo ?? ''}
                      alt={`${name} image`}
                    />
                  </div>
                )
            )}
          </AdaptiveCards>

          <Link href={'/testimonials'} className="green-btn mt-8 md:mt-16">
            View more
          </Link>
        </div>
      </section>
      <RegisterSection
        image={pressCenterRegister}
        title="Join the Circuit: Media Registration"
        description="Ready to amplify the electric revolution? Register for exclusive access, event updates, and priority assets."
        btn={{
          title: 'Register',
          url: mediaLink.link,
        }}
      />
      <section className="section-pad bg-second-color">
        <h2 className="title">
          Need <span>More</span>?
        </h2>
        <p className="subtitle">
          For in-depth inquiries or collaboration opportunities, we&#39;re here
          to assist.
        </p>
        <a
          className="green-btn mt-8"
          href="mailto:evis.marketing@nirvanamice.com"
          target="_blank"
        >
          Register
        </a>
      </section>
    </main>
  );
}
