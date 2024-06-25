import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Info Form',
};

export default function ProjectInfoFormlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
