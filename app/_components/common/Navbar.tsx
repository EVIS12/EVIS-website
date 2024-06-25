'use client';

import whiteLogo from '@/public/imgs/evisLogoWhite.webp';
import titledLogo from '@/public/imgs/evisLogo.webp';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { navMenus } from '../../_utils/info';
import MOEILogo from '@/public/imgs/MOEILogo.webp';
import Image from 'next/image';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import axios from 'axios';

const pagesWithTransparentNav = [
  '/',
  '/exhibition',
  '/activities/gateway',
  '/activities/e-vehicle-show',
  '/activities/tech-park',
  '/activities/test-drive',
  '/activities/networking-reception',
  '/visit',
  '/plan-visit',
  '/conference',
  '/media',
  '/testimonials',
  '/awards',
  '/awards/students',
  '/awards/start-up',
  '/sponsors-partners',
  '/cpd',
];

export default function Navbar() {
  //navbar bg state
  const [active, setActive] = useState<boolean>(true);
  //mobile nav state
  const [navExpanded, setNavExpanded] = useState(false);
  const params = useSearchParams();
  const pathname = usePathname();
  let navbarMenusRefs = useRef<HTMLElement[]>([]);

  //change bg on scroll
  useEffect(() => {
    if (pagesWithTransparentNav.includes(pathname)) {
      setActive(false);
      window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setActive(true) : setActive(false);
      });
    } else {
      setActive(true);
      window.addEventListener('scroll', () => {
        setActive(true);
      });
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavExpanded(false);
  }, [pathname]);

  useEffect(() => {
    navbarMenusRefs.current.map((item) => {
      if (item.children[1].classList.contains('flex')) {
        item.children[1].classList.remove('flex');
        item.children[1].classList.add('hidden');
      }
    });
  }, [pathname]);

  const handleMenuOpen = ({ index }: { index: number }) => {
    const selectedMenu = navbarMenusRefs.current?.[index].children[1];
    navbarMenusRefs.current.map((item) => {
      if (item.children[1].classList.contains('flex')) {
        item.children[1].classList.remove('flex');
        item.children[1].classList.add('hidden');
      }
    });

    //open targeted menu
    selectedMenu.classList.remove('hidden');
    selectedMenu.classList.add('flex');
  };

  const handleMenuClose = ({ index }: { index: number }) => {
    const selectedMenu = navbarMenusRefs.current?.[index].children[1];

    selectedMenu.classList.remove('flex');
    selectedMenu.classList.add('hidden');
  };

  //Solution to be able to get scroll to a section in url
  useEffect(() => {
    if (params.get('section')) {
      document
        .getElementById(params.get('section') as string)
        ?.scrollIntoView();
    }
  }, [params]);

  // Get the locaton of the user
  const getLocation = async () => {
    try {
      const ipResp = await axios.get('https://api.ipify.org?format=json');
      const geoResp = await axios.get(
        `https://ipinfo.io/${ipResp.data.ip}?token=${process.env.NEXT_PUBLIC_API_LOCATION_TOKEN}`
      );
      const res = await axiosInterceptorInstance.post('/analysis/region/', {
        code: geoResp.data.country,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 flex bg-transparent transition ${
        navExpanded
          ? 'bg-white'
          : active
          ? 'bg-white shadow-sm drop-shadow-md'
          : 'bg-transparent'
      } py-2 px-5`}
    >
      <div className="w-full flex flex-col lg:flex-row lg:items-center mx-auto px-3 md:px-5">
        <div className="heade-content flex justify-between items-center">
          <Link href={'/'} title="Home Link">
            {navExpanded ? (
              <Image
                className="w-28 md:w-36 lg:w-48 md:mx-auto"
                src={titledLogo}
                alt="EVIS logo"
              />
            ) : active ? (
              <Image
                className="w-28 md:w-36 lg:w-48 md:mx-auto"
                src={titledLogo}
                alt="EVIS logo"
              />
            ) : (
              <Image
                className="w-28 md:w-36 lg:w-48 md:mx-auto"
                src={whiteLogo}
                alt="EVIS logo"
              />
            )}
          </Link>
          <button
            className="nav-toggle outline-none lg:hidden"
            onClick={() => setNavExpanded(!navExpanded)}
            title="Toggle Btn"
          >
            <div className="toggle-icon w-5 h-5 flex flex-col justify-between relative">
              {[
                `${navExpanded && 'rotate-45'}`,
                `${navExpanded && 'hidden'}`,
                `${navExpanded && '-rotate-45'}`,
              ].map((item, i) => (
                <span
                  className={`bar-${
                    i + 1
                  } w-full h-[3px] bg-main-color rounded-full transition duration-300 ${
                    navExpanded && 'absolute top-1/2'
                  } ${item}`}
                  key={i}
                ></span>
              ))}
            </div>
          </button>
          <a
            className="lg:hidden"
            href={'https://www.moei.gov.ae/'}
            target="_blank"
            title="MOEI Website"
          >
            <Image
              className="w-28 md:w-32 lg:mx-auto"
              src={MOEILogo}
              alt="MOEI Logo"
            />
          </a>
        </div>
        <nav
          className={`lg:mx-auto ${
            navExpanded ? 'h-full' : 'h-0'
          } overflow-hidden lg:overflow-visible lg:h-fit flex flex-col lg:flex-row flex-wrap justify-center`}
        >
          {navMenus.map(({ title, menutitle, dropdownMenu, link }, index) =>
            dropdownMenu ? (
              <div
                className="relative [&>nav]:hover:!flex"
                id="item"
                key={index}
                ref={(ref) =>
                  (navbarMenusRefs.current[index] = ref as HTMLElement)
                }
              >
                <Link
                  href={link}
                  className={`flex gap-1 whitespace-nowrap my-2 mx-3 transition-all text-sm md:text-base 2xl:text-lg font-default text-dark-colo ${
                    pathname === link
                      ? 'text-main-color font-medium'
                      : navExpanded
                      ? 'text-black'
                      : active
                      ? 'text-black'
                      : 'text-white'
                  } outline-none`}
                  onClick={(e) => {
                    if (window.innerWidth < 1024) {
                      if (
                        e.currentTarget.nextElementSibling?.classList.contains(
                          'hidden'
                        )
                      ) {
                        e.preventDefault();
                        handleMenuOpen({ index });
                      } else {
                        handleMenuClose({ index });
                      }
                    }
                  }}
                >
                  {menutitle}
                </Link>
                <nav className="bg-white w-auto py-3 px-3 rounded-xl relative lg:absolute lg:bottom-0 lg:translate-y-full hidden flex-col gap-2 z-[10] drop-shadow-lg">
                  {dropdownMenu.map(({ title, section }, i) => (
                    <Link
                      className="flex gap-x-2 whitespace-nowrap hover:text-main-color transition-all items-center text-sm md:text-base w-fit"
                      href={`${link}/?section=${section}`}
                      key={i}
                    >
                      {title}
                    </Link>
                  ))}
                </nav>
              </div>
            ) : (
              <Link
                className={`my-2 mx-3 transition-all text-sm md:text-base 2xl:text-lg  text-dark-color hover:text-main-color ${
                  pathname === link
                    ? 'text-main-color font-medium'
                    : navExpanded
                    ? 'text-black'
                    : active
                    ? 'text-black'
                    : 'text-white'
                }`}
                href={link}
                key={index}
              >
                {title}
              </Link>
            )
          )}
        </nav>

        <a
          className=" hidden lg:inline-block"
          href={'https://www.moei.gov.ae/'}
          target="_blank"
          title="MOEI Website"
        >
          <Image
            className="w-28 md:w-36 lg:w-44 md:mx-auto"
            src={MOEILogo}
            alt="MOEI Logo"
          />
        </a>
      </div>
    </header>
  );
}
