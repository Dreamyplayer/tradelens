import StrategyCard from '@/components/strategies/StrategyCard';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategies — TradeLens',
  description: 'Four core day trading strategies and seven foundations, each with full visual breakdowns.',
};

export default function StrategiesPage() {
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-100'>
      <div className='max-w-6xl mx-auto px-6 py-20'>
        <p className='text-xs font-mono tracking-widest text-neutral-500'>DAY TRADING STRATEGIES</p>
        <h1 className='text-4xl font-bold mt-2 mb-4 text-neutral-50'>Core strategy deep-dives</h1>
        <p className='text-neutral-400 mb-12 max-w-2xl'>
          Four of the most widely used, market-agnostic approaches — with full visual breakdowns of how, when, why,
          where and which setups to look for.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <StrategyCard
            href='/strategies/price-action'
            index='STRATEGY 01'
            title='Price Action + Support/Resistance'
            description='Trading reactions at key zones using pure chart structure and candlestick confirmation — no indicators needed.'
            accent='text-emerald-500'
          />
          <StrategyCard
            href='/strategies/trend-following'
            index='STRATEGY 02'
            title='Trend Following (MA / VWAP pullback)'
            description='Riding the dominant trend by entering on pullbacks toward a rising or falling average.'
            accent='text-blue-500'
          />
          <StrategyCard
            href='/strategies/breakout'
            index='STRATEGY 03'
            title='Breakout Trading'
            description='Catching momentum expansion as price escapes a tightening consolidation range.'
            accent='text-amber-500'
          />
          <StrategyCard
            href='/strategies/smc'
            index='STRATEGY 04'
            title='Smart Money Concepts'
            description='BOS, CHoCH, Order Blocks and Fair Value Gaps — reading structure shifts and institutional footprints.'
            accent='text-purple-500'
          />
        </div>

        <p className='text-xs font-mono tracking-widest text-neutral-500 mt-16 p-4'>FOUNDATIONS</p>
        <div className='grid sm:grid-cols-2 gap-4'>
          <StrategyCard
            href='/strategies/risk-management'
            index='FOUNDATION 01'
            title='Risk Management'
            description='Position sizing, reward-to-risk ratios, and drawdown math — the layer underneath every strategy above.'
            accent='text-rose-500'
          />
          <StrategyCard
            href='/strategies/psychology'
            index='FOUNDATION 02'
            title='Trading Psychology & Discipline'
            description='Why good setups still fail — revenge trading, FOMO, overtrading, and how to build a rules-based process.'
            accent='text-rose-500'
          />
          <StrategyCard
            href='/strategies/session-timing'
            index='FOUNDATION 03'
            title='Session Timing'
            description='Why the same setup behaves differently by time of day, and which windows suit which strategy.'
            accent='text-rose-500'
          />
          <StrategyCard
            href='/strategies/journaling'
            index='FOUNDATION 04'
            title='Journaling & Backtesting'
            description='How to actually prove a strategy has an edge instead of guessing from your last few trades.'
            accent='text-rose-500'
          />
          <StrategyCard
            href='/strategies/market-conditions'
            index='FOUNDATION 05'
            title='Market Conditions'
            description='Trending, ranging, or choppy — read this first, since it decides which strategy above even applies.'
            accent='text-rose-500'
          />
          <StrategyCard
            href='/strategies/multi-timeframe'
            index='FOUNDATION 06'
            title='Multi-Timeframe Analysis'
            description='A top-down method for bias, structure, and entry — so every trade agrees with the bigger picture.'
            accent='text-rose-500'
          />
          <StrategyCard
            href='/strategies/trade-management'
            index='FOUNDATION 07'
            title='Trade Management'
            description='Breakeven, partial exits, trailing stops — what to do while the trade is still open.'
            accent='text-rose-500'
          />
        </div>

        <p className='text-xs font-mono tracking-widest text-neutral-500 mt-16 p-4'>GUIDES</p>
        <div className='grid sm:grid-cols-2 gap-4'>
          <StrategyCard
            href='/strategies/workflow'
            index='GUIDE'
            title='Complete Trading Workflow'
            description='Every page on this site in one sequence — from reading conditions to journaling the result.'
            accent='text-sky-500'
          />
          <StrategyCard
            href='/strategies/checklist'
            index='GUIDE'
            title='Pre-Trade Checklist'
            description='An interactive checklist to run through before every entry.'
            accent='text-sky-500'
          />
          <StrategyCard
            href='/strategies/common-mistakes'
            index='GUIDE'
            title='Common Mistakes'
            description='Every recurring error from every page on this site, collected in one place.'
            accent='text-sky-500'
          />
          <StrategyCard
            href='/strategies/faq'
            index='GUIDE'
            title='Frequently Asked Questions'
            description='Quick answers to the questions that come up most.'
            accent='text-sky-500'
          />
        </div>
      </div>
    </main>
  );
}
