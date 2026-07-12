import ExampleBox from '@/components/strategies/ExampleBox';
import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import TradeManagementDiagram from '@/components/svg/TradeManagementDiagram';

export default function TradeManagementPage() {
  return (
    <StrategyLayout
      eyebrow='FOUNDATION 07'
      title='Trade Management'
      subtitle='What happens between entry and exit — this is where good entries either get protected or given back.'
    >
      <Section label='WHAT' title='What trade management covers'>
        <p>
          Every page so far ends at entry, stop, and target. Trade management is the decision-making{' '}
          <strong>while the trade is open</strong> — moving the stop, taking partial profits, and trailing the
          remainder. Done well, it protects capital on trades that stall and lets genuine winners run further than a
          fixed target would.
        </p>
        <TradeManagementDiagram />
      </Section>

      <Section label='HOW' title='How the three techniques work'>
        <InfoGrid
          items={[
            {
              title: 'Move to breakeven',
              detail:
                'Once price has moved a defined distance in your favor (commonly 1R), move the stop to entry price. The trade can no longer become a loss — only breakeven or a win.',
            },
            {
              title: 'Partial profit',
              detail:
                'Close a portion of the position (e.g. half) at the first realistic target, locking in a partial win while leaving the rest open for further movement.',
            },
            {
              title: 'Trailing stop',
              detail:
                'For the remaining size, trail the stop behind new structure points — the last higher-low in a trend, or the last mitigated order block in SMC — instead of exiting at one fixed target.',
            },
          ]}
        />
      </Section>

      <Section label='WHICH' title='Which technique fits which strategy'>
        <InfoGrid
          items={[
            {
              title: 'Strategy 01 (Price Action)',
              detail:
                'Zones tend to have a natural opposite zone as a target — partial at that zone, trail the rest if it breaks through.',
            },
            {
              title: 'Strategy 02 (Trend Following)',
              detail:
                'Trail behind each new higher-low (or lower-high) as the trend continues — this strategy is built for trailing.',
            },
            {
              title: 'Strategy 03 (Breakout)',
              detail:
                'Use the measured-move target as the partial-exit point, trail the remainder if momentum keeps expanding.',
            },
            {
              title: 'Strategy 04 (SMC)',
              detail: 'Trail behind newly formed order blocks / structure points as price progresses through the move.',
            },
          ]}
        />
      </Section>

      <Section label='WHY' title='Why this matters'>
        <p>
          A fixed target alone caps every winner at the same size regardless of how strong the move actually turns out
          to be. Active trade management lets the position size itself down as risk is removed (via breakeven and
          partials), while still capturing outsized moves when the market provides them — which is where a strategy&apos;s
          overall average R multiple usually comes from.
        </p>
      </Section>

      <Section label='WHEN' title='When not to touch the trade'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Widening the stop',
              detail:
                "Never move a stop further away from entry to 'give it more room.' This is the same discipline breach covered in Trading Psychology, just disguised as trade management.",
            },
            {
              title: 'Trailing too tight, too early',
              detail:
                'Moving the stop up immediately on the first small wiggle in your favor often stops out trades that would have worked — trail behind actual structure, not every candle.',
            },
          ]}
        />
      </Section>

      <Section label='EXAMPLE' title='Putting it together'>
        <ExampleBox
          instrument='Crude Oil Mini Futures'
          scenario='A Strategy 02 long reaches +1R profit, then continues making fresh higher-lows as the uptrend extends.'
          entry='Stop moved to breakeven at +1R. Half the position closed at the first swing-high target (+2R on that half).'
          stop='Remaining half trailed behind each new higher-low as it forms.'
          target='No fixed final target — the trail exits automatically when a higher-low finally breaks.'
          note='This turned a standard 2:1 setup into a larger blended return, without changing the original entry rules at all.'
        />
      </Section>
    </StrategyLayout>
  );
}
