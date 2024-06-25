import { Metadata } from 'next';
import React from 'react';

export default function VisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
