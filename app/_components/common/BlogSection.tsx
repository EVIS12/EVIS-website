import React from 'react';
import { Article } from '..';
import Link from 'next/link';
import { AdaptiveCards } from '@/app/(routes)/providers';
import { ArticleMaininfo } from 'PressCenter';

export default function BlogSection({
  className,
  articles,
  title,
  subtitle,
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  articles: ArticleMaininfo[];
}) {
  return (
    <section className={`blog ${className} section-pad`} id="blog">
      <div className="container mx-auto">
        <h2 className="title">{title ?? 'Insights and News'}</h2>
        <p className="subtitle">
          {subtitle ??
            "Explore our latest articles, news, and insights. Stay up-to-date with the electric vehicle industry's trends and developments."}
        </p>
        <AdaptiveCards className="md:!grid row gap-y-8 md:gap-8 px-10 mt-8 md:mt-16">
          {articles
            .slice(0, 3)
            ?.map(
              ({
                photo,
                title,
                created_at,
                id,
                view_count,
                subtitle,
                date_time,
              }) => (
                <Article
                  className="md:col-span-6 lg:col-span-4"
                  id={id}
                  image={photo ?? ''}
                  title={title}
                  date={date_time ?? created_at}
                  views={view_count}
                  overview={subtitle}
                  key={id}
                />
              )
            )}
        </AdaptiveCards>
        <Link href={'/media/blog'} className="green-btn mt-6 md:mt-12">
          View more
        </Link>
      </div>
    </section>
  );
}
