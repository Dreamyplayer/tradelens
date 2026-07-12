import FAQItem from '@/components/strategies/FAQItem';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import { makeKey } from '@/components/utils';

const faqs = [
  {
    q: 'Which strategy should I learn first?',
    a: "Price Action + Support/Resistance. Every other strategy on this site — trend pullbacks, breakout retests, SMC order blocks — reuses the same zone and confirmation-candle logic underneath, so it's the foundation the rest build on.",
  },
  {
    q: 'Do I need all four strategies, or can I just pick one?',
    a: 'You can trade one exclusively, but the Market Conditions page exists because no single strategy performs well in every condition. Knowing at least Price Action (for ranges) and Trend Following (for trends) covers most sessions.',
  },
  {
    q: 'How much capital do I need to start?',
    a: "This site doesn't set a specific number — that depends on your instrument's margin and lot size. What matters more is that your risk-per-trade (from Risk Management) works out to a sensible rupee amount at whatever capital you do start with.",
  },
  {
    q: 'How many trades should I take per day?',
    a: 'As many as genuinely meet the Pre-Trade Checklist, and no more. Trading a fixed number regardless of setup quality is exactly the overtrading pattern covered on the Psychology page.',
  },
  {
    q: "What if my stop loss and target don't give a good reward-to-risk?",
    a: "Skip the trade. The Risk Management page sets a 1.5–2:1 minimum for a reason — forcing a trade with a poor ratio just to 'be in the market' is a common way small edges get erased.",
  },
  {
    q: 'Can these strategies be combined in a single trade?',
    a: 'Yes — this is common. A Trend Following bias combined with an SMC order-block entry, confirmed with a Strategy 01 candlestick pattern, is a normal way these four ideas overlap rather than compete.',
  },
  {
    q: 'Do these strategies work outside Crude Oil / Indian markets?',
    a: "Yes. All four are based on order flow and structure, not on any single market's quirks, which is why they show up identically on indices, forex, and crypto charts too.",
  },
  {
    q: "What's the single most common reason these strategies fail for beginners?",
    a: 'Skipping the confirmation step — entering on a zone touch, a pullback touch, or a breakout wick without waiting for the candle to actually close and confirm it. Check the Common Mistakes page for the full list.',
  },
];

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — TradeLens',
  description: 'Quick answers to the most common questions about these strategies.',
};

export default function FAQPage() {
  return (
    <StrategyLayout
      eyebrow='GUIDE'
      title='Frequently Asked Questions'
      subtitle='Quick answers to the questions that come up most, with links back to the full explanation.'
    >
      <Section label='FAQ' title='Answers'>
        <div className='space-y-3'>
          {faqs.map(f => (
            <FAQItem key={makeKey(f.q)} question={f.q} answer={f.a} />
          ))}
        </div>
      </Section>
    </StrategyLayout>
  );
}
