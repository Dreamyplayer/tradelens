/**
 * A single trade's lifecycle after entry: stop moved to breakeven,
 * partial profit taken at first target, remaining size trailed.
 */
export default function TradeManagementDiagram() {
  return (
    <svg viewBox='0 0 660 260' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Price path */}
      <path
        d='M 40 210 C 90 190, 130 170, 170 165 C 220 158, 250 130, 290 100 C 330 72, 370 60, 420 45 C 470 30, 520 25, 600 15'
        fill='none'
        stroke='#e4e4e7'
        strokeWidth='2.5'
      />

      {/* Entry */}
      <circle cx='40' cy='210' r='5' fill='#a1a1aa' />
      <text x='40' y='230' fill='#a1a1aa' fontSize='11' fontFamily='monospace'>
        entry
      </text>

      {/* Initial stop */}
      <line x1='30' y1='235' x2='600' y2='235' stroke='#ef4444' strokeWidth='1' strokeDasharray='4 4' />
      <text x='605' y='239' fill='#ef4444' fontSize='10'>
        initial stop
      </text>

      {/* Breakeven move point */}
      <circle cx='220' cy='158' r='5' fill='#3b82f6' />
      <text x='180' y='145' fill='#3b82f6' fontSize='11' fontFamily='monospace'>
        stop → breakeven
      </text>
      <line x1='220' y1='210' x2='420' y2='210' stroke='#3b82f6' strokeWidth='1' strokeDasharray='4 4' />

      {/* Partial exit point */}
      <circle cx='330' cy='72' r='5' fill='#10b981' />
      <text x='335' y='65' fill='#10b981' fontSize='11' fontFamily='monospace'>
        partial exit (1st target)
      </text>

      {/* Trailing stop */}
      <line x1='330' y1='140' x2='600' y2='45' stroke='#f59e0b' strokeWidth='1.5' strokeDasharray='4 4' />
      <text x='480' y='105' fill='#f59e0b' fontSize='11' fontFamily='monospace'>
        trailing stop (remaining size)
      </text>

      {/* Final exit */}
      <circle cx='600' cy='15' r='5' fill='#10b981' />
      <text x='560' y='8' fill='#10b981' fontSize='11' fontFamily='monospace'>
        runner exits on trail
      </text>
    </svg>
  );
}
