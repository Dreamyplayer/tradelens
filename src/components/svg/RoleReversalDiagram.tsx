/**
 * Classic "role reversal" concept: old resistance, once broken, acts as
 * new support on the retest.
 */
export default function RoleReversalDiagram() {
  return (
    <svg viewBox='0 0 700 300' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* The flipped zone */}
      <rect x='40' y='140' width='620' height='26' fill='#f59e0b' opacity='0.15' />
      <line x1='40' y1='140' x2='660' y2='140' stroke='#f59e0b' strokeWidth='1' strokeDasharray='4 4' />
      <line x1='40' y1='166' x2='660' y2='166' stroke='#f59e0b' strokeWidth='1' strokeDasharray='4 4' />
      <text x='45' y='132' fill='#f59e0b' fontSize='12' fontFamily='monospace'>
        OLD RESISTANCE → NEW SUPPORT
      </text>

      {/* Price path: approaches, breaks, retests, continues up */}
      <path
        d='M 60 240
           C 120 200, 160 200, 190 160
           C 210 138, 230 130, 260 128
           C 300 122, 320 128, 340 150
           C 360 172, 370 190, 380 200
           C 400 190, 420 165, 440 150
           C 470 128, 520 90, 600 60'
        fill='none'
        stroke='#e4e4e7'
        strokeWidth='2.5'
      />

      {/* Retest point marker */}
      <circle cx='380' cy='200' r='6' fill='#f59e0b' />
      <text x='392' y='205' fill='#f59e0b' fontSize='12' fontFamily='monospace'>
        retest = entry
      </text>

      {/* Breakout marker */}
      <circle cx='260' cy='128' r='5' fill='#10b981' />
      <text x='200' y='112' fill='#10b981' fontSize='12' fontFamily='monospace'>
        break
      </text>

      <text x='60' y='255' fill='#71717a' fontSize='12' fontFamily='monospace'>
        price
      </text>
    </svg>
  );
}
