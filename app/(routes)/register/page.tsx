import RegisterCard from '@/app/_components/register/RegisterCard';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { registerCards } from '@/app/_utils/info';
import { RegisterLink } from 'Links';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
};

export const revalidate = 180;

export default async function Register() {
  const links = await axiosInterceptorInstance.get<RegisterLink[]>(
    '/links/register-links'
  );

  const cardsWithLinks = registerCards.map((card) => {
    const [targetedItem] = links?.data.filter((item) => {
      return item.type === card.title.toLocaleLowerCase() && item;
    });

    return { ...card, url: targetedItem?.link ?? '' };
  });

  return (
    <main className="bg-second-color">
      <div className="container py-14 px-5">
        <h2 className="title ! !text-start px-10">Register as</h2>
        <section className="cards my-8 md:my-16 flex justify-center flex-wrap gap-6 md:gap-8 lg:w-3/4 mx-auto">
          {cardsWithLinks.map(({ title, description, icon, url }, i) => (
            <RegisterCard
              title={title}
              description={description}
              icon={icon}
              url={url}
              key={i}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
