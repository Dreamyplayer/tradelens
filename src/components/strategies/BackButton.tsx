'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type='button'
      className='inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-emerald-500 cursor-pointer'
    >
      ← Back
    </button>
  );
}
