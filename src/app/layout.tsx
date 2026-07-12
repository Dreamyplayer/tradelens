import Footer from '@/components/layout/Footer';
import Nav from '@/components/layout/Nav';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: 'TradeLens — Day Trading Strategy Guide',
  description: 'Visual deep-dives into price action, trend following, breakout trading, and smart money concepts.',
  openGraph: {
    title: 'TradeLens — Day Trading Strategy Guide',
    description: 'Visual deep-dives into price action, trend following, breakout trading, and smart money concepts.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeLens — Day Trading Strategy Guide',
    description: 'Visual deep-dives into price action, trend following, breakout trading, and smart money concepts.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
