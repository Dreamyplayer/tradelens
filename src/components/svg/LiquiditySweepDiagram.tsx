/**
 * Liquidity sweep: price wicks below an obvious swing low (where stops
 * are resting) before reversing sharply — the classic "stop hunt".
 */
export default function LiquiditySweepDiagram() {
  return (
    <svg viewBox='0 0 660 300' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Equal lows / liquidity pool line */}
      <line x1='40' y1='200' x2='480' y2='200' stroke='#f59e0b' strokeWidth='1' strokeDasharray='4 4' />
      <text x='45' y='192' fill='#f59e0b' fontSize='11' fontFamily='monospace'>
        equal lows — liquidity resting below (stop losses)
      </text>

      {/* Price path: two equal lows, then a sweep below, then sharp reversal up */}
      <path
        d='M 40 100 C 90 150, 130 195, 160 198
           C 190 200, 220 160, 260 130
           C 300 100, 330 160, 360 198
           C 390 230, 410 245, 430 250
           C 450 253, 460 248, 470 235
           C 490 205, 520 130, 580 50'
        fill='none'
        stroke='#e4e4e7'
        strokeWidth='2.5'
      />

      {/* First equal low */}
      <circle cx='175' cy='199' r='4' fill='#a1a1aa' />
      {/* Second equal low (the pool) */}
      <circle cx='345' cy='199' r='4' fill='#a1a1aa' />

      {/* The sweep - wicks below the line */}
      <circle cx='430' cy='250' r='5' fill='#ef4444' />
      <line x1='430' y1='200' x2='430' y2='250' stroke='#ef4444' strokeWidth='1.5' strokeDasharray='2 3' />
      <text x='440' y='270' fill='#ef4444' fontSize='12' fontFamily='monospace'>
        sweep — stops triggered
      </text>

      {/* Reversal marker */}
      <text x='490' y='90' fill='#10b981' fontSize='12' fontFamily='monospace'>
        sharp reversal confirms
      </text>
      <text x='490' y='106' fill='#10b981' fontSize='12' fontFamily='monospace'>
        the sweep was a trap
      </text>
    </svg>
  );
}
