import ExampleBox from '@/components/strategies/ExampleBox';
import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import CandlestickPatterns from '@/components/svg/CandlestickPatterns';
import LiveExamplePriceAction from '@/components/svg/LiveExamplePriceAction';
import RoleReversalDiagram from '@/components/svg/RoleReversalDiagram';
import SRZoneDiagram from '@/components/svg/SRZoneDiagram';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Price Action + Support/Resistance — TradeLens',
  description:
    'How to trade zone reactions using pure chart structure and candlestick confirmation, with full visual breakdowns.',
};

export default function PriceActionPage() {
  return (
    <StrategyLayout
      eyebrow='STRATEGY 01'
      title='Price Action + Support/Resistance'
      subtitle='Trading reactions at key levels using raw chart structure — the foundation every other strategy builds on.'
    >
      <Section label='WHAT' title='What counts as support/resistance'>
        <p>
          Support and resistance are <strong>zones</strong>, not exact lines. A zone is an area where price has
          previously reversed, stalled, or been rejected multiple times — meaning there is a cluster of buy or sell
          orders sitting there. Treating it as a single price point causes missed entries and tight stop-outs; treating
          it as a band (zone) gives room for wicks.
        </p>
        <SRZoneDiagram />
        <p className='text-sm text-neutral-500'>
          Above: price reacts at the same resistance band three separate times before finally breaking through. Support
          behaves the same way in reverse.
        </p>
      </Section>

      <Section label='WHERE' title='Where to draw the zones'>
        <InfoGrid
          items={[
            {
              title: 'Prior swing highs / lows',
              detail:
                'The most recent points where price clearly turned. Mark the wick extreme as the outer edge, the candle body as the inner edge — that range is your zone.',
            },
            {
              title: 'Multiple touches',
              detail: 'A level price has respected 2+ times is far more significant than one touched once.',
            },
            {
              title: 'Round numbers',
              detail: 'Psychological levels (e.g. 6,500 / 7,000 in Crude) often act as magnets and reaction points.',
            },
            {
              title: 'Previous day/session high-low',
              detail:
                "For intraday trading, yesterday's high/low and the opening range are some of the most reacted-to levels.",
            },
          ]}
        />
      </Section>

      <Section label='STRENGTH' title='Judging zone quality, not just presence'>
        <p>
          Not every zone deserves equal trust. Two zones can both show &quot;2 touches&quot; and still carry very
          different odds — quality matters more than the raw touch count.
        </p>
        <InfoGrid
          tone='good'
          items={[
            {
              title: 'Touches spread across sessions',
              detail:
                "A level respected over several days shows sustained interest, not a single moment's coincidence.",
            },
            {
              title: 'Sharp, decisive rejection wicks',
              detail: 'Long, clean wicks at each touch show the zone is actively being defended by real orders.',
            },
            {
              title: 'Zone has never been broken',
              detail:
                "A fresh, untested zone tends to hold better than one that's already failed once and had to be reclaimed.",
            },
          ]}
        />
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Touches bunched in one session',
              detail:
                'Several reactions within an hour of each other are closer to one event than genuine repeated proof.',
            },
            {
              title: 'Weak, shallow reactions',
              detail:
                'Small bodies with barely any wick suggest the zone is being tested half-heartedly, not defended.',
            },
            {
              title: 'Zone already broken and reclaimed once',
              detail:
                'Once a level has failed, treat the next test with more caution — the orders that originally defended it may already be used up.',
            },
          ]}
        />
      </Section>

      <Section label='HOW' title='How to time the entry — confirmation patterns'>
        <p>
          Never buy or sell just because price touched a zone — that&apos;s guessing. Wait for a candle to actually
          confirm rejection or acceptance at the zone.
        </p>
        <CandlestickPatterns />
        <p>
          A pin bar shows the zone was tested and rejected. An engulfing candle shows one side fully overpowered the
          other. An inside bar shows compression right at the zone, often before a sharp move.
        </p>
      </Section>

      <Section label='WHICH' title='Which reaction matters most: role reversal'>
        <p>
          When a resistance zone finally breaks with a strong close, it frequently flips and becomes support on the
          retest. This is one of the highest-probability entries in price action trading because you get confirmation
          (the break) before you risk capital (the retest).
        </p>
        <RoleReversalDiagram />
      </Section>

      <Section label='WHY' title='Why this works'>
        <p>
          Zones represent real resting orders — stop losses, take-profits, and fresh institutional entries clustered at
          the same price area. Price reacts there because large orders actually get filled there, not because of any
          indicator. That&apos;s why price action works identically on Crude, Nifty, Forex, or Bitcoin — the underlying
          reason (order flow) is the same everywhere.
        </p>
      </Section>

      <Section label='WHEN' title='When to take the trade'>
        <InfoGrid
          tone='good'
          items={[
            {
              title: 'Enter',
              detail: 'After a confirmation candle closes at the zone, in the direction of the rejection/acceptance.',
            },
            {
              title: 'Stop loss',
              detail: 'Just beyond the outer edge of the zone (past the wick extreme), not right at it.',
            },
          ]}
        />
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Avoid',
              detail:
                'Entering the instant price touches the zone with no confirmation candle — this is the #1 cause of stop-outs.',
            },
            {
              title: 'Avoid',
              detail: 'Using a zone that has only been touched once with no other confluence.',
            },
          ]}
        />
      </Section>

      <Section label='EXAMPLE' title='Putting it together'>
        <LiveExamplePriceAction />
        <ExampleBox
          instrument='Crude Oil Mini Futures'
          scenario='Price rallies into a resistance zone around 6,780–6,800 for the third time this week. On the third touch, a bearish engulfing candle closes back inside the zone.'
          entry='Short on the close of the engulfing candle, around 6,775.'
          stop="Above the zone's outer wick, around 6,815."
          target='Prior support/swing low near 6,650 — roughly a 3:1 reward-to-risk.'
          note="The third touch matters — it's already a proven zone, and the engulfing candle is the confirmation, not the touch itself."
        />
      </Section>
    </StrategyLayout>
  );
}
