/**
 * Live visual example matching the Breakout worked example:
 * tightening range, breakout with volume, retest entry, SL inside the
 * old range, target from the measured-move projection.
 */

const candles = [
  { x: 40, o: 260, c: 250, h: 245, l: 268 },
  { x: 75, o: 250, c: 262, h: 245, l: 270 },
  { x: 110, o: 262, c: 252, h: 248, l: 267 },
  { x: 145, o: 252, c: 258, h: 249, l: 264 },
  { x: 180, o: 258, c: 253, h: 250, l: 261 }, // tightening
  { x: 215, o: 253, c: 256, h: 251, l: 259 }, // tightest
  { x: 250, o: 256, c: 190, h: 130, l: 258 }, // breakout candle
  { x: 285, o: 190, c: 150, h: 110, l: 195 },
  { x: 320, o: 150, c: 175, h: 140, l: 182 }, // pulls back to retest
  { x: 355, o: 175, c: 250, h: 170, l: 255 }, // wick retests old range top
  { x: 390, o: 250, c: 160, h: 120, l: 253 }, // continuation
  { x: 425, o: 160, c: 100, h: 60, l: 165 },
  { x: 460, o: 100, c: 50, h: 30, l: 105 }, // reaches target
];

export default function LiveExampleBreakout() {
  return (
    <svg viewBox='0 0 720 320' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Old range zone */}
      <rect x='30' y='245' width='500' height='30' fill='#f59e0b' opacity='0.12' />
      <text x='35' y='238' fill='#f59e0b' fontSize='11' fontFamily='monospace'>
        CONSOLIDATION RANGE (old boundary)
      </text>

      {/* SL line - inside old range */}
      <line x1='30' y1='265' x2='600' y2='265' stroke='#ef4444' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='480' y='280' fill='#ef4444' fontSize='12' fontFamily='monospace'>
        SL — inside old range
      </text>

      {/* Entry line - at retest */}
      <line x1='30' y1='250' x2='600' y2='250' stroke='#10b981' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='480' y='228' fill='#10b981' fontSize='12' fontFamily='monospace'>
        Entry — retest of old range top
      </text>

      {/* Target line */}
      <line x1='30' y1='45' x2='600' y2='45' stroke='#3b82f6' strokeWidth='1.4' strokeDasharray='5 4' />
      <text x='465' y='38' fill='#3b82f6' fontSize='12' fontFamily='monospace'>
        Target — measured move
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

      <text x='355' y='300' fill='#a1a1aa' fontSize='10' fontFamily='monospace' textAnchor='middle'>
        ↑ wick retests, holds
      </text>
    </svg>
  );
}
