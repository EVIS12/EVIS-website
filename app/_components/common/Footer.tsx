import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { navLinks, socialLinks } from '@/app/_utils/info';
import { LeadingEvents, NirvanaMice } from '@/public/icons/SVGIcons';
import logoTitled from '@/public/imgs/evisLogo.webp';
import { DownloadableFile } from 'Files';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const revalidate = 180;

export default async function Footer() {
  const files = await axiosInterceptorInstance.get<DownloadableFile[]>(
    '/conference/contract-file/'
  );
  const date = new Date();
  return (
    <footer className="bg-[#E3F5F5] pt-8 md:pt-14 4xl:pt-20 px-5 md:px-10">
      <div className="container ">
        <div className="content grid grid-cols-12 gap-6 lg:gap-10">
          <div className="info-col col-span-7 lg:col-span-4 md:px-10">
            <Image
              className="w-10/12 md:mx-auto"
              src={logoTitled}
              alt="EVIS Logo"
            />
            <p className="my-4 md:my-6 text-sm md:text-base md:text-center text-body-gray">
              Join us in shaping the future of transportation and creating a
              greener, more connected world. Together, we drive change.
            </p>
            <div className="links flex items-center md:justify-center">
              {socialLinks.map(({ icon, url }, i) => (
                <a
                  className="social-link mx-2 md:mx-3 text-black"
                  href={url}
                  target="_blank"
                  key={i}
                  title="Social Media Link"
                >
                  {icon}
                </a>
              ))}
            </div>
            <div className="organizers flex mt-10 gap-2 md:gap-4 justify-center">
              <div className="nirvana">
                <p className="text-xs md:text-sm  text-dark-color mb-2">
                  Organized By
                </p>
                <a
                  className="logo bg-[#1E1E1E] rounded-lg p-1 block"
                  href="https://www.nirvanamice.com/"
                  target="_blank"
                >
                  <NirvanaMice className="w-14 lg:w-20" />
                </a>
              </div>
              <div className="leading">
                <p className="text-xs md:text-sm  text-dark-color mb-3">
                  Co-organized By
                </p>
                <div className="logo flex">
                  <LeadingEvents className="w-4 md:w-6" />{' '}
                  <p className="text-[#5A4C96] font-bold ml-1 text-xs sm:text-sm ">
                    Leading Events
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-3">
            <h3 className="footer-title">Quick Links</h3>
            <nav className="flex flex-col text-body-gray">
              {navLinks.map(({ title, link }, i) => (
                <Link
                  className="hover:text-main-color transition-all my-2 text-xs md:text-sm 4xl:text-lg"
                  href={link}
                  key={i}
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="col-span-7 lg:col-span-3">
            <h3 className="footer-title">Contact us</h3>
            <nav className="flex flex-col text-body-gray">
              {/* {contacts.map(
                ({ type, contact }, i) =>
                  contact && (
                    <Link
                      className="hover:text-main-color transition-all my-2 text-xs md:text-sm  4xl:text-lg"
                      href={`${type}${contact}`}
                      target="_blank"
                      key={i}
                    >
                      {/* {type === 'mailto:' ? (
                        <span className="text-base md:text-lg text-main-color mr-[3px] font-bold">
                          &#9993;
                        </span>
                      ) : (
                        <span className="text-base md:text-lg text-main-color mr-[3px] font-bold">
                          &#9743;
                        </span>
                      )} 
                      {contact}
                    </Link>
                  )
              )} */}
              <div className="my-2 text-xs md:text-sm flex flex-col 4xl:text-lg">
                <p className="text-dark-color  mb-2">General enquiry:</p>
                <ul className=" list-disc list-inside marker:text-main-color">
                  <li>
                    {' '}
                    <a
                      className="hover:text-main-color transition-all "
                      href="mailto:evis@nirvanamice.com"
                    >
                      evis@nirvanamice.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="my-2 text-xs md:text-sm flex flex-col 4xl:text-lg">
                <p className="text-dark-color  mb-2">
                  Exhibition & sponsorship:
                </p>
                <ul className=" list-disc list-inside marker:text-main-color">
                  <li>
                    {' '}
                    <a
                      className="hover:text-main-color transition-all "
                      href="mailto:fazilat.nisa@nirvanamice.com"
                    >
                      fazilat.nisa@nirvanamice.com
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      className="hover:text-main-color transition-all "
                      href="mailto:+971568513485"
                    >
                      +971 56 851 3485
                    </a>
                  </li>
                </ul>
              </div>
              <div className="my-2 text-xs md:text-sm flex flex-col 4xl:text-lg">
                <p className="text-dark-color  mb-2">Marketing & media:</p>
                <ul className=" list-disc list-inside marker:text-main-color">
                  <li>
                    {' '}
                    <a
                      className="hover:text-main-color transition-all "
                      href="mailto:evis.marketing@nirvanamice.com"
                    >
                      evis.marketing@nirvanamice.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="my-2 text-xs md:text-sm flex flex-col 4xl:text-lg">
                <p className="text-dark-color  mb-2">Operations:</p>
                <ul className=" list-disc list-inside marker:text-main-color">
                  <li>
                    {' '}
                    <a
                      className="hover:text-main-color transition-all "
                      href="mailto:evis.operations@nirvanamice.com"
                    >
                      evis.operations@nirvanamice.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="my-2 text-xs md:text-sm flex flex-col 4xl:text-lg">
                <p className="text-dark-color  mb-2">Telephone:</p>
                <ul className=" list-disc list-inside marker:text-main-color">
                  <li>
                    {' '}
                    <a
                      className="hover:text-main-color transition-all "
                      href="tel:+97123043333"
                    >
                      +971 2 304 3333
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-span-5 lg:col-span-2">
            <h3 className="footer-title">Downloads</h3>
            <nav className="flex flex-col text-body-gray">
              {files.data.map(({ type, id }) => (
                <Link
                  className="hover:text-main-color transition-all my-2 text-xs md:text-sm 4xl:text-lg flex"
                  href={`/download-files/?file=${id}`}
                  key={id}
                >
                  {type}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <p className="copyright mt-4 md:mt-10 py-4 md:py-5 text-sm text-[#7B8E8E] border-t-[0.5px] border-[#7B8E8E] text-center">
          Copyright © {date.getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
