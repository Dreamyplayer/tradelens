import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t border-neutral-900 mt-20'>
      <div className='max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-3 text-sm text-neutral-500'>
        <p>
          TradeLens — educational content, not financial advice.
        </p>
          <Link
            href='https://github.com/Dreamyplayer'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-400 hover:text-emerald-500 transition-colors'
          >
            <span className='whitespace-nowrap text-neutral-500'>Built by </span>Dreamy
          </Link>
        <p className='flex items-center gap-1.5 text-neutral-600'>
          <span>Gear 5 charts only</span>
          <span aria-hidden>⚓️</span>
        </p>
      </div>
    </footer>
  );
}
