import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';

export default function CommonMistakesPage() {
  return (
    <StrategyLayout
      eyebrow='GUIDE'
      title='Common Mistakes'
      subtitle='The recurring errors from every page on this site, collected in one place.'
    >
      <Section label='ENTRY MISTAKES' title='Getting in wrong'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Entering on zone touch, no confirmation',
              detail:
                'Buying/selling the instant price reaches a zone instead of waiting for a confirmation candle (Strategy 01).',
            },
            {
              title: 'Chasing an extended move',
              detail:
                'Entering a trend well after the pullback, driven by FOMO rather than a fresh setup (Strategy 02, Psychology).',
            },
            {
              title: 'Trading the false breakout',
              detail: 'Entering on the wick instead of waiting for a confirmed close beyond the range (Strategy 03).',
            },
            {
              title: 'Ignoring higher-timeframe bias',
              detail:
                'Taking a lower-timeframe setup that directly conflicts with the higher-timeframe trend (Multi-Timeframe Analysis).',
            },
          ]}
        />
      </Section>

      <Section label='RISK MISTAKES' title='Getting the size or stop wrong'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Guessing position size',
              detail:
                'Picking a lot size first instead of calculating it from account risk % and stop distance (Risk Management).',
            },
            {
              title: 'Moving the stop loss further away',
              detail:
                'Widening a stop after entry to avoid taking the loss — the single fastest way to turn a small loss into a large one.',
            },
            {
              title: 'Risking too much per trade',
              detail:
                'Sizing trades so a normal losing streak causes serious drawdown instead of a manageable dip (Risk Management).',
            },
          ]}
        />
      </Section>

      <Section label='MANAGEMENT MISTAKES' title='Getting the exit wrong'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'No plan for the open trade',
              detail:
                'Deciding exits in the moment based on feel instead of pre-defined breakeven, partial, and trailing rules (Trade Management).',
            },
            {
              title: 'Trailing too tightly, too early',
              detail:
                'Getting stopped out of a valid trend trade by trailing behind every small candle instead of actual structure points.',
            },
          ]}
        />
      </Section>

      <Section label='PROCESS MISTAKES' title='Getting the discipline wrong'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Revenge trading',
              detail:
                'Re-entering immediately after a loss, often at larger size, without a fresh valid setup (Psychology & Discipline).',
            },
            {
              title: 'No daily loss limit',
              detail:
                'Continuing to trade after a bad string of losses instead of stopping for the day by a pre-set rule.',
            },
            {
              title: 'No journal',
              detail:
                "Judging a strategy's performance from the last few trades instead of a large enough logged sample (Journaling & Backtesting).",
            },
            {
              title: 'Trading the wrong condition',
              detail:
                'Applying a trend-following entry during a choppy, structureless market instead of matching the strategy to the condition (Market Conditions).',
            },
          ]}
        />
      </Section>
    </StrategyLayout>
  );
}
