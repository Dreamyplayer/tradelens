import { ReactNode } from 'react';

interface SectionProps {
  label: string; // e.g. "WHAT"
  title: string;
  children: ReactNode;
}

/**
 * Consistent section block used for every What/How/When/Why/Where/Which
 * segment across all strategy pages.
 */
export default function Section({ label, title, children }: SectionProps) {
  return (
    <section className='border-l-2 border-neutral-800 pl-6 py-2'>
      <span className='text-xs font-mono tracking-widest text-emerald-500'>{label}</span>
      <h2 className='text-2xl font-semibold text-neutral-100 mt-1 mb-3'>{title}</h2>
      <div className='text-neutral-300 leading-relaxed space-y-3'>{children}</div>
    </section>
  );
}
