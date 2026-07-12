import { makeKey } from '@/components/utils';

/**
 * Market structure: Higher Highs / Higher Lows = uptrend.
 * Lower Highs / Lower Lows = downtrend.
 */
export default function TrendStructureDiagram() {
  return (
    <svg viewBox='0 0 700 300' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Uptrend */}
      <g>
        <text x='170' y='24' fill='#10b981' fontSize='13' fontFamily='monospace' textAnchor='middle'>
          UPTREND — HH / HL
        </text>
        <polyline
          points='40,220 100,150 140,180 190,110 230,140 280,70 320,100 360,40'
          fill='none'
          stroke='#10b981'
          strokeWidth='2.5'
        />
        {[
          { x: 100, y: 150, label: 'HH' },
          { x: 140, y: 180, label: 'HL' },
          { x: 190, y: 110, label: 'HH' },
          { x: 230, y: 140, label: 'HL' },
          { x: 280, y: 70, label: 'HH' },
          { x: 320, y: 100, label: 'HL' },
        ].map(p => (
          <g key={makeKey(p.label + p.x + p.y)}>
            <circle cx={p.x} cy={p.y} r='4' fill='#10b981' />
            <text x={p.x} y={p.y - 10} fill='#a1a1aa' fontSize='10' textAnchor='middle'>
              {p.label}
            </text>
          </g>
        ))}
      </g>

      {/* Downtrend */}
      <g transform='translate(370,0)'>
        <text x='150' y='24' fill='#ef4444' fontSize='13' fontFamily='monospace' textAnchor='middle'>
          DOWNTREND — LH / LL
        </text>
        <polyline
          points='30,60 80,100 120,80 160,140 200,110 240,180 280,150 310,220'
          fill='none'
          stroke='#ef4444'
          strokeWidth='2.5'
        />
        {[
          { x: 80, y: 100, label: 'LH' },
          { x: 120, y: 80, label: 'LL' },
          { x: 160, y: 140, label: 'LH' },
          { x: 200, y: 110, label: 'LL' },
          { x: 240, y: 180, label: 'LH' },
          { x: 280, y: 150, label: 'LL' },
        ].map((p) => (
          <g key={makeKey(p.label + p.x + p.y)}>
            <circle cx={p.x} cy={p.y} r='4' fill='#ef4444' />
            <text x={p.x} y={p.y - 10} fill='#a1a1aa' fontSize='10' textAnchor='middle'>
              {p.label}
            </text>
          </g>
        ))}
      </g>

      <text x='20' y='260' fill='#71717a' fontSize='11' fontFamily='monospace'>
        Structure breaks (a HL failing to hold, or a LH getting taken out) = trend may be changing.
      </text>
    </svg>
  );
}
