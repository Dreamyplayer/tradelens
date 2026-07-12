import { makeKey } from '@/components/utils';

/**
 * Bullish Order Block: the last opposing (down) candle right before a
 * strong impulsive move up. Marked as a zone — price often returns to
 * "mitigate" it before continuing.
 */

const candles = [
  { x: 60, o: 200, c: 210, h: 195, l: 215 },
  { x: 100, o: 210, c: 220, h: 205, l: 225 },
  { x: 140, o: 220, c: 235, h: 215, l: 240 }, // last down candle (order block)
  { x: 180, o: 235, c: 150, h: 145, l: 238 }, // impulsive move up
  { x: 220, o: 150, c: 90, h: 85, l: 155 },
  { x: 260, o: 90, c: 60, h: 55, l: 95 },
  { x: 300, o: 60, c: 100, h: 55, l: 105 }, // pulls back to mitigate OB
  { x: 340, o: 100, c: 150, h: 95, l: 220 }, // wick returns into OB zone
  { x: 380, o: 150, c: 70, h: 65, l: 155 }, // continues up
];

export default function OrderBlockDiagram() {
  return (
    <svg viewBox='0 0 460 280' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Order block zone */}
      <rect x='130' y='215' width='270' height='25' fill='#3b82f6' opacity='0.15' />
      <line x1='130' y1='215' x2='400' y2='215' stroke='#3b82f6' strokeWidth='1' strokeDasharray='4 4' />
      <line x1='130' y1='240' x2='400' y2='240' stroke='#3b82f6' strokeWidth='1' strokeDasharray='4 4' />
      <text x='205' y='230' fill='#3b82f6' fontSize='11' fontFamily='monospace'>
        BULLISH ORDER BLOCK
      </text>

      {candles.map((c, i) => {
        const bullish = c.c < c.o;
        const top = Math.min(c.o, c.c);
        const bottom = Math.max(c.o, c.c);
        return (
          <g key={makeKey('candle', i)}>
            <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke='#71717a' strokeWidth='1.5' />
            <rect
              x={c.x - 6}
              y={top}
              width='12'
              height={Math.max(bottom - top, 2)}
              fill={bullish ? '#10b981' : '#ef4444'}
            />
          </g>
        );
      })}

      <text x='140' y='260' fill='#71717a' fontSize='10' fontFamily='monospace'>
        last down candle
      </text>
      <text x='300' y='50' fill='#10b981' fontSize='11' fontFamily='monospace'>
        impulsive move
      </text>
      <text x='350' y='180' fill='#3b82f6' fontSize='11' fontFamily='monospace'>
        price returns to
      </text>
      <text x='350' y='195' fill='#3b82f6' fontSize='11' fontFamily='monospace'>
        &quot;mitigate&quot; the OB
      </text>
    </svg>
  );
}
