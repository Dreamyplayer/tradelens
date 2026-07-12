import Link from 'next/link';
import { ReactNode } from 'react';

interface StrategyLayoutProps {
  eyebrow: string; // e.g. "STRATEGY 01"
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function StrategyLayout({ eyebrow, title, subtitle, children }: StrategyLayoutProps) {
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-100'>
      <div className='max-w-3xl mx-auto px-6 py-16'>
        <Link href='/strategies' className='text-sm text-neutral-500 hover:text-emerald-500 transition-colors'>
          ← All strategies
        </Link>

        <p className='text-xs font-mono tracking-widest text-neutral-500 mt-8'>{eyebrow}</p>
        <h1 className='text-4xl font-bold mt-2 mb-3 text-neutral-50'>{title}</h1>
        <p className='text-lg text-neutral-400 mb-12'>{subtitle}</p>

        <div className='space-y-14'>{children}</div>
      </div>
    </main>
  );
}
