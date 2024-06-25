import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/public/icons/SVGIcons';
import { SpeakerDetails } from 'Speakers';
import Image from 'next/image';
import React from 'react';

export default function SpeakerDetailsBox({
  speaker,
}: {
  speaker: SpeakerDetails;
}) {
  return (
    <div className="row gap-y-4 md:gap-y-8 lg:gap-8 bg-white rounded-lg border-2 border-[#ACACAC] p-5">
      <div className="col-span-12 lg:col-span-3">
        <Image
          className="w-2/5 md:w-1/2 lg:w-2/3 mx-auto mb-6 aspect-square object-cover 4xl:mb-6 rounded-full"
          src={speaker.photo}
          alt={`${speaker.name} Image`}
          width={250}
          height={250}
        />
        <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-bold text-[#292929]">
          {speaker.name}
        </h3>
        <p className="mt-2 md:text-lg font-medium text-center text-[#888888]">
          {speaker.job_title}
        </p>
      </div>
      <div className="col-span-12 lg:col-span-9">
        <div className="content ">
          <p className="sub-section-content text-sm md:text-base">
            {speaker.description}
          </p>
          {speaker.year && (
            <p className="my-4 text-sm md:text-base 4xl:text-xl">
              <span className=" font-medium">Year</span> : {speaker.year}
            </p>
          )}
          <p className="my-4 text-sm md:text-base 4xl:text-xl">
            <span className=" font-medium">Company</span> : {speaker.company}
          </p>
          {speaker.country && (
            <p className="my-4 text-sm md:text-base 4xl:text-xl">
              <span className=" font-medium">Country</span> : {speaker.country}
            </p>
          )}
        </div>
        <div className="social-links flex mt-10">
          {[
            {
              icon: <FacebookIcon className="[&>path]:fill-[#1877F2]" />,
              url: speaker.facebook,
              title: 'Facebook Link',
            },
            {
              icon: <TwitterIcon className="[&>g>path]:fill-[#55ACEE]" />,
              url: speaker.twitter,
              title: 'Twitter Link',
            },
            {
              icon: <LinkedInIcon />,
              url: speaker.linkedin,
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
  );
}
