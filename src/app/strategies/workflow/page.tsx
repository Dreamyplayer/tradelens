import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import WorkflowDiagram from '@/components/svg/WorkflowDiagram';
import Link from 'next/link';

export default function WorkflowPage() {
  return (
    <StrategyLayout
      eyebrow='GUIDE'
      title='Complete Trading Workflow'
      subtitle='Every page on this site fits into one sequence. This is that sequence, start to finish.'
    >
      <Section label='THE FLOW' title='From market open to journal entry'>
        <WorkflowDiagram />
      </Section>

      <Section label='STEP 1' title='Read the market condition'>
        <p>
          Before looking at any setup, classify what the market is doing right now — trending, ranging, or choppy.{' '}
          <Link href='/strategies/market-conditions' className='text-emerald-500 hover:underline'>
            Market Conditions →
          </Link>
        </p>
      </Section>

      <Section label='STEP 2' title='Set your bias top-down'>
        <p>
          Check a higher timeframe for direction, then a middle timeframe for structure, before ever looking at an entry
          timeframe.{' '}
          <Link href='/strategies/multi-timeframe' className='text-emerald-500 hover:underline'>
            Multi-Timeframe Analysis →
          </Link>
        </p>
      </Section>

      <Section label='STEP 3' title='Pick the strategy that matches'>
        <p>
          Ranging → Price Action. Trending → Trend Following or SMC. Compressing range → Breakout.{' '}
          <Link href='/strategies/price-action' className='text-emerald-500 hover:underline'>
            Price Action
          </Link>{' '}
          ·{' '}
          <Link href='/strategies/trend-following' className='text-emerald-500 hover:underline'>
            Trend Following
          </Link>{' '}
          ·{' '}
          <Link href='/strategies/breakout' className='text-emerald-500 hover:underline'>
            Breakout
          </Link>{' '}
          ·{' '}
          <Link href='/strategies/smc' className='text-emerald-500 hover:underline'>
            SMC
          </Link>
        </p>
      </Section>

      <Section label='STEP 4' title='Run the pre-trade checklist'>
        <p>
          Confirm every condition is actually met before entering — not from memory.{' '}
          <Link href='/strategies/checklist' className='text-emerald-500 hover:underline'>
            Pre-Trade Checklist →
          </Link>
        </p>
      </Section>

      <Section label='STEP 5' title='Enter with a sized position'>
        <p>
          Risk a fixed % of account, sized from the actual stop distance — never a guessed lot size.{' '}
          <Link href='/strategies/risk-management' className='text-emerald-500 hover:underline'>
            Risk Management →
          </Link>
        </p>
      </Section>

      <Section label='STEP 6' title="Manage the trade while it's open">
        <p>
          Breakeven, partial exits, trailing stops — decided by rule, not by feel.{' '}
          <Link href='/strategies/trade-management' className='text-emerald-500 hover:underline'>
            Trade Management →
          </Link>
        </p>
      </Section>

      <Section label='STEP 7' title='Journal the result'>
        <p>
          Log the setup, the outcome, and whether the rules were actually followed — this is what eventually proves (or
          disproves) an edge.{' '}
          <Link href='/strategies/journaling' className='text-emerald-500 hover:underline'>
            Journaling & Backtesting →
          </Link>
        </p>
      </Section>

      <Section label='ONGOING' title='What runs underneath every step'>
        <p>
          Session timing, psychology, and discipline aren&apos;t a single step — they apply across the whole sequence, every
          time.{' '}
          <Link href='/strategies/session-timing' className='text-emerald-500 hover:underline'>
            Session Timing
          </Link>{' '}
          ·{' '}
          <Link href='/strategies/psychology' className='text-emerald-500 hover:underline'>
            Psychology & Discipline
          </Link>{' '}
          ·{' '}
          <Link href='/strategies/common-mistakes' className='text-emerald-500 hover:underline'>
            Common Mistakes
          </Link>
        </p>
      </Section>
    </StrategyLayout>
  );
}
