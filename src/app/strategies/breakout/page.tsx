import StrategyLayout from "@/components/strategies/StrategyLayout";
import Section from "@/components/strategies/Section";
import InfoGrid from "@/components/strategies/InfoGrid";
import BreakoutDiagram from "@/components/svg/BreakoutDiagram";
import FalseBreakoutDiagram from "@/components/svg/FalseBreakoutDiagram";

export default function BreakoutPage() {
  return (
    <StrategyLayout
      eyebrow="STRATEGY 03"
      title="Breakout Trading"
      subtitle="Catching the momentum expansion when price finally escapes a compressed range."
    >
      <Section label="WHAT" title="What a breakout setup looks like">
        <p>
          A breakout is a move where price exits a defined range —
          consolidation, triangle, or flag — with enough force to close
          clearly beyond the boundary. The setup you want is a{" "}
          <strong>tightening</strong> range: candles getting smaller,
          volume drying up, price coiling right at the boundary before the
          move.
        </p>
        <BreakoutDiagram />
        <p className="text-sm text-neutral-500">
          Notice the candles compress before the breakout candle, and volume
          (bottom) spikes exactly on the break — that combination is the
          signal, not the breakout candle alone.
        </p>
      </Section>

      <Section label="WHERE" title="Where to mark the range">
        <InfoGrid
          items={[
            {
              title: "Range boundaries",
              detail:
                "Draw the top and bottom from the clearest recent swing high/low that price has repeatedly failed to close beyond.",
            },
            {
              title: "Compression point",
              detail:
                "The tightest part of the range — smallest candle bodies, closest to the boundary — is usually where the eventual break originates.",
            },
          ]}
        />
      </Section>

      <Section label="HOW" title="How to enter — and how to avoid the trap">
        <p>
          The biggest risk in breakout trading is the <strong>false
          breakout</strong>: a wick pokes past the range but the candle closes
          back inside, trapping early entries.
        </p>
        <FalseBreakoutDiagram />
        <InfoGrid
          items={[
            {
              title: "Aggressive entry",
              detail:
                "Enter as the breakout candle closes beyond the range with a clear volume spike. Higher reward, higher false-breakout risk.",
            },
            {
              title: "Retest entry (safer)",
              detail:
                "Wait for price to break, then pull back to retest the broken boundary as new support/resistance before entering — same role-reversal idea from strategy 01.",
            },
          ]}
        />
      </Section>

      <Section label="WHICH" title="Which breakout types to know">
        <InfoGrid
          items={[
            {
              title: "Range breakout",
              detail: "Horizontal consolidation box — the most common and reliable type.",
            },
            {
              title: "Trendline breakout",
              detail: "Price breaking a diagonal trendline connecting a series of highs or lows.",
            },
            {
              title: "Triangle / flag breakout",
              detail: "A converging or parallel pattern after a strong move, usually a continuation signal.",
            },
          ]}
        />
      </Section>

      <Section label="WHY" title="Why breakouts move fast">
        <p>
          During consolidation, both buyers and sellers are trapped in a
          tight range with orders stacked just outside it. Once price
          finally closes beyond the boundary, those stacked stop-losses and
          breakout orders trigger together, creating a sudden imbalance —
          that&apos;s the momentum expansion you&apos;re trying to catch.
        </p>
      </Section>

      <Section label="WHEN" title="When breakouts are most reliable">
        <InfoGrid
          tone="good"
          items={[
            {
              title: "Session open / high-liquidity windows",
              detail:
                "Breakouts during active trading hours carry more genuine volume behind them.",
            },
            {
              title: "After clear compression",
              detail:
                "The longer and tighter the consolidation, the more significant the eventual breakout tends to be.",
            },
          ]}
        />
        <InfoGrid
          tone="bad"
          items={[
            {
              title: "Low-volume / off-hours breaks",
              detail:
                "Higher chance of a false breakout with no real follow-through.",
            },
          ]}
        />
      </Section>
    </StrategyLayout>
  );
}
