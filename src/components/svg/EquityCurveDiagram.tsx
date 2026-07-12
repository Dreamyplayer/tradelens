import { makeKey } from '@/components/utils';

/**
 * A cumulative R-multiple equity curve built from a journaled series of
 * trades — the kind of chart backtesting/journaling is meant to produce.
 */
export default function EquityCurveDiagram() {
  const rMultiples = [1, -1, 2, -1, 1.5, 2, -1, -1, 3, 1, -1, 2, 1, 2.5, -1];
  let cumulative = 0;
  const points = rMultiples.map((r, i) => {
    cumulative += r;
    return { x: 40 + i * 38, y: 190 - cumulative * 12, r, cumulative };
  });
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <svg viewBox='0 0 620 230' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      <line x1='30' y1='190' x2='600' y2='190' stroke='#3f3f46' strokeWidth='1' />
      <text x='20' y='195' fill='#71717a' fontSize='10' fontFamily='monospace'>
        0R
      </text>
      <text x='20' y='24' fill='#a1a1aa' fontSize='12' fontFamily='monospace'>
        CUMULATIVE R-MULTIPLE (sample of 15 journaled trades)
      </text>

      <path d={pathD} fill='none' stroke='#10b981' strokeWidth='2.5' />
      {points.map((p, i) => (
        <circle
          key={makeKey('point', p.cumulative + i)}
          cx={p.x}
          cy={p.y}
          r='3.5'
          fill={p.r > 0 ? '#10b981' : '#ef4444'}
        />
      ))}

      <text x='560' y={points[points.length - 1].y - 12} fill='#10b981' fontSize='12' fontFamily='monospace'>
        +{cumulative}R total
      </text>
    </svg>
  );
}
