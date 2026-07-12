import PreTradeChecklist from '@/components/strategies/PreTradeChecklist';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Trade Checklist — TradeLens',
  description: 'An interactive checklist to run through before every entry.',
};

export default function ChecklistPage() {
  return (
    <StrategyLayout
      eyebrow='GUIDE'
      title='Pre-Trade Checklist'
      subtitle="Run through this before every entry — it's the same rules from every strategy page, condensed into one pass/fail list."
    >
      <Section label='HOW TO USE' title='Check every box before you click buy or sell'>
        <p>
          If any item can&apos;t honestly be checked, the trade isn&apos;t ready yet. This isn&apos;t about slowing you
          down — it&apos;s about catching the exact impulse entries covered on the{' '}
          <strong>Psychology & Discipline</strong> page before they happen.
        </p>
      </Section>

      <PreTradeChecklist />
    </StrategyLayout>
  );
}
