import './globals.scss';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Footer, Navbar } from './_components';
import { headers } from 'next/headers';
import 'tailwind-normalize/normalize.css';
import GoogleAnalytics from './_ads/GoogleAnalytics';
import QueryProvider from './_context/QueryProvider';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'EVIS is a premier event showcasing the future of electric vehicles in the Middle East. It features speakers, exhibitors, workshops, and insights from industry leaders and experts in sustainable mobility.',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = headers().get('x-nonce');

  return (
    <html
      lang="en"
      className={`${inter.className} scroll-smooth`}
      nonce={nonce as string}
    >
      <head>
        <meta name="theme-color" content="#25BDB9" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/ico" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-[#F8F8F8]">
        <QueryProvider>
          {false && (
            <h2 className="bg-main-color text-white text-center py-2 md:py-3  text-sm md:text-base lg:text-xl">
              Under the Patronage of Ministry of Energy & Infrastructure
            </h2>
          )}
          <Navbar />
          {children}
          <Footer />
        </QueryProvider>
      </body>
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRAKING_ID as string} />
    </html>
  );
}
