import Link from 'next/link';

interface StrategyCardProps {
  href: string;
  index: string;
  title: string;
  description: string;
  accent: string; // tailwind text color class
}

export default function StrategyCard({ href, index, title, description, accent }: StrategyCardProps) {
  return (
    <Link
      href={href}
      className='flex flex-col h-full rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 hover:border-neutral-600 transition-colors'
    >
      <span className={`text-xs font-mono tracking-widest ${accent}`}>{index}</span>
      <h3 className='text-xl font-semibold text-neutral-100 mt-2 mb-2'>{title}</h3>
      <p className='text-sm text-neutral-400 flex-1'>{description}</p>
      <span className='inline-block mt-4 text-sm text-neutral-500'>Read deep-dive →</span>
    </Link>
  );
}
