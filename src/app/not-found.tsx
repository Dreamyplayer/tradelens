import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='min-h-[calc(100vh-56px)] bg-neutral-950 text-neutral-100 flex items-center'>
      <div className='max-w-xl mx-auto px-6 py-20 text-center'>
        <p className='text-xs font-mono tracking-widest text-emerald-500 mb-4'>404</p>
        <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-neutral-50'>This chart doesn&apos;t exist</h1>
        <p className='text-neutral-400 mb-10'>
          The page you&apos;re looking for isn&apos;t here — maybe it moved, or maybe it was never a valid setup to
          begin with.
        </p>
        <div className='flex items-center justify-center gap-4'>
          <Link
            href='/'
            className='inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm'
          >
            Back to home
          </Link>
          <Link
            href='/strategies'
            className='inline-block text-neutral-400 hover:text-emerald-500 transition-colors text-sm'
          >
            Browse strategies →
          </Link>
        </div>
      </div>
    </main>
  );
}
