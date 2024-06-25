'use client';

import { Loader } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { NewsMainInfo } from 'PressCenter';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News() {
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [allNews, setAllNews] = useState<NewsMainInfo[]>([]);
  const [news, setNews] = useState<NewsMainInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getNews = async () => {
    try {
      page === 1 && setLoading(true);
      const res = await axiosInterceptorInstance.get<{
        count: number;
        results: NewsMainInfo[];
      }>(`/blog/news/?page=${page}`);
      setNews(res.data.results);
      setCount(res.data.count);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    allNews && page > 1
      ? setAllNews([...allNews, ...news])
      : setAllNews([...news]);
  }, [news]);

  useEffect(() => {
    getNews();
  }, [page]);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="py-10 md:py-20">
      <div className="container">
        <h2 className="title capitalize">news</h2>
        <p className="subtitle">
          Discover the buzz surrounding EVIS in the news. Explore media
          coverage, interviews, and features showcasing our impact on the
          electric vehicle industry.
        </p>

        <InfiniteScroll
          dataLength={allNews?.length}
          next={() => setPage(page + 1)}
          style={{ display: 'flex', flexDirection: 'column' }} //To put endMessage and loader to the top.
          hasMore={count / 20 > page}
          loader={''}
        >
          <div className="row mt-8 md:mt-16 gap-y-8 md:gap-8 px-10">
            {allNews?.map(({ id, link, title, body, photo }) => (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 "
                key={id}
              >
                <a
                  className={`news w-full bg-white shadow-md drop-shadow-lg rounded-lg overflow-hidden flex items-center flex-col-reverse`}
                  href={link}
                  target="_blank"
                  key={id}
                >
                  <div className="content text-body-gray  w-full p-4 md:p-6">
                    <h3 className=" font-bold md:text-xl 4xl:text-2xl mb-2 md:mb-4">
                      {title}
                    </h3>
                    <p className="text-sm md:text-base 4xl:text-xl">{body}</p>
                  </div>
                  <Image
                    className="w-full object-cover h-[200px] md:h-[300px] 2xl:h-[220px] bg-white"
                    src={photo ?? ''}
                    alt="Conference Register"
                    width={200}
                    height={200}
                  />
                </a>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </main>
  );
}
