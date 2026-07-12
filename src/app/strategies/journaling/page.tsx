import ExampleBox from '@/components/strategies/ExampleBox';
import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import EquityCurveDiagram from '@/components/svg/EquityCurveDiagram';

export default function JournalingPage() {
  return (
    <StrategyLayout
      eyebrow='FOUNDATION 04'
      title='Journaling & Backtesting'
      subtitle='How you find out whether a strategy actually has an edge, instead of guessing based on the last few trades.'
    >
      <Section label='WHAT' title='What each one actually is'>
        <InfoGrid
          items={[
            {
              title: 'Backtesting',
              detail:
                "Manually scrolling back through historical charts, marking every time a setup's exact rules would have triggered, and recording the outcome — done before risking real money.",
            },
            {
              title: 'Journaling',
              detail:
                'Logging every live trade you actually take — setup type, entry/exit, result, and the reasoning at the time — so patterns in your own execution become visible.',
            },
          ]}
        />
      </Section>

      <Section label='WHY' title='Why this matters more than it seems'>
        <p>
          Without a journal, &quot;this strategy isn&apos;t working&quot; is usually based on the last 3–5 trades, which
          is not a large enough sample to mean anything. A journal turns a vague feeling into an actual number — win
          rate, average R multiple, and whether losses were rule-following or rule-breaking.
        </p>
        <EquityCurveDiagram />
        <p className='text-sm text-neutral-500'>
          This is what a real edge looks like — a mix of wins and losses that still trends upward over enough trades. No
          strategy in this guide wins every time; the curve is what actually proves it works.
        </p>
      </Section>

      <Section label='HOW' title='How to build a usable journal'>
        <InfoGrid
          items={[
            {
              title: 'Setup used',
              detail:
                'Which of the four strategies (or foundation) triggered the entry — tag every trade so you can filter by setup type later.',
            },
            {
              title: 'Entry / stop / target',
              detail: 'The exact levels, plus the R-multiple result once closed.',
            },
            {
              title: 'Chart screenshot',
              detail:
                'A snapshot at entry — the fastest way to spot on review whether the setup was actually valid or forced.',
            },
            {
              title: 'Rule-followed or not',
              detail:
                'A simple yes/no flag. Over time this alone reveals whether losses are coming from the strategy or from execution.',
            },
          ]}
        />
      </Section>

      <Section label='WHICH' title='Which to do first: backtest, then journal'>
        <p>
          Backtest a strategy over enough historical instances (aim for 50–100 marked setups) before trading it live
          with real size. Once live, the journal takes over — it&apos;s the same data collection, just on trades you
          actually took instead of historical ones.
        </p>
      </Section>

      <Section label='WHEN' title='When to review'>
        <InfoGrid
          items={[
            {
              title: 'Weekly review',
              detail:
                "Look at the last week's trades together — check win rate, average R, and how many were rule-following vs impulsive.",
            },
            {
              title: 'After every losing streak',
              detail:
                'Pull up the journal before assuming the strategy is broken — often it reveals a run of rule-broken trades instead.',
            },
          ]}
        />
      </Section>

      <Section label='EXAMPLE' title='Putting it together'>
        <ExampleBox
          instrument='Journal entry — Crude Oil Mini Futures'
          scenario='Trade tagged as Strategy 01 (Price Action). Entered short on a bearish engulfing candle at a 3-touch resistance zone.'
          entry='6,775 — rule followed: yes (zone + confirmation both present).'
          stop='6,815 (outer wick of zone) — hit? No.'
          target='6,650 hit — result: +3.1R, closed as planned.'
          note='Logged this way, 50 trades later you can filter just Strategy 01 entries and see its real win rate and average R — not a guess.'
        />
      </Section>
    </StrategyLayout>
  );
}
