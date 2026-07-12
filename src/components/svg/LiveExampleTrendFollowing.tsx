/**
 * Live visual example matching the Trend Following worked example:
 * uptrend, pullback to the rising 20 EMA, bullish pin bar confirmation,
 * long entry with SL below the pin bar low and target at prior swing high.
 */
export default function LiveExampleTrendFollowing() {
  return (
    <svg viewBox='0 0 700 400' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* EMA line */}
      <path
        d='M 30 360 C 130 320, 220 290, 300 260 C 380 232, 460 190, 630 100'
        fill='none'
        stroke='#3b82f6'
        strokeWidth='2'
        strokeDasharray='6 4'
      />
      <text x='500' y='140' fill='#3b82f6' fontSize='12' fontFamily='monospace'>
        20 EMA
      </text>

      {/* Price path */}
      <path
        d='M 30 380 C 80 340, 120 310, 160 300
           C 200 292, 230 285, 260 290
           C 285 294, 295 288, 305 275
           C 320 250, 350 200, 400 150
           C 450 105, 520 70, 630 30'
        fill='none'
        stroke='#e4e4e7'
        strokeWidth='2.5'
      />

      {/* Pin bar at pullback */}
      <line x1='280' y1='260' x2='280' y2='300' stroke='#71717a' strokeWidth='1.5' />
      <rect x='273' y='284' width='14' height='10' fill='#10b981' />

      {/* SL line */}
      <line x1='30' y1='300' x2='630' y2='300' stroke='#ef4444' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='10' y='304' fill='#ef4444' fontSize='11' fontFamily='monospace'>
        SL
      </text>
      <text x='500' y='315' fill='#ef4444' fontSize='12' fontFamily='monospace'>
        below pin bar low
      </text>

      {/* Entry line */}
      <line x1='30' y1='270' x2='630' y2='270' stroke='#10b981' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='450' y='264' fill='#10b981' fontSize='12' fontFamily='monospace'>
        Entry — above pin bar high
      </text>

      {/* Target line */}
      <line x1='30' y1='45' x2='630' y2='45' stroke='#f59e0b' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='420' y='38' fill='#f59e0b' fontSize='12' fontFamily='monospace'>
        Target — prior swing high
      </text>

      <text x='280' y='330' fill='#a1a1aa' fontSize='10' fontFamily='monospace' textAnchor='middle'>
        pullback + pin bar
      </text>
    </svg>
  );
}
