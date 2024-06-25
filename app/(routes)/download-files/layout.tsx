import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Form',
};

export default function DownloadFormlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
