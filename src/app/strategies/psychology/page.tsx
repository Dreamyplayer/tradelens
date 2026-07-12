import ExampleBox from '@/components/strategies/ExampleBox';
import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import EmotionalCycleDiagram from '@/components/svg/EmotionalCycleDiagram';

export default function PsychologyPage() {
  return (
    <StrategyLayout
      eyebrow='FOUNDATION 02'
      title='Trading Psychology & Discipline'
      subtitle='The setups and the sizing can both be right and the account still bleeds out — this is usually why.'
    >
      <Section label='WHAT' title='What actually breaks accounts'>
        <p>
          {`
          It's rarely a bad strategy. It's a good strategy executed
          inconsistently — skipping the confirmation candle because you're
          impatient, moving a stop loss because you don't want to be wrong,
          or doubling size after a loss to "get it back." Every rule you
          learned in strategies 01–04 only works if you actually follow it
          under pressure, not just on a calm chart review.
        `}
        </p>
      </Section>

      <Section label='WHY' title='Why the emotional cycle works against you'>
        <p>
          Most retail traders unconsciously buy into euphoria (near tops) and sell into panic (near bottoms) — the exact
          opposite of the rules-based entries you&apos;ve already learned.
        </p>
        <EmotionalCycleDiagram />
        <p className='text-sm text-neutral-500'>
          A rules-based entry (zone + confirmation candle, pullback + bounce, breakout + volume) is specifically
          designed to pull you out of this cycle and into a repeatable process instead.
        </p>
      </Section>

      <Section label='WHICH' title='Which traps to know by name'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Revenge trading',
              detail:
                "Immediately re-entering, often bigger, right after a loss to 'win it back.' Almost always ignores the actual setup rules.",
            },
            {
              title: 'FOMO entries',
              detail:
                "Jumping into a move that's already extended because it 'looks like it's running away' — no zone, no confirmation, pure impulse.",
            },
            {
              title: 'Overtrading',
              detail:
                "Taking marginal setups just to be 'in the market,' instead of waiting for the specific conditions from strategies 01–04.",
            },
            {
              title: 'Moving the stop loss',
              detail:
                "Widening a stop after entry because you don't want to accept being wrong — this quietly breaks the entire risk-management plan.",
            },
          ]}
        />
      </Section>

      <Section label='HOW' title='How to build discipline that survives pressure'>
        <InfoGrid
          items={[
            {
              title: 'Write the rules down',
              detail:
                "A setup that isn't written down bends under pressure. Keep a short checklist per strategy (zone touched? confirmation candle closed? size calculated?) and require all boxes checked before entry.",
            },
            {
              title: 'Decide exits before entry',
              detail:
                "Stop and target are set the moment you enter, not adjusted afterward based on how the trade 'feels.'",
            },
            {
              title: 'Separate the loss from the process',
              detail:
                "A loss on a rule-following trade is not a mistake — it's a cost of doing business. Only rule-breaking is a mistake worth reviewing.",
            },
          ]}
        />
      </Section>

      <Section label='WHEN' title='When to stop for the day, no exceptions'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'After hitting the daily loss limit',
              detail:
                'Set from the risk-management foundation — once hit, the platform closes. This decision is made in advance, not in the moment.',
            },
            {
              title: 'After an emotional trade, win or lose',
              detail:
                'A trade taken outside the rules — even one that wins — is a signal to stop and reset, not a reason to keep going.',
            },
          ]}
        />
      </Section>

      <Section label='EXAMPLE' title='Putting it together'>
        <ExampleBox
          instrument='Crude Oil Mini Futures'
          scenario='A stop loss gets hit on a valid price-action short. Within two minutes, price starts moving back down without a new setup forming.'
          entry="No new entry — there's no fresh zone touch or confirmation candle, only the urge to re-enter."
          stop='N/A — this is the discipline check, not a new trade.'
          target='Wait for the next valid setup on the actual chart, even if it means missing this move.'
          note="The trade that isn't taken here is the one that protects the account from a revenge-trading spiral."
        />
      </Section>
    </StrategyLayout>
  );
}
