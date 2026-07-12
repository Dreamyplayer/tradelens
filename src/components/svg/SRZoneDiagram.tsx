/**
 * Shows price wicking into a resistance ZONE (not a single line) multiple
 * times, and a support ZONE below. Demonstrates "zone width" concept.
 */
export default function SRZoneDiagram() {
  return (
    <svg viewBox='0 0 700 340' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Resistance zone */}
      <rect x='40' y='60' width='620' height='30' fill='#ef4444' opacity='0.15' />
      <line x1='40' y1='60' x2='660' y2='60' stroke='#ef4444' strokeWidth='1' strokeDasharray='4 4' />
      <line x1='40' y1='90' x2='660' y2='90' stroke='#ef4444' strokeWidth='1' strokeDasharray='4 4' />
      <text x='45' y='52' fill='#ef4444' fontSize='12' fontFamily='monospace'>
        RESISTANCE ZONE
      </text>

      {/* Support zone */}
      <rect x='40' y='250' width='620' height='30' fill='#10b981' opacity='0.15' />
      <line x1='40' y1='250' x2='660' y2='250' stroke='#10b981' strokeWidth='1' strokeDasharray='4 4' />
      <line x1='40' y1='280' x2='660' y2='280' stroke='#10b981' strokeWidth='1' strokeDasharray='4 4' />
      <text x='45' y='296' fill='#10b981' fontSize='12' fontFamily='monospace'>
        SUPPORT ZONE
      </text>

      {/* Candles forming a range, wicking into zones */}
      {[
        { x: 80, o: 200, c: 180, h: 170, l: 210 },
        { x: 120, o: 180, c: 120, h: 100, l: 185 }, // pushes into resistance
        { x: 160, o: 120, c: 150, h: 118, l: 160 },
        { x: 200, o: 150, c: 190, h: 148, l: 195 },
        { x: 240, o: 190, c: 240, h: 188, l: 245 },
        { x: 280, o: 240, c: 260, h: 238, l: 268 }, // near support
        { x: 320, o: 260, c: 210, h: 258, l: 265 },
        { x: 360, o: 210, c: 130, h: 105, l: 215 }, // pushes into resistance again
        { x: 400, o: 130, c: 165, h: 128, l: 170 },
        { x: 440, o: 165, c: 220, h: 163, l: 225 },
        { x: 480, o: 220, c: 255, h: 218, l: 262 }, // near support again
        { x: 520, o: 255, c: 200, h: 253, l: 260 },
        { x: 560, o: 200, c: 140, h: 115, l: 205 }, // rejects resistance
        { x: 600, o: 140, c: 100, h: 60, l: 145 }, // breaks above (breakout)
      ].map((c, i) => {
        const bullish = c.c < c.o; // lower y = higher price
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

      <text x='600' y='45' fill='#a1a1aa' fontSize='11' fontFamily='monospace' textAnchor='middle'>
        breakout →
      </text>
    </svg>
  );
}
