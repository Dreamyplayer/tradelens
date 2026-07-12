import ExampleBox from '@/components/strategies/ExampleBox';
import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import BOSCHoCHDiagram from '@/components/svg/BOSCHoCHDiagram';
import FVGDiagram from '@/components/svg/FVGDiagram';
import LiveExampleSMC from '@/components/svg/LiveExampleSMC';
import OrderBlockDiagram from '@/components/svg/OrderBlockDiagram';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Money Concepts — TradeLens',
  description: 'BOS, CHoCH, Order Blocks, and Fair Value Gaps — reading structure shifts and institutional footprints.',
};

export default function SMCPage() {
  return (
    <StrategyLayout
      eyebrow='STRATEGY 04'
      title='Smart Money Concepts (SMC)'
      subtitle='Reading structure shifts and institutional footprints — BOS, CHoCH, Order Blocks, and Fair Value Gaps.'
    >
      <Section label='WHAT' title='What SMC actually is'>
        <p>
          SMC is price action with a specific lens: instead of just trading reactions at zones, you track{' '}
          <strong>where structure shifts happen</strong> and <strong>where large orders likely got placed</strong>{' '}
          before a strong move. It&apos;s built on four core ideas — BOS, CHoCH, Order Blocks, and Fair Value Gaps —
          used together, not in isolation.
        </p>
      </Section>

      <Section label='WHICH' title='BOS vs CHoCH — reading structure shifts'>
        <p>
          <strong>BOS (Break of Structure)</strong> is a break in the direction of the existing trend — it confirms the
          trend is continuing. <strong>CHoCH (Change of Character)</strong> is a break against the trend — the first
          technical sign the trend may be reversing.
        </p>
        <BOSCHoCHDiagram />
        <p className='text-sm text-neutral-500'>
          In an uptrend: a new higher-high forming = BOS (continuation). A higher-low failing and price breaking below
          it = CHoCH (possible reversal).
        </p>
      </Section>

      <Section label='WHERE' title='Where Order Blocks form'>
        <p>
          An <strong>Order Block</strong> is the last opposing candle before a strong impulsive move. A bullish order
          block is the last down candle right before price rallies hard — it marks where large buy orders likely
          accumulated. Price often returns to this zone once (to &quot;mitigate&quot; it, filling remaining orders)
          before continuing.
        </p>
        <OrderBlockDiagram />
      </Section>

      <Section label='WHAT' title='What a Fair Value Gap (FVG) is'>
        <p>
          An FVG is a 3-candle imbalance: a strong middle candle whose range leaves a gap between candle 1&apos;s high
          and candle 3&apos;s low — meaning almost no orders were filled at those prices during the move. These untraded
          gaps act like a magnet; price frequently returns to &quot;fill&quot; part of the gap before continuing in the
          original direction.
        </p>
        <FVGDiagram />
      </Section>

      <Section label='HOW' title='How to combine them into one trade'>
        <InfoGrid
          items={[
            {
              title: '1. Read higher-timeframe bias',
              detail: 'Determine overall structure — recent BOS confirms trend direction on your bias timeframe.',
            },
            {
              title: '2. Wait for a CHoCH on a lower timeframe',
              detail:
                'A CHoCH on a smaller timeframe, inside a pullback of the bigger trend, signals the pullback is ending and the main trend may resume.',
            },
            {
              title: '3. Mark the Order Block / FVG left behind',
              detail:
                'The impulsive move that caused the CHoCH usually leaves an order block and/or FVG right behind it.',
            },
            {
              title: '4. Enter on the return to that zone',
              detail:
                'Enter when price comes back to mitigate the order block or fill part of the FVG, with a tight stop beyond the zone.',
            },
          ]}
        />
      </Section>

      <Section label='WHY' title='Why this works'>
        <p>
          Large participants can&apos;t fill huge orders at a single price without moving the market, so they place
          layered orders across a zone (the order block) and often leave inefficient price gaps (FVGs) behind as they
          push price quickly. Structure breaks (BOS/CHoCH) are simply the visible footprint of that order flow shifting
          direction. It&apos;s the same underlying logic as strategy 01&apos;s S/R zones, just applied with more
          precision to where the origin of a move actually was.
        </p>
      </Section>

      <Section label='WHEN' title='When to be careful'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Too many timeframes at once',
              detail:
                'Beginners often mark BOS/CHoCH on every timeframe and get conflicting signals — pick one bias timeframe and one entry timeframe, stay disciplined.',
            },
            {
              title: 'Order block already mitigated',
              detail:
                "An order block that's already been revisited and broken through has done its job — don't keep trading a used zone.",
            },
          ]}
        />
      </Section>

      <Section label='EXAMPLE' title='Putting it together'>
        <LiveExampleSMC />
        <ExampleBox
          instrument='Crude Oil Mini Futures'
          scenario='15-min chart shows a CHoCH confirming a pullback is over within a larger uptrend. The impulsive move up that caused the CHoCH leaves a bullish order block and an FVG stacked in the same 6,420–6,440 area.'
          entry='Long when price returns into the 6,420–6,440 zone with a bullish confirmation candle.'
          stop="Below the order block's low, around 6,405."
          target='Next liquidity point — the prior swing high before the CHoCH.'
          note='The overlap of order block + FVG in the same zone is the confluence that makes this entry stronger than either signal alone.'
        />
      </Section>
    </StrategyLayout>
  );
}
