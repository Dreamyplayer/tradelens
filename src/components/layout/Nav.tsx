import Link from 'next/link';

export default function Nav() {
  return (
    <header className='border-b border-neutral-900'>
      <div className='max-w-3xl mx-auto px-6 h-14 flex items-center justify-between'>
        <Link href='/' className='text-sm font-semibold text-neutral-100 tracking-tight'>
          TradeLens
        </Link>
        <Link href='/strategies' className='text-sm text-neutral-400 hover:text-emerald-500 transition-colors'>
          Strategies
        </Link>
      </div>
    </header>
  );
}
