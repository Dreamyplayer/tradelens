import ExampleBox from '@/components/strategies/ExampleBox';
import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import MarketConditionsDiagram from '@/components/svg/MarketConditionsDiagram';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Conditions — TradeLens',
  description: 'Trending, ranging, or choppy — how to read conditions before picking a strategy.',
};

export default function MarketConditionsPage() {
  return (
    <StrategyLayout
      eyebrow='FOUNDATION 05'
      title='Market Conditions'
      subtitle='The same setup rules produce different odds depending on whether the market is trending, ranging, or choppy — read this first, before picking a strategy.'
    >
      <Section label='WHAT' title='The three conditions'>
        <MarketConditionsDiagram />
        <p>
          Every session falls roughly into one of three states: a <strong>trend</strong> (clear directional structure),
          a <strong>range</strong> (price bound between defined levels), or <strong>choppy/volatile</strong> conditions
          (no consistent structure, whipsawing both ways).
        </p>
      </Section>

      <Section label='HOW' title="How to identify which one you're in">
        <InfoGrid
          items={[
            {
              title: 'Trending',
              detail:
                'Clean HH/HL or LH/LL structure (from the Trend Following page), moving average sloping consistently in one direction.',
            },
            {
              title: 'Ranging',
              detail:
                'Price repeatedly reacts at the same two zones (from Strategy 01) without making meaningful progress beyond either.',
            },
            {
              title: 'Choppy / volatile',
              detail:
                'No repeating structure — swings are erratic, moving averages flatten and get crossed constantly, zones fail to hold on both sides.',
            },
          ]}
        />
      </Section>

      <Section label='WHICH' title='Which strategy fits which condition'>
        <InfoGrid
          tone='good'
          items={[
            {
              title: 'Trending → Strategy 02 / 04',
              detail:
                "Trend Following pullbacks and SMC's BOS/CHoCH read work best when structure is already clean and directional.",
            },
            {
              title: 'Ranging → Strategy 01',
              detail:
                'Price Action at S/R is built exactly for this — buying support, selling resistance inside a defined range.',
            },
            {
              title: 'Range compressing → Strategy 03',
              detail:
                "A range that's tightening is the setup for Breakout Trading — the compression itself is the signal.",
            },
          ]}
        />
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Choppy / volatile → reduce size or wait',
              detail:
                'None of the four strategies perform well here — structure keeps failing on both sides. This is the condition where sitting out is itself the correct decision.',
            },
          ]}
        />
      </Section>

      <Section label='WHY' title='Why this is the first filter, not an afterthought'>
        <p>
          A textbook-perfect pullback entry (Strategy 02) taken during choppy conditions fails at a much higher rate
          than the exact same entry taken during a genuine trend — not because the rules were wrong, but because the
          underlying condition didn&apos;t support them. Reading the condition first prevents applying the right tool to the
          wrong environment.
        </p>
      </Section>

      <Section label='WHEN' title='When conditions shift mid-session'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Trend breaking into a range',
              detail:
                'If HH/HL structure stalls into repeated reactions at the same two levels, switch your lens from Strategy 02 to Strategy 01 instead of forcing continuation trades.',
            },
            {
              title: 'Range breaking into a trend',
              detail:
                "Once a range finally breaks with volume, that's the handoff point to Strategy 03, and eventually Strategy 02 once new structure forms.",
            },
          ]}
        />
      </Section>

      <Section label='EXAMPLE' title='Putting it together'>
        <ExampleBox
          instrument='Crude Oil Mini Futures'
          scenario='First 90 minutes of the session show price bouncing between 6,700 and 6,760 three times each, never breaking either level — no directional structure forming.'
          entry="Switch lens to Strategy 01 (Price Action) — treat 6,700 and 6,760 as the range's support and resistance."
          stop="Beyond whichever zone is faded, per Strategy 01's rules."
          target='The opposite side of the range, or the outer zone edge.'
          note='Trying to force a trend-following entry inside this range would be fighting the actual condition of the market.'
        />
      </Section>
    </StrategyLayout>
  );
}
