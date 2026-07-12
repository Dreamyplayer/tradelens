import ExampleBox from '@/components/strategies/ExampleBox';
import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import MTFDiagram from '@/components/svg/MTFDiagram';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multi-Timeframe Analysis — TradeLens',
  description: 'A top-down method for bias, structure, and entry timing across timeframes.',
};

export default function MultiTimeframePage() {
  return (
    <StrategyLayout
      eyebrow='FOUNDATION 06'
      title='Multi-Timeframe Analysis'
      subtitle='A top-down method for making sure every entry agrees with the bigger picture instead of fighting it.'
    >
      <Section label='WHAT' title='What it solves'>
        <p>
          The same 15-minute chart can look like a great long setup in isolation, and a terrible one once you check the
          4-hour chart shows a strong downtrend. Multi-timeframe analysis is simply checking a higher timeframe before
          trusting a lower one — three layers, each with one job.
        </p>
        <MTFDiagram />
      </Section>

      <Section label='HOW' title='How the three layers work together'>
        <InfoGrid
          items={[
            {
              title: 'HTF — Bias',
              detail:
                'A higher timeframe (4H or Daily for day trading) tells you the only direction worth trading — long-only or short-only for the session.',
            },
            {
              title: 'MTF — Structure',
              detail:
                "A middle timeframe (1H) confirms the HTF bias is actually intact right now — structure hasn't broken, a pullback is in progress not a reversal.",
            },
            {
              title: 'LTF — Entry',
              detail:
                'A lower timeframe (15m or 5m) is where the actual trigger happens — the confirmation candle, CHoCH, or zone reaction from strategies 01–04.',
            },
          ]}
        />
      </Section>

      <Section label='WHICH' title='Which timeframe combinations work for day trading'>
        <InfoGrid
          items={[
            {
              title: '4H bias / 1H structure / 15m entry',
              detail: 'Good default for a full day-trading session with several potential setups.',
            },
            {
              title: '1H bias / 15m structure / 5m entry',
              detail: 'Tighter combination for faster, more frequent entries within a single session.',
            },
          ]}
        />
        <p className='text-sm text-neutral-500'>
          Whichever combination you pick, keep the ratio between layers wide enough that each timeframe is genuinely
          showing you something new — three timeframes that are almost the same speed defeats the purpose.
        </p>
      </Section>

      <Section label='WHY' title='Why this improves every strategy on this site'>
        <p>
          Every setup in strategies 01–04 works better when it&apos;s already agreeing with the larger trend instead of
          trying to call a reversal. Multi-timeframe analysis is the mechanism that enforces this — it&apos;s not a separate
          strategy, it&apos;s the filter that decides which trades from the other four are worth taking in the first place.
        </p>
      </Section>

      <Section label='WHEN' title='When the timeframes disagree'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'HTF and LTF point opposite directions',
              detail:
                "Skip the trade. A perfect-looking LTF setup against the HTF bias is exactly the kind of trade that looks great until it doesn't.",
            },
            {
              title: 'MTF structure just broke',
              detail:
                'If the middle timeframe shows a fresh CHoCH against your bias, treat the HTF bias as no longer confirmed until new structure forms.',
            },
          ]}
        />
      </Section>

      <Section label='EXAMPLE' title='Putting it together'>
        <ExampleBox
          instrument='Nifty 50 Futures'
          scenario='4H chart shows a clean uptrend (bias: long only). 1H chart shows price pulling back toward the rising 20 EMA with structure still intact. 15m chart prints a bullish engulfing candle right at that pullback zone.'
          entry="Long on the 15m engulfing candle's close — all three layers agree."
          stop='Below the 15m pullback low.'
          target='Prior HTF swing high, trailed as structure allows.'
          note='If the 4H had instead shown a downtrend, this exact 15m candle would have been skipped entirely.'
        />
      </Section>
    </StrategyLayout>
  );
}
