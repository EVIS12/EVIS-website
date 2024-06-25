'use client';

import { Loader, SearchInput, Speaker } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SpeakerMainInfo } from 'Speakers';
import { notFound, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function SpeakersVersion() {
  const searchParams = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [allSpeakers, setAllSpeakers] = useState<SpeakerMainInfo[]>([]);
  const [speakers, setSpeakers] = useState<SpeakerMainInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getSpeakers = async () => {
    try {
      page === 1 && setLoading(true);
      const res = await axiosInterceptorInstance.get<{
        count: number;
        results: SpeakerMainInfo[];
      }>(
        `/speakers/speakers/?page=${page}&version__year=${searchParams.get(
          'year'
        )}&search=${searchParams.get('query') ?? ''}`
      );
      setSpeakers(res.data.results);
      setCount(res.data.count);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    allSpeakers && page > 1
      ? setAllSpeakers([...allSpeakers, ...speakers])
      : setAllSpeakers(speakers);
  }, [speakers]);

  useEffect(() => {
    getSpeakers();
  }, [searchParams, page]);

  useEffect(() => {
    setPage(1);
    setAllSpeakers([]);
    getSpeakers();
  }, [searchParams.get('query')]);

  if (!searchParams.get('year')) {
    return notFound();
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <div className="container mb-10">
        <div className="head mt-10 flex flex-col items-center md:flex-row md:justify-between">
          <div className="content mb-4 md:mb-0">
            <h2 className="title !text-start">
              <span>EVIS</span> Speakers <span>{searchParams.get('year')}</span>
            </h2>
          </div>
          <SearchInput filter="year" />
        </div>
        <section className="section-pad md:!px-0">
          {speakers?.length > 0 ? (
            <InfiniteScroll
              dataLength={allSpeakers.length}
              next={() => setPage(page + 1)}
              style={{ display: 'flex', flexDirection: 'column' }} //To put endMessage and loader to the top.
              hasMore={count / 20 > page}
              loader={''}
            >
              <div className="row gap-y-8 md:gap-10">
                {allSpeakers?.map(({ id, photo, name, job_title, company }) => (
                  <div
                    className="col-span-12 md:col-span-6 lg:col-span-3"
                    key={id}
                  >
                    <Speaker
                      id={id}
                      name={name}
                      session={job_title}
                      title={company}
                      image={photo}
                      type="old"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          ) : (
            <h2 className=" flex font-bold text-2xl col-span-12 h-full mx-auto">
              No Speakers found
            </h2>
          )}
        </section>
      </div>
    </main>
  );
}
