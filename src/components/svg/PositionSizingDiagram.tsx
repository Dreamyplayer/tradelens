/**
 * Compares a tight-stop trade (larger position size) vs a wide-stop trade
 * (smaller position size) — both risking the exact same rupee amount.
 */
export default function PositionSizingDiagram() {
  return (
    <svg viewBox='0 0 620 260' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      <text x='20' y='26' fill='#a1a1aa' fontSize='13' fontFamily='monospace'>
        SAME RISK (₹) — DIFFERENT STOP DISTANCE — DIFFERENT SIZE
      </text>

      {/* Tight stop trade */}
      <g>
        <text x='60' y='60' fill='#e4e4e7' fontSize='12' fontFamily='monospace'>
          Tight stop (10 pts)
        </text>
        <rect x='60' y='75' width='220' height='18' fill='#10b981' opacity='0.7' />
        <text x='290' y='89' fill='#10b981' fontSize='12' fontFamily='monospace'>
          bigger size
        </text>
        <rect x='60' y='100' width='220' height='6' fill='#ef4444' opacity='0.5' />
        <text x='60' y='122' fill='#71717a' fontSize='11'>
          risk ₹2,000 ÷ 10 pt stop = larger lot size
        </text>
      </g>

      {/* Wide stop trade */}
      <g transform='translate(0,110)'>
        <text x='60' y='60' fill='#e4e4e7' fontSize='12' fontFamily='monospace'>
          Wide stop (40 pts)
        </text>
        <rect x='60' y='75' width='70' height='18' fill='#10b981' opacity='0.7' />
        <text x='140' y='89' fill='#10b981' fontSize='12' fontFamily='monospace'>
          smaller size
        </text>
        <rect x='60' y='100' width='70' height='6' fill='#ef4444' opacity='0.5' />
        <text x='60' y='122' fill='#71717a' fontSize='11'>
          risk ₹2,000 ÷ 40 pt stop = smaller lot size
        </text>
      </g>
    </svg>
  );
}
