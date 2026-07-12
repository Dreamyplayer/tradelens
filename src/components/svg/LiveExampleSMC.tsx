/**
 * Live visual example matching the SMC worked example, now with a
 * hand-drawn-style callout explaining the confirmation: price returns
 * into the stacked order block + FVG zone and reacts bullish.
 */
export default function LiveExampleSMC() {
  return (
    <svg viewBox='0 0 660 470' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      <defs>
        <marker id='arrow-smc' markerWidth='8' markerHeight='8' refX='6' refY='4' orient='auto'>
          <path d='M0,0 L8,4 L0,8 Z' fill='#fbbf24' />
        </marker>
      </defs>

      {/* Order block + FVG zone */}
      <rect x='30' y='230' width='600' height='40' fill='#3b82f6' opacity='0.14' />
      <text x='35' y='222' fill='#3b82f6' fontSize='11' fontFamily='monospace'>
        ORDER BLOCK + FVG 6,420–6,440
      </text>

      {/* Price path */}
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

      {/* Hand-drawn scribble circle around the return-into-zone reaction */}
      <g transform='rotate(-5 545 245)'>
        <ellipse cx='545' cy='245' rx='30' ry='30' fill='none' stroke='#fbbf24' strokeWidth='2.5' opacity='0.9' />
      </g>
      <g transform='rotate(4 545 245)'>
        <ellipse cx='547' cy='243' rx='33' ry='33' fill='none' stroke='#fbbf24' strokeWidth='2' opacity='0.5' />
      </g>

      {/* SL line */}
      <line x1='30' y1='272' x2='630' y2='272' stroke='#ef4444' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='10' y='286' fill='#ef4444' fontSize='12' fontFamily='monospace'>
        SL 6,405
      </text>

      {/* Entry line */}
      <line x1='30' y1='248' x2='630' y2='248' stroke='#10b981' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='60' y='244' fill='#10b981' fontSize='12' fontFamily='monospace'>
        Entry — on reaction
      </text>

      {/* Target line */}
      <line x1='30' y1='95' x2='630' y2='95' stroke='#a855f7' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='450' y='88' fill='#a855f7' fontSize='12' fontFamily='monospace'>
        Target — prior swing high
      </text>

      {/* Callout arrow + note */}
      <path
        d='M 470 400 C 500 370, 520 320, 535 275'
        fill='none'
        stroke='#fbbf24'
        strokeWidth='2'
        strokeDasharray='1 5'
        strokeLinecap='round'
        markerEnd='url(#arrow-smc)'
      />
      <g transform='rotate(-1 220 420)'>
        <rect x='210' y='380' width='310' height='56' rx='6' fill='#18181b' stroke='#fbbf24' strokeWidth='1' />
        <text x='225' y='401' fill='#fbbf24' fontSize='12' fontFamily='monospace'>
          Price returns into OB+FVG, prints a
        </text>
        <text x='225' y='419' fill='#fbbf24' fontSize='12' fontFamily='monospace'>
          bullish reaction — that&apos;s the trigger
        </text>
      </g>
    </svg>
  );
}
