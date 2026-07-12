/**
 * Top-down multi-timeframe approach: HTF sets bias, MTF confirms
 * structure, LTF times the actual entry.
 */
export default function MTFDiagram() {
  return (
    <svg viewBox='0 0 620 300' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* HTF */}
      <g>
        <rect
          x='30'
          y='20'
          width='560'
          height='70'
          rx='8'
          fill='#10b981'
          opacity='0.08'
          stroke='#10b981'
          strokeWidth='1'
        />
        <text x='45' y='42' fill='#10b981' fontSize='12' fontFamily='monospace'>
          HTF (e.g. 4H / Daily) — sets BIAS
        </text>
        <polyline points='50,75 100,65 150,70 200,50 250,58 300,35' fill='none' stroke='#e4e4e7' strokeWidth='2' />
        <text x='320' y='55' fill='#71717a' fontSize='11'>
          uptrend — only look for longs
        </text>
      </g>

      <text x='310' y='108' fill='#71717a' fontSize='16' textAnchor='middle'>
        ↓
      </text>

      {/* MTF */}
      <g transform='translate(0,115)'>
        <rect
          x='30'
          y='0'
          width='560'
          height='70'
          rx='8'
          fill='#3b82f6'
          opacity='0.08'
          stroke='#3b82f6'
          strokeWidth='1'
        />
        <text x='45' y='22' fill='#3b82f6' fontSize='12' fontFamily='monospace'>
          MTF (e.g. 1H) — confirms STRUCTURE
        </text>
        <polyline points='50,55 100,45 150,50 200,30 250,55 300,40' fill='none' stroke='#e4e4e7' strokeWidth='2' />
        <text x='320' y='45' fill='#71717a' fontSize='11'>
          pullback in progress, structure intact
        </text>
      </g>

      <text x='310' y='223' fill='#71717a' fontSize='16' textAnchor='middle'>
        ↓
      </text>

      {/* LTF */}
      <g transform='translate(0,230)'>
        <rect
          x='30'
          y='0'
          width='560'
          height='60'
          rx='8'
          fill='#f59e0b'
          opacity='0.08'
          stroke='#f59e0b'
          strokeWidth='1'
        />
        <text x='45' y='22' fill='#f59e0b' fontSize='12' fontFamily='monospace'>
          LTF (e.g. 15m / 5m) — times ENTRY
        </text>
        <text x='45' y='42' fill='#71717a' fontSize='11'>
          confirmation candle / CHoCH here triggers the actual trade
        </text>
      </g>
    </svg>
  );
}
