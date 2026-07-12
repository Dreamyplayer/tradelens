import ExampleBox from '@/components/strategies/ExampleBox';
import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import SessionVolumeDiagram from '@/components/svg/SessionVolumeDiagram';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Session Timing — TradeLens',
  description: 'Why the same setup behaves differently by time of day, and which windows suit which strategy.',
};

export default function SessionTimingPage() {
  return (
    <StrategyLayout
      eyebrow='FOUNDATION 03'
      title='Session Timing'
      subtitle="The exact same setup behaves differently depending on what time of day it prints — because liquidity isn't constant."
    >
      <Section label='WHAT' title='What session timing actually affects'>
        <p>
          None of the four strategies change — S/R zones, trend pullbacks, breakouts, and order blocks are all still
          valid setups at any hour. What changes is <strong>how reliable</strong> the resulting move is, because volume
          (the actual fuel behind a breakout or a zone rejection) isn&apos;t evenly spread across the day.
        </p>
        <SessionVolumeDiagram />
      </Section>

      <Section label='WHERE' title='Where the high-liquidity windows sit'>
        <InfoGrid
          items={[
            {
              title: 'Session open',
              detail:
                'The first 30–60 minutes after market open typically carries the strongest volume of the domestic session — good for breakouts and trend continuation, riskier for fresh S/R zones since the opening range itself is often forming.',
            },
            {
              title: 'Midday lull',
              detail:
                'Volume commonly thins out for a stretch in the middle of the session — ranges get choppier and breakouts fail more often here.',
            },
            {
              title: 'Overlap with global session',
              detail:
                'For instruments like Crude Oil that trade on both domestic and global markets, the window where major global markets are also active often brings a second strong volume push.',
            },
          ]}
        />
      </Section>

      <Section label='WHICH' title='Which strategy fits which window'>
        <InfoGrid
          items={[
            {
              title: 'Breakout trading',
              detail:
                'Best suited to high-volume windows (open, overlap) — a breakout without real volume behind it is exactly the false-breakout trap covered earlier.',
            },
            {
              title: 'Trend following (pullback)',
              detail:
                'Works reasonably across the day once a trend is established, but pullback bounces during the midday lull can be weaker and slower to confirm.',
            },
            {
              title: 'Price action at S/R',
              detail:
                'Works at any time, but zones tested during low-volume windows deserve extra caution before trusting the reaction.',
            },
          ]}
        />
      </Section>

      <Section label='HOW' title='How to use this practically'>
        <p>
          Keep a simple internal map of your instrument&apos;s session: mark the open, the typical lull, and the
          highest-volume overlap window on your own trading hours. Weight your setups accordingly — a breakout during
          the lull needs a much higher bar of confirmation than the same pattern at the open or the overlap.
        </p>
      </Section>

      <Section label='WHY' title='Why this matters'>
        <p>
          Every strategy in this guide is ultimately about reading order flow — where real orders are clustering and
          firing. When overall volume is thin, there simply are fewer real orders behind any given move, so patterns
          that look identical on the chart carry different odds of following through depending on the hour they form in.
        </p>
      </Section>

      <Section label='WHEN' title='When to sit on your hands'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Midday lull breakouts',
              detail:
                'A range breaking during the thinnest part of the day is the highest false-breakout risk window — wait for the next volume window to confirm follow-through.',
            },
            {
              title: 'Last few minutes before session close',
              detail:
                'Moves here are often position squaring rather than genuine directional conviction — avoid fresh entries this close to the bell.',
            },
          ]}
        />
      </Section>

      <Section label='EXAMPLE' title='Putting it together'>
        <ExampleBox
          instrument='Crude Oil Mini Futures'
          scenario='A tight consolidation range breaks to the upside right during the midday lull, on noticeably below-average volume compared to the morning session.'
          entry='No entry yet — wait and watch instead of taking the breakout at face value.'
          stop='N/A'
          target='Re-evaluate once the higher-volume overlap window begins; only take the breakout if price is still holding above the range with fresh volume by then.'
          note='Same chart pattern, same rules from strategy 03 — the only difference is patience for a better-quality window.'
        />
      </Section>
    </StrategyLayout>
  );
}
