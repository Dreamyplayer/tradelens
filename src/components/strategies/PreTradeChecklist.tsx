'use client';

import { makeKey } from '@/components/utils';
import { useState } from 'react';

interface ChecklistGroup {
  title: string;
  items: string[];
}

const groups: ChecklistGroup[] = [
  {
    title: 'Condition & Bias',
    items: [
      'Market condition identified (trending / ranging / choppy)',
      "HTF bias checked and it agrees with this trade's direction",
      'MTF structure confirms the bias is still intact',
    ],
  },
  {
    title: 'Setup',
    items: [
      'A specific strategy (01–04) rule is met, not just a hunch',
      'Zone / pullback / range / order block clearly marked on the chart',
      'A confirmation candle or structure shift has actually closed',
    ],
  },
  {
    title: 'Risk',
    items: [
      'Stop loss level identified before entry, not after',
      'Position size calculated from risk % and stop distance',
      'Reward-to-risk is at least 1.5–2 : 1',
    ],
  },
  {
    title: 'State',
    items: [
      'Not trading to recover a previous loss',
      'Daily loss limit has not been hit',
      'This is a rule-based entry, not FOMO or impulse',
    ],
  },
];

export default function PreTradeChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const allItems = groups.flatMap(g => g.items);
  const checkedCount = allItems.filter(item => checked[item]).length;
  const total = allItems.length;

  const toggle = (item: string) => {
    setChecked(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const reset = () => setChecked({});

  return (
    <div className='rounded-xl border border-neutral-800 bg-neutral-900 p-6'>
      <div className='flex items-center justify-between mb-6'>
        <p className='text-sm text-neutral-400'>
          <span className='text-neutral-100 font-semibold'>{checkedCount}</span> / {total} checked
        </p>
        <button type='button' onClick={reset} className='text-xs text-neutral-500 hover:text-neutral-300 transition-colors'>
          Reset
        </button>
      </div>

      <div className='space-y-6'>
        {groups.map(group => (
          <div key={makeKey(group.title)}>
            <p className='text-xs font-mono tracking-widest text-neutral-500 p-4'>{group.title.toUpperCase()}</p>
            <ul className='space-y-2'>
              {group.items.map(item => (
                <li key={makeKey(item)}>
                  <button type='button' onClick={() => toggle(item)} className='w-full flex items-start gap-3 text-left group'>
                    <span
                      className={`mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center text-sm transition-colors ${
                        checked[item] ? 'text-emerald-500' : 'text-neutral-500 group-hover:text-neutral-300'
                      }`}
                    >
                      {checked[item] ? '✅' : '⭕'}
                    </span>
                    <span className={`text-sm ${checked[item] ? 'text-neutral-500 line-through' : 'text-neutral-300'}`}>
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {checkedCount === total && (
        <p className='mt-6 text-sm text-emerald-500 font-medium'>
          All conditions met — this is a rule-based entry.
        </p>
      )}
    </div>
  );
}
