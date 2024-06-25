import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'EVIS News',
};
export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
