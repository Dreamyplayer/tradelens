import ExampleBox from '@/components/strategies/ExampleBox';
import InfoGrid from '@/components/strategies/InfoGrid';
import Section from '@/components/strategies/Section';
import StrategyLayout from '@/components/strategies/StrategyLayout';
import DrawdownRecoveryDiagram from '@/components/svg/DrawdownRecoveryDiagram';
import PositionSizingDiagram from '@/components/svg/PositionSizingDiagram';

export default function RiskManagementPage() {
  return (
    <StrategyLayout
      eyebrow='FOUNDATION 01'
      title='Risk Management'
      subtitle='The part that actually determines whether any of the previous four strategies keep you in the game long enough to work.'
    >
      <Section label='WHAT' title='What risk management actually means'>
        <p>
          It&apos;s not a strategy — it&apos;s the layer that sits underneath every strategy. Even a setup with a genuine edge
          fails an account if position sizing is wrong. The two numbers that matter most on every single trade:{' '}
          <strong>how much you risk</strong> (in money, not points) and{' '}
          <strong>where your stop invalidates the idea</strong>.
        </p>
      </Section>

      <Section label='HOW' title='How position sizing actually works'>
        <p>
          You don&apos;t pick a lot size first and then see what happens. You fix a risk amount first — usually{' '}
          <strong>0.5–1% of account capital per trade</strong> — then work backward from your stop distance to find the
          size.
        </p>
        <p className='font-mono text-sm text-neutral-400'>
          Position size = (Account × Risk%) ÷ Stop distance in points
        </p>
        <PositionSizingDiagram />
        <p className='text-sm text-neutral-500'>
          A tighter, well-placed stop lets you trade a larger size for the same rupee risk — another reason precise
          entries (from strategies 01–04) matter, not just direction.
        </p>
      </Section>

      <Section label='WHY' title='Why the risk % matters more than the win rate'>
        <p>
          Losses and gains are not symmetric. A loss of a given % requires a larger % gain just to get back to even —
          and that gap grows fast as the loss deepens.
        </p>
        <DrawdownRecoveryDiagram />
        <p>
          This is why risking 1% per trade survives a 10-loss streak (down ~10%), while risking 10% per trade is
          functionally wiped out by the same streak. The strategy&apos;s win rate barely matters if the position sizing
          behind it is reckless.
        </p>
      </Section>

      <Section label='WHICH' title='Which reward-to-risk ratio to demand'>
        <InfoGrid
          items={[
            {
              title: 'Minimum 1.5–2 : 1',
              detail:
                'Target should be at least 1.5–2x your stop distance. Below that, even a good win rate struggles to be profitable after costs.',
            },
            {
              title: '2–3 : 1 is the sweet spot',
              detail:
                'Matches well with the setups in strategies 01–04 (zone rejections, pullbacks, breakouts, order block returns) which naturally offer this kind of room.',
            },
            {
              title: 'Win rate needed at 2:1',
              detail:
                'You only need to be right ~35–40% of the time to be profitable at a 2:1 reward-to-risk — the ratio does most of the work.',
            },
          ]}
        />
      </Section>

      <Section label='WHEN' title='When to cut size or stop trading for the day'>
        <InfoGrid
          tone='bad'
          items={[
            {
              title: 'Daily loss limit hit',
              detail:
                "Set a hard stop for the day (e.g. -3% of account) and close the platform. Trading to 'win it back' is the single most common way accounts blow up.",
            },
            {
              title: 'After 2–3 consecutive losses',
              detail:
                'Step back and check if the setups being taken actually match the rules in strategies 01–04, or if you drifted into impulsive entries.',
            },
          ]}
        />
        <InfoGrid
          tone='good'
          items={[
            {
              title: 'Reduce size, not conviction',
              detail:
                'During a losing streak, cut size in half rather than stopping the strategy entirely — keeps you in the game while limiting damage.',
            },
          ]}
        />
      </Section>

      <Section label='EXAMPLE' title='Putting it together'>
        <ExampleBox
          instrument='Crude Oil Mini Futures — ₹2,00,000 account'
          scenario="Risk per trade set at 1% (₹2,000). Setup from the price-action strategy gives a stop distance of 20 points, with Crude Mini's ₹10 per point value."
          entry='Position size = ₹2,000 ÷ (20 pts × ₹10/pt) = 10 lots.'
          stop='20 points from entry, exactly as marked on the S/R zone.'
          target="At 2:1 reward-to-risk, that's a 40-point target — same setup, sized correctly."
          note="Notice the strategy didn't change — only the size behind it was calculated deliberately instead of guessed."
        />
      </Section>
    </StrategyLayout>
  );
}
