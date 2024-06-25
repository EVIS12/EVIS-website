import { BackBtn, SpeakerDetailsBox } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { AdvisorMainInfo } from 'Advisors';
import { SpeakerDetails } from 'Speakers';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Props) {
  const advisor = await axiosInterceptorInstance.get<SpeakerDetails>(
    `/advisors/advisors-board/${id}`
  );
  return {
    title: advisor.status === 404 ? 'Advisor Not Found' : advisor.data.name,
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const { data } = await axiosInterceptorInstance.get<AdvisorMainInfo[]>(
    '/advisors/advisors-board/'
  );
  return data.map(({ id }) => ({ id }));
}

export const revalidate = 180;

export default async function AdvisorDetails({ params: { id } }: Props) {
  const advisor = await axiosInterceptorInstance.get<SpeakerDetails>(
    `/advisors/advisors-board/${id}`
  );

  if (advisor.status === 404) {
    return notFound();
  }

  return (
    <main>
      <div className="container">
        <div className="section-pad ">
          <BackBtn />
          <SpeakerDetailsBox speaker={advisor.data} />
        </div>
      </div>
    </main>
  );
}
