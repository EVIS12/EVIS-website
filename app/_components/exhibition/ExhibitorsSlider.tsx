'use client';

import React, { useEffect, useState } from 'react';
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { SplideArrows } from '..';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import Link from 'next/link';
import { ExhibitorMainInfo } from 'Exhibitors';

interface ExhibitorSlide {
  id: string;
  logo: string;
  sponserShipTitle?: string;
}

export default function ExhibitorsSlider({
  className,
}: {
  className?: string;
}) {
  const [slides, setSlides] = useState<ExhibitorSlide[]>([]);

  const getItems = async () => {
    const res = await axiosInterceptorInstance.get<ExhibitorMainInfo[]>(
      `/exhibitor/exhibitors/`
    );
    console.log(res.data);
    setSlides(res.data);
  };

  useEffect(() => {
    getItems();
  });

  return (
    <section className={`section-pad ${className}`}>
      <div className="container mx-auto">
        {/* handle sizes */}
        {[
          { query: 'hidden lg:block ', number: 3 },
          { query: 'block lg:hidden', number: 2 },
        ].map(({ query, number }, i) => (
          <Splide
            key={i}
            className={query}
            options={{
              perPage: number,
              focus: 0,

              pagination: false,
            }}
            hasTrack={false}
          >
            <SplideTrack>
              {slides?.map(({ id, logo }) => (
                <SplideSlide className="px-4 md:px-8" key={id} role="slide">
                  <Link href={`/exhibition/exhibitor-list/${id}`}>
                    <Image
                      src={logo ?? ''}
                      className="h-52 w-5/6 object-contain mx-auto"
                      alt="test image"
                      width={300}
                      height={200}
                    />
                  </Link>
                </SplideSlide>
              ))}
            </SplideTrack>
            <SplideArrows />
          </Splide>
        ))}
      </div>
    </section>
  );
}
