import Logo from '@/components/layout/Logo';
import Link from 'next/link';

export default function Nav() {
  return (
    <header className='border-b border-neutral-900'>
      <div className='max-w-6xl mx-auto px-6 h-14 flex items-center justify-between'>
        <Link href='/' className='hover:opacity-80 transition-opacity'>
          <Logo />
        </Link>
        <Link href='/strategies' className='text-sm text-neutral-400 hover:text-emerald-500 transition-colors'>
          Strategies
        </Link>
      </div>
    </header>
  );
}
