/**
 * Live visual example matching the Trend Following worked example, now
 * with a hand-drawn-style callout explaining the confirmation: a bullish
 * pin bar rejecting the EMA pullback.
 */
export default function LiveExampleTrendFollowing() {
  return (
    <svg viewBox='0 0 660 460' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      <defs>
        <marker id='arrow-tf' markerWidth='8' markerHeight='8' refX='6' refY='4' orient='auto'>
          <path d='M0,0 L8,4 L0,8 Z' fill='#fbbf24' />
        </marker>
      </defs>

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
      <text x='400' y='150' transform='rotate(-20 320 140)' fill='#e4e4e7' fontSize='12' fontFamily='monospace'>
        Price path
      </text>

      {/* Pin bar at pullback */}
      <line x1='280' y1='260' x2='280' y2='300' stroke='#71717a' strokeWidth='1.5' />
      <rect x='273' y='284' width='14' height='10' fill='#10b981' />

      {/* Hand-drawn scribble circle around the pin bar */}
      <g transform='rotate(-6 280 282)'>
        <ellipse cx='280' cy='282' rx='22' ry='30' fill='none' stroke='#fbbf24' strokeWidth='2.5' opacity='0.9' />
      </g>
      <g transform='rotate(5 280 282)'>
        <ellipse cx='282' cy='280' rx='25' ry='33' fill='none' stroke='#fbbf24' strokeWidth='2' opacity='0.5' />
      </g>

      {/* SL line */}
      <line x1='30' y1='300' x2='630' y2='300' stroke='#ef4444' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='500' y='315' fill='#ef4444' fontSize='12' fontFamily='monospace'>
        SL — below pin bar low
      </text>

      {/* Entry line */}
      <line x1='30' y1='268' x2='630' y2='268' stroke='#10b981' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='480' y='262' fill='#10b981' fontSize='12' fontFamily='monospace'>
        Entry — above pin bar high
      </text>

      {/* Target line */}
      <line x1='30' y1='45' x2='630' y2='45' stroke='#f59e0b' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='440' y='38' fill='#f59e0b' fontSize='12' fontFamily='monospace'>
        Target — prior swing high
      </text>

      {/* Callout arrow + note */}
      <path
        d='M 130 400 C 180 390, 230 350, 262 305'
        fill='none'
        stroke='#fbbf24'
        strokeWidth='2'
        strokeDasharray='1 5'
        strokeLinecap='round'
        markerEnd='url(#arrow-tf)'
      />
      <g transform='rotate(-1 20 420)'>
        <rect x='20' y='380' width='290' height='56' rx='6' fill='#18181b' stroke='#fbbf24' strokeWidth='1' />
        <text x='35' y='401' fill='#fbbf24' fontSize='12' fontFamily='monospace'>
          Long lower wick rejects the EMA —
        </text>
        <text x='35' y='419' fill='#fbbf24' fontSize='12' fontFamily='monospace'>
          bullish pin bar confirms the bounce
        </text>
      </g>
    </svg>
  );
}
