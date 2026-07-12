/**
 * Premium/Discount: the swing range split at its 50% midpoint
 * (equilibrium). Buying in the discount half, selling in the premium
 * half, gives entries a better position within the current range.
 */
export default function PremiumDiscountDiagram() {
  return (
    <svg viewBox='0 0 500 320' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Swing high / low bracket */}
      <line x1='60' y1='40' x2='440' y2='40' stroke='#71717a' strokeWidth='1' strokeDasharray='3 3' />
      <text x='65' y='32' fill='#71717a' fontSize='11' fontFamily='monospace'>
        swing high
      </text>

      <line x1='60' y1='260' x2='440' y2='260' stroke='#71717a' strokeWidth='1' strokeDasharray='3 3' />
      <text x='65' y='278' fill='#71717a' fontSize='11' fontFamily='monospace'>
        swing low
      </text>

      {/* Premium zone (upper half) */}
      <rect x='60' y='40' width='380' height='110' fill='#ef4444' opacity='0.1' />
      <text x='65' y='70' fill='#ef4444' fontSize='12' fontFamily='monospace'>
        PREMIUM — sell zone
      </text>

      {/* Equilibrium line */}
      <line x1='60' y1='150' x2='440' y2='150' stroke='#f59e0b' strokeWidth='1.5' />
      <text x='330' y='145' fill='#f59e0b' fontSize='11' fontFamily='monospace'>
        equilibrium (50%)
      </text>

      {/* Discount zone (lower half) */}
      <rect x='60' y='150' width='380' height='110' fill='#10b981' opacity='0.1' />
      <text x='65' y='235' fill='#10b981' fontSize='12' fontFamily='monospace'>
        DISCOUNT — buy zone
      </text>

      {/* Example price path pulling into discount before continuing up */}
      <path
        d='M 90 70 C 130 100, 160 140, 180 175
           C 200 205, 220 220, 240 210
           C 270 195, 320 130, 400 60'
        fill='none'
        stroke='#e4e4e7'
        strokeWidth='2.5'
      />
      <circle cx='235' cy='212' r='5' fill='#10b981' />
      <text x='200' y='245' fill='#10b981' fontSize='11' fontFamily='monospace'>
        entry taken in discount
      </text>
    </svg>
  );
}
