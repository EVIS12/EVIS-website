import { BackBtn } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/public/icons/SVGIcons';
import { ExhibitorDetails, ExhibitorMainInfo } from 'Exhibitors';
import Image from 'next/image';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: Props) {
  const exhibitor = await axiosInterceptorInstance.get(
    `/exhibitor/exhibitors/${id}`
  );

  return {
    title: exhibitor.data.name,
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const { data: results } = await axiosInterceptorInstance.get<
    ExhibitorMainInfo[]
  >('/exhibitor/exhibitors/');

  return results.map(({ id }) => ({ id }));
}

export const revalidate = 180;

export default async function ExhibitorDetailsPage({ params: { id } }: Props) {
  const exhibitor = await axiosInterceptorInstance.get<ExhibitorDetails>(
    `/exhibitor/exhibitors/${id}`
  );

  return (
    <main>
      <div className="container">
        <div className="section-pad ">
          <div className=" flex items-center mb-8">
            <BackBtn />
            <h4 className="font-bold text-xl lg:text-3xl ml-4 mb-6">
              {exhibitor.data.name}
            </h4>
          </div>
          <div className="row gap-y-8 lg:gap-8">
            <div className="col-span-12 lg:col-span-3">
              <Image
                className="w-full h-[200px] md:h-[280px] 4xl:h-[300px] object-contain 4xl:mb-6"
                src={exhibitor.data.logo ?? ''}
                alt={`${exhibitor.data.name} Logo`}
                width={400}
                height={400}
              />
              <p className="py-3 px-5 mt-12 md:text-lg text-center border-2 gradient-border rounded-xl">
                <span className="font-medium">
                  {!Number.isNaN(+exhibitor.data.standNumber) &&
                    'Stand Number : '}
                </span>
                {exhibitor.data.standNumber}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="content bg-white rounded-lg border-2 gradient-border p-5">
                <p className="sub-section-content">
                  {exhibitor.data.description}
                </p>
                <p className="my-4 text-sm md:text-base 4xl:text-xl">
                  <span className=" font-medium">Address</span> :{' '}
                  {exhibitor.data.address}{' '}
                </p>
                <a
                  href={exhibitor.data.website}
                  className="my-4 text-sm md:text-base 4xl:text-xl block w-fit"
                  target="_blank"
                >
                  <span className=" font-medium">Website</span> :{' '}
                  {exhibitor.data.website}{' '}
                </a>
                <a
                  href={exhibitor.data.exhibitor_url}
                  className="my-4 text-sm md:text-base 4xl:text-xl block w-fit"
                  target="_blank"
                >
                  <span className=" font-medium">More Details:</span> :{' '}
                  {exhibitor.data.exhibitor_url}{' '}
                </a>
                <p className="my-4 text-sm md:text-base 4xl:text-xl">
                  <span className=" font-medium">Country</span> :{' '}
                  {exhibitor.data.country}{' '}
                </p>
              </div>
              <div className="social-links flex mt-10">
                {[
                  {
                    icon: <FacebookIcon className="[&>path]:fill-[#1877F2]" />,
                    url: exhibitor.data.facebook,
                    title: 'Facebook Link',
                  },
                  {
                    icon: <TwitterIcon className="[&>g>path]:fill-[#55ACEE]" />,
                    url: exhibitor.data.twitter,
                    title: 'Twitter Link',
                  },
                  {
                    icon: (
                      <InstagramIcon className="[&>g>path]:fill-[#C13584]" />
                    ),
                    url: exhibitor.data.instagram,
                    title: 'instagram Link',
                  },
                  {
                    icon: <LinkedInIcon />,
                    url: exhibitor.data.linkedin,
                    title: 'Linkedin Link',
                  },
                ].map(
                  ({ icon, url, title }, i) =>
                    url && (
                      <a
                        className="mx-2"
                        href={url}
                        title={title}
                        target="_blank"
                        key={i}
                      >
                        {icon}
                      </a>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
