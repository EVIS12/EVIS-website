import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Register Form',
};

export default function RegisterFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
