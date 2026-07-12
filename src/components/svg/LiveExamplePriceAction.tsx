/**
 * Live visual example matching the Price Action worked example:
 * third touch of a resistance zone, bearish engulfing confirmation,
 * short entry with SL above the zone and target at prior support.
 */

const candles = [
  { x: 40, o: 250, c: 230, h: 220, l: 255 },
  { x: 75, o: 230, c: 200, h: 195, l: 235 },
  { x: 110, o: 200, c: 165, h: 130, l: 205 }, // 1st touch of resistance
  { x: 145, o: 165, c: 190, h: 160, l: 195 },
  { x: 180, o: 190, c: 220, h: 185, l: 225 },
  { x: 215, o: 220, c: 180, h: 175, l: 225 },
  { x: 250, o: 180, c: 140, h: 128, l: 185 }, // 2nd touch
  { x: 285, o: 140, c: 170, h: 135, l: 178 },
  { x: 320, o: 170, c: 210, h: 165, l: 215 },
  { x: 355, o: 210, c: 175, h: 170, l: 218 },
  { x: 390, o: 175, c: 135, h: 128, l: 180 }, // 3rd touch, small up candle
  { x: 425, o: 135, c: 200, h: 130, l: 205 }, // bearish engulfing (confirmation)
  { x: 460, o: 200, c: 260, h: 195, l: 265 }, // move down begins
  { x: 495, o: 260, c: 330, h: 255, l: 335 },
  { x: 530, o: 330, c: 400, h: 325, l: 405 },
  { x: 565, o: 400, c: 440, h: 395, l: 445 }, // reaches target
];

export default function LiveExamplePriceAction() {
  return (
    <svg viewBox='0 0 760 480' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Resistance zone */}
      <rect x='30' y='120' width='600' height='26' fill='#ef4444' opacity='0.12' />
      <text x='35' y='112' fill='#ef4444' fontSize='11' fontFamily='monospace'>
        RESISTANCE ZONE 6,780–6,800
      </text>

      {/* SL line */}
      <line x1='30' y1='100' x2='630' y2='100' stroke='#ef4444' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='635' y='104' fill='#ef4444' fontSize='12' fontFamily='monospace'>
        SL 6,815
      </text>

      {/* Entry line */}
      <line x1='30' y1='205' x2='630' y2='205' stroke='#10b981' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='635' y='209' fill='#10b981' fontSize='12' fontFamily='monospace'>
        Entry 6,775
      </text>

      {/* Target line */}
      <line x1='30' y1='440' x2='630' y2='440' stroke='#3b82f6' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='635' y='444' fill='#3b82f6' fontSize='12' fontFamily='monospace'>
        Target 6,650
      </text>

      {candles.map((c, i) => {
        const bullish = c.c < c.o;
        const top = Math.min(c.o, c.c);
        const bottom = Math.max(c.o, c.c);
        return (
          <g key={i}>
            <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke='#71717a' strokeWidth='1.5' />
            <rect
              x={c.x - 7}
              y={top}
              width='14'
              height={Math.max(bottom - top, 2)}
              fill={bullish ? '#10b981' : '#ef4444'}
            />
          </g>
        );
      })}

      <text x='425' y='460' fill='#a1a1aa' fontSize='10' fontFamily='monospace' textAnchor='middle'>
        ↑ engulfing confirms
      </text>
    </svg>
  );
}
