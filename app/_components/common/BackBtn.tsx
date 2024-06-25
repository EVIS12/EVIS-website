'use client';

import { ArrowIcon } from '@/public/icons/SVGIcons';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function BackBtn() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className=" bg-main-color mb-6 rounded-md py-1 px-4 md:py-3 md:px-5 w-fit aspect-square"
    >
      <ArrowIcon className="[&>path]:stroke-white rotate-180 w-2 md:w-3" />
    </button>
  );
}
