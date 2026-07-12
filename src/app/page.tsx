import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TradeLens — Day Trading Strategy Guide',
  description:
    'Visual deep-dives into price action, trend following, breakout trading, and smart money concepts — plus risk management, psychology, and workflow foundations.',
};

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-56px)] bg-neutral-950 text-neutral-100 flex items-center'>
      <div className='max-w-3xl mx-auto px-6 py-20 text-center'>
        <p className='text-xs font-mono tracking-widest text-emerald-500 mb-4'>VISUAL TRADING GUIDE</p>
        <h1 className='text-4xl sm:text-5xl font-bold mb-5 text-neutral-50'>
          Learn the strategies that actually get used
        </h1>
        <p className='text-lg text-neutral-400 mb-10 max-w-xl mx-auto'>
          Four of the most widely used, market-agnostic day trading strategies — explained with full visual breakdowns,
          not just theory. Price action, trend following, breakouts, and smart money concepts.
        </p>
        <Link
          href='/strategies'
          className='inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg transition-colors'
        >
          Explore strategies →
        </Link>
      </div>
    </main>
  );
}
