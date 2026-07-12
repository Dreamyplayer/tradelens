import StrategyLayout from "@/components/strategies/StrategyLayout";
import Section from "@/components/strategies/Section";
import InfoGrid from "@/components/strategies/InfoGrid";
import TrendStructureDiagram from "@/components/svg/TrendStructureDiagram";
import MAPullbackDiagram from "@/components/svg/MAPullbackDiagram";
import ExampleBox from "@/components/strategies/ExampleBox";

export default function TrendFollowingPage() {
  return (
    <StrategyLayout
      eyebrow="STRATEGY 02"
      title="Trend Following (MA / VWAP Pullback)"
      subtitle="Trading with the dominant direction of the market instead of guessing reversals."
    >
      <Section label="WHAT" title="What defines a trend">
        <p>
          A trend is defined by market <strong>structure</strong>: a series
          of Higher Highs and Higher Lows (uptrend), or Lower Highs and Lower
          Lows (downtrend). A rising or falling moving average (commonly the
          20 EMA, or VWAP for intraday) is a visual shortcut for the same
          thing — its slope tells you the trend direction at a glance.
        </p>
        <TrendStructureDiagram />
      </Section>

      <Section label="WHERE" title="Where the entry zone is">
        <p>
          The entry zone is the <strong>pullback</strong> — the shallow dip
          back toward the moving average or the last higher-low, inside an
          established uptrend (or the equivalent bounce toward a falling
          average in a downtrend). You are not chasing the breakout candle;
          you are buying the rest.
        </p>
        <MAPullbackDiagram />
      </Section>

      <Section label="HOW" title="How to execute it">
        <InfoGrid
          items={[
            {
              title: "1. Identify trend",
              detail:
                "Higher timeframe first (e.g. 1H/4H) — confirm HH/HL structure or MA sloping clearly in one direction.",
            },
            {
              title: "2. Wait for pullback",
              detail:
                "Let price retrace toward the MA/VWAP or a prior structure point. Don't enter mid-trend on impulse.",
            },
            {
              title: "3. Confirm the bounce",
              detail:
                "Look for a bullish (or bearish) candle/price-action confirmation exactly at the pullback zone — same idea as strategy 01.",
            },
            {
              title: "4. Enter with trend",
              detail:
                "Stop below the pullback low (uptrend) or above the pullback high (downtrend). Target the prior high/next structure point.",
            },
          ]}
        />
      </Section>

      <Section label="WHICH" title="Which tools to use">
        <InfoGrid
          items={[
            {
              title: "20 EMA",
              detail:
                "Fast-reacting, good for active trend pullbacks on lower timeframes.",
            },
            {
              title: "50 EMA/SMA",
              detail:
                "Slower, better for confirming the larger underlying trend.",
            },
            {
              title: "VWAP",
              detail:
                "Intraday favorite — represents the average price actually traded at, strong institutional reference level.",
            },
          ]}
        />
      </Section>

      <Section label="WHY" title="Why trend following works">
        <p>
          Markets trend because information and order flow don&apos;t get
          absorbed instantly — participants build positions over time. Once a
          trend is established, continuation is statistically more likely
          than an immediate reversal, because the same forces that started
          the move (accumulating buyers or sellers) are usually still active.
          Trading pullbacks instead of tops/bottoms means you&apos;re
          entering with that existing momentum, not against it.
        </p>
      </Section>

      <Section label="WHEN" title="When to sit out">
        <InfoGrid
          tone="bad"
          items={[
            {
              title: "Choppy / sideways market",
              detail:
                "If price isn't making clear HH/HL or LH/LL, the MA will flatten and whipsaw — skip trend-following here, this is breakout/range territory instead.",
            },
            {
              title: "Structure break",
              detail:
                "If a pullback breaks well past the prior higher-low (or lower-high), the trend may be reversing — don't force a continuation trade.",
            },
          ]}
        />
      </Section>

      <Section label="EXAMPLE" title="Putting it together">
        <ExampleBox
          instrument="Nifty 50 Futures"
          scenario="4H chart shows clear HH/HL structure above a rising 20 EMA. Price pulls back and taps the EMA, printing a bullish pin bar."
          entry="Long on the close of the pin bar, just above its high."
          stop="Below the pin bar's low / the last higher-low."
          target="Previous swing high — trail further if structure keeps making new HHs."
          note="If the pullback undercuts the prior higher-low by a wide margin, structure may be shifting — skip the trade instead of forcing it."
        />
      </Section>
    </StrategyLayout>
  );
}
