import { BackBtn } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_api/axiosInterceptor';
import { SpeakerDetailsBox } from '@/app/_components';
import { SpeakerDetails, SpeakerMainInfo } from 'Speakers';
import React from 'react';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Props) {
  const speaker = await axiosInterceptorInstance.get<SpeakerDetails>(
    `/speakers/speakers/${id}`
  );

  return {
    title: speaker.data.name,
  };
}

export const revalidate = 180;

export const dynamicParams = true;

export async function generateStaticParams() {
  const {
    data: { results },
  } = await axiosInterceptorInstance.get<{
    results: SpeakerMainInfo[];
  }>('/speakers/speakers/');
  return results.map(({ id }) => ({ id }));
}

export default async function SpeakerInfo({ params: { id } }: Props) {
  const speaker = await axiosInterceptorInstance.get<SpeakerDetails>(
    `/speakers/speakers/${id}`
  );

  if (speaker.status === 404) {
    return notFound();
  }

  return (
    <main>
      <div className="container">
        <div className="section-pad ">
          <BackBtn />
          <SpeakerDetailsBox speaker={speaker.data} />
        </div>
      </div>
    </main>
  );
}
