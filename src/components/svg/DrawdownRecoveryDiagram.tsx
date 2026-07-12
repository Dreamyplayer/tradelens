import { makeKey } from '@/components/utils';

/**
 * Shows why losses hurt asymmetrically: a 50% loss needs a 100% gain
 * to recover, not 50%.
 */
export default function DrawdownRecoveryDiagram() {
  const rows = [
    { loss: 10, needed: 11 },
    { loss: 20, needed: 25 },
    { loss: 30, needed: 43 },
    { loss: 50, needed: 100 },
    { loss: 75, needed: 300 },
  ];
  return (
    <svg viewBox='0 0 620 260' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      <text x='20' y='26' fill='#a1a1aa' fontSize='13' fontFamily='monospace'>
        LOSS % → GAIN % NEEDED TO RECOVER
      </text>
      {rows.map((r, i) => {
        const y = 55 + i * 40;
        const lossWidth = r.loss * 2.2;
        const neededWidth = Math.min(r.needed * 2.2, 460);
        return (
          <g key={makeKey('row', r.loss)}>
            <text x='20' y={y + 14} fill='#71717a' fontSize='12' fontFamily='monospace'>
              -{r.loss}%
            </text>
            <rect x='70' y={y} width={lossWidth} height='14' fill='#ef4444' opacity='0.6' />
            <rect x='70' y={y + 16} width={neededWidth} height='14' fill='#10b981' opacity='0.6' />
            <text
              x={80 + Math.max(lossWidth, neededWidth)}
              y={y + 14}
              fill='#e4e4e7'
              fontSize='12'
              fontFamily='monospace'
            >
              needs +{r.needed}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}
