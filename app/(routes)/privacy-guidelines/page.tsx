import { privacyGuidelines } from '@/app/_utils/info';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Guidelines',
};

export default function PrivacyGuidelines() {
  return (
    <main>
      <section className="section-pad">
        <div className="container">
          <ul className="guidelines list-disc list-outside">
            {privacyGuidelines.map(({ title, description }, i) => (
              <li className="item my-6" key={i}>
                <h2 className=" font-bold md:text-2xl text-dark-color">
                  {title}
                </h2>
                <p className=" text-sm md:text-lg mt-2">
                  {description.includes('\n') ? (
                    <>
                      {description.split('\n')[0]} <br />{' '}
                      {description.split('\n')[1]}
                    </>
                  ) : (
                    description
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
