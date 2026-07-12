/**
 * A tightening consolidation range that breaks out with a volume spike.
 */
export default function BreakoutDiagram() {
  const candles = [
    { x: 60, o: 180, c: 170, h: 160, l: 190, v: 30 },
    { x: 100, o: 170, c: 185, h: 165, l: 195, v: 25 },
    { x: 140, o: 185, c: 172, h: 168, l: 192, v: 22 },
    { x: 180, o: 172, c: 182, h: 170, l: 188, v: 20 },
    { x: 220, o: 182, c: 175, h: 172, l: 186, v: 18 },
    { x: 260, o: 175, c: 180, h: 173, l: 184, v: 15 },
    { x: 300, o: 180, c: 177, h: 175, l: 182, v: 12 }, // tightening
    { x: 340, o: 177, c: 179, h: 176, l: 181, v: 10 }, // tightest
    { x: 380, o: 179, c: 140, h: 100, l: 180, v: 60 }, // breakout candle
    { x: 420, o: 140, c: 110, h: 95, l: 148, v: 45 },
    { x: 460, o: 110, c: 125, h: 105, l: 130, v: 30 }, // retest
    { x: 500, o: 125, c: 90, h: 85, l: 128, v: 35 },
  ];

  return (
    <svg viewBox='0 0 620 320' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Range box */}
      <rect x='40' y='165' width='320' height='30' fill='#f59e0b' opacity='0.12' />
      <line x1='40' y1='165' x2='360' y2='165' stroke='#f59e0b' strokeWidth='1' strokeDasharray='4 4' />
      <line x1='40' y1='195' x2='360' y2='195' stroke='#f59e0b' strokeWidth='1' strokeDasharray='4 4' />
      <text x='45' y='157' fill='#f59e0b' fontSize='12' fontFamily='monospace'>
        CONSOLIDATION RANGE (compression)
      </text>

      {/* Candles */}
      {candles.map((c, i) => {
        const bullish = c.c < c.o;
        const bodyTop = Math.min(c.o, c.c);
        const bodyBottom = Math.max(c.o, c.c);
        return (
          <g key={i}>
            <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke='#71717a' strokeWidth='1.5' />
            <rect
              x={c.x - 6}
              y={bodyTop}
              width='12'
              height={Math.max(bodyBottom - bodyTop, 2)}
              fill={bullish ? '#10b981' : '#ef4444'}
            />
          </g>
        );
      })}

      <text x='380' y='90' fill='#10b981' fontSize='12' fontFamily='monospace'>
        breakout
      </text>
      <text x='440' y='150' fill='#3b82f6' fontSize='12' fontFamily='monospace'>
        retest
      </text>

      {/* Volume bars */}
      <line x1='30' y1='240' x2='560' y2='240' stroke='#3f3f46' strokeWidth='1' />
      <text x='15' y='255' fill='#71717a' fontSize='10' fontFamily='monospace'>
        volume
      </text>
      {candles.map((c, i) => (
        <rect
          key={i}
          x={c.x - 6}
          y={300 - c.v * 2}
          width='12'
          height={c.v * 2}
          fill={c.v > 40 ? '#10b981' : '#52525b'}
        />
      ))}
    </svg>
  );
}
