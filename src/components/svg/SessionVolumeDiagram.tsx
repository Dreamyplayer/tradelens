import { makeKey } from '@/components/utils';

/**
 * Typical intraday volume shape: spike at open, a midday lull,
 * and a second spike during the high-liquidity overlap window.
 */

const bars = [
  { t: '9:00', v: 70 },
  { t: '9:30', v: 90 },
  { t: '10:00', v: 55 },
  { t: '10:30', v: 40 },
  { t: '11:30', v: 25 },
  { t: '12:30', v: 20 },
  { t: '13:30', v: 22 },
  { t: '14:30', v: 30 },
  { t: '15:30', v: 50 },
  { t: '19:00', v: 65 },
  { t: '20:00', v: 95 },
  { t: '21:30', v: 80 },
  { t: '23:00', v: 35 },
];

export default function SessionVolumeDiagram() {
  const barWidth = 38;
  return (
    <svg viewBox='0 0 620 260' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      <text x='20' y='24' fill='#a1a1aa' fontSize='12' fontFamily='monospace'>
        RELATIVE VOLUME ACROSS THE DAY (illustrative)
      </text>
      <rect x='20' y='35' width='150' height='18' fill='#10b981' opacity='0.15' />
      <text x='25' y='48' fill='#10b981' fontSize='10'>
        session open
      </text>
      <rect x='430' y='35' width='150' height='18' fill='#3b82f6' opacity='0.15' />
      <text x='435' y='48' fill='#3b82f6' fontSize='10'>
        US overlap window
      </text>

      {bars.map((b, i) => {
        const x = 30 + i * barWidth;
        const height = b.v * 1.7;
        const isHigh = b.v >= 65;
        return (
          <g key={makeKey(b.t)}>
            <rect x={x} y={220 - height} width={barWidth - 8} height={height} fill={isHigh ? '#10b981' : '#52525b'} />
            <text x={x + (barWidth - 8) / 2} y='235' fill='#71717a' fontSize='9' textAnchor='middle'>
              {b.t}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
