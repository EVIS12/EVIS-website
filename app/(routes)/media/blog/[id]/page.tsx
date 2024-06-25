import React from 'react';
import Image from 'next/image';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { ArticleDetails, ArticleMaininfo } from 'PressCenter';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const article = await axiosInterceptorInstance.get<ArticleDetails>(
    `/blog/blog/${id}`
  );

  return {
    title: article.status !== 404 ? article.data.title : 'Article Not Found',
  };
}

export const revalidate = 180;

export const dynamicParams = true;

export async function generateStaticParams() {
  const {
    data: { results },
  } = await axiosInterceptorInstance.get<{ results: ArticleMaininfo[] }>(
    '/blog/blog/'
  );
  return results.map(({ id }) => ({ id }));
}

export default async function BlogArticle({
  params: { id },
}: {
  params: { id: string };
}) {
  const article = await axiosInterceptorInstance.get<ArticleDetails>(
    `/blog/blog/${id}`
  );

  if (article?.status === 404) {
    return notFound();
  }
  const articleInfo = article.data;

  return (
    <main className="py-10 md:py-20">
      <div className="container">
        <div className="article px-5 md:px-10 lg:px-0">
          <div className="article-head">
            <h2 className="title !text-start text-xl md:!text-4xl ">
              {articleInfo.title}
            </h2>
            <p className="subtitle !text-start !mx-0 !w-full lg:!w-1/2">
              {articleInfo.subtitle}
            </p>
          </div>
          <div className="article-body mt-6 md:mt-16">
            <Image
              className="float-left aspect-square h-[300px] md:h-[400px] object-cover rounded-lg mr-6 mb-4"
              src={articleInfo.photo}
              alt={`${articleInfo.title} Image`}
              width={500}
              height={500}
            />
            <div
              className="[&>p]:my-4"
              dangerouslySetInnerHTML={{
                __html: articleInfo.body,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
