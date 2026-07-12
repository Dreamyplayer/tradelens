/**
 * Three market condition archetypes side by side: clean trend,
 * defined range, and choppy/directionless noise.
 */
export default function MarketConditionsDiagram() {
  return (
    <svg viewBox='0 0 700 240' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      <g>
        <text x='105' y='24' fill='#10b981' fontSize='12' fontFamily='monospace' textAnchor='middle'>
          TRENDING
        </text>
        <polyline
          points='30,190 60,170 90,175 120,140 150,150 180,100'
          fill='none'
          stroke='#10b981'
          strokeWidth='2.5'
        />
        <text x='105' y='215' fill='#71717a' fontSize='10' textAnchor='middle'>
          clear HH/HL — use Strategy 02
        </text>
      </g>

      <g transform='translate(230,0)'>
        <text x='105' y='24' fill='#3b82f6' fontSize='12' fontFamily='monospace' textAnchor='middle'>
          RANGING
        </text>
        <rect x='30' y='110' width='150' height='60' fill='#3b82f6' opacity='0.12' />
        <polyline
          points='30,120 55,160 80,125 105,165 130,120 155,160 180,125'
          fill='none'
          stroke='#3b82f6'
          strokeWidth='2.5'
        />
        <text x='105' y='215' fill='#71717a' fontSize='10' textAnchor='middle'>
          bound zone — use Strategy 01
        </text>
      </g>

      <g transform='translate(460,0)'>
        <text x='105' y='24' fill='#ef4444' fontSize='12' fontFamily='monospace' textAnchor='middle'>
          CHOPPY / VOLATILE
        </text>
        <polyline
          points='30,150 50,110 70,170 90,130 110,180 130,100 150,160 180,120'
          fill='none'
          stroke='#ef4444'
          strokeWidth='2.5'
        />
        <text x='105' y='215' fill='#71717a' fontSize='10' textAnchor='middle'>
          no structure — reduce size / wait
        </text>
      </g>
    </svg>
  );
}
