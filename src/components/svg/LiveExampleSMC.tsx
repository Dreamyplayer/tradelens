/**
 * Live visual example matching the SMC worked example: a CHoCH confirms
 * the pullback is over, price returns into the stacked order block + FVG
 * zone, long entry with SL below the OB and target at the prior swing high.
 */
export default function LiveExampleSMC() {
  return (
    <svg viewBox='0 0 660 440' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Order block + FVG zone */}
      <rect x='30' y='230' width='600' height='40' fill='#3b82f6' opacity='0.14' />
      <text x='35' y='222' fill='#3b82f6' fontSize='11' fontFamily='monospace'>
        ORDER BLOCK + FVG 6,420–6,440
      </text>

      {/* Price path: down into pullback, CHoCH, impulsive move, return to zone, continuation */}
      <path
        d='M 30 130 C 90 170, 140 200, 190 230
           C 220 250, 240 265, 260 280
           C 280 295, 300 285, 320 260
           C 350 220, 400 160, 460 110
           C 480 95, 495 90, 505 100
           C 520 115, 530 200, 540 240
           C 550 260, 555 258, 565 245
           C 590 200, 610 130, 630 40'
        fill='none'
        stroke='#e4e4e7'
        strokeWidth='2.5'
      />

      {/* CHoCH marker */}
      <circle cx='260' cy='280' r='5' fill='#f59e0b' />
      <text x='180' y='300' fill='#f59e0b' fontSize='11' fontFamily='monospace'>
        CHoCH confirms
      </text>

      {/* SL line */}
      <line x1='30' y1='272' x2='630' y2='272' stroke='#ef4444' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='10' y='286' fill='#ef4444' fontSize='12' fontFamily='monospace'>
        SL 6,405
      </text>

      {/* Entry line */}
      <line x1='30' y1='248' x2='630' y2='248' stroke='#10b981' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='450' y='248' fill='#10b981' fontSize='12' fontFamily='monospace'>
        Entry — return into zone
      </text>

      {/* Target line */}
      <line x1='30' y1='95' x2='630' y2='95' stroke='#a855f7' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='450' y='88' fill='#a855f7' fontSize='12' fontFamily='monospace'>
        Target — prior swing high
      </text>

      <text x='545' y='270' fill='#a1a1aa' fontSize='10' fontFamily='monospace' textAnchor='middle'>
        price returns to mitigate
      </text>
    </svg>
  );
}
