'use client';

import { Article, Loader } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { ArticleMaininfo } from 'PressCenter';
import React, { useEffect, useState } from 'react';

export default function Blog() {
  const [articles, setArticles] = useState<ArticleMaininfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getArticles = async () => {
    try {
      setLoading(true);
      const allArticles = await axiosInterceptorInstance.get<{
        count: number;
        results: ArticleMaininfo[];
      }>('/blog/blog/');
      setArticles(allArticles.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="py-10 md:py-20">
      <div className="container">
        <h2 className="title capitalize">blog</h2>
        <p className="subtitle">
          Explore our latest articles, news, and insights. Stay up-to-date with
          the electric vehicle industry&apos;s trends and developments.
        </p>
        <div className="row mt-8 md:mt-16 gap-y-8 md:gap-8 px-10">
          {articles.map(
            ({
              id,
              title,
              subtitle,
              photo,
              date_time,
              created_at,
              view_count,
            }) => (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4 4xl:col-span-3"
                key={id}
              >
                <Article
                  className="w-full"
                  id={id}
                  image={photo ?? ''}
                  title={title}
                  date={date_time ?? created_at}
                  views={view_count}
                  overview={subtitle}
                  key={id}
                />
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
