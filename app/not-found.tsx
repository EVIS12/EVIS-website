import { NotFoundFrame } from '@/public/icons/SVGIcons';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <main className="grid place-content-center py-16">
      <NotFoundFrame className="w-full md:w-[800px] max-w-full" />
    </main>
  );
}
