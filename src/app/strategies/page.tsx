import StrategyCard from '@/components/strategies/StrategyCard';

export default function StrategiesPage() {
  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-100'>
      <div className='max-w-3xl mx-auto px-6 py-20'>
        <p className='text-xs font-mono tracking-widest text-neutral-500'>DAY TRADING STRATEGIES</p>
        <h1 className='text-4xl font-bold mt-2 mb-4 text-neutral-50'>Core strategy deep-dives</h1>
        <p className='text-neutral-400 mb-12'>
          Four of the most widely used, market-agnostic approaches — with full visual breakdowns of how, when, why,
          where and which setups to look for.
        </p>

        <div className='grid gap-4'>
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
      </div>
    </main>
  );
}
