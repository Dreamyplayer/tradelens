/**
 * Compares a false breakout (wick pokes out, closes back inside range)
 * against a confirmed breakout (candle closes clearly outside range).
 */
export default function FalseBreakoutDiagram() {
  return (
    <svg
      viewBox="0 0 700 260"
      className="w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800"
    >
      {/* False breakout */}
      <g>
        <text x="150" y="26" fill="#ef4444" fontSize="13" fontFamily="monospace" textAnchor="middle">
          FALSE BREAKOUT (trap)
        </text>
        <line x1="40" y1="120" x2="280" y2="120" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" />
        <text x="40" y="112" fill="#f59e0b" fontSize="10">range top</text>

        {[
          { x: 70, o: 150, c: 130, h: 125, l: 155 },
          { x: 110, o: 130, c: 145, h: 128, l: 150 },
          { x: 150, o: 145, c: 100, h: 80, l: 148 }, // wick pokes above, closes back inside
          { x: 190, o: 100, c: 160, h: 98, l: 165 }, // closes back below range
          { x: 230, o: 160, c: 190, h: 158, l: 195 },
        ].map((c, i) => {
          const bullish = c.c < c.o;
          const top = Math.min(c.o, c.c);
          const bottom = Math.max(c.o, c.c);
          return (
            <g key={i}>
              <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke="#71717a" strokeWidth="1.5" />
              <rect x={c.x - 6} y={top} width="12" height={Math.max(bottom - top, 2)} fill={bullish ? "#10b981" : "#ef4444"} />
            </g>
          );
        })}
        <text x="150" y="230" fill="#71717a" fontSize="11" textAnchor="middle">
          wick exits, body closes back inside → trap
        </text>
      </g>

      {/* Confirmed breakout */}
      <g transform="translate(370,0)">
        <text x="150" y="26" fill="#10b981" fontSize="13" fontFamily="monospace" textAnchor="middle">
          CONFIRMED BREAKOUT
        </text>
        <line x1="40" y1="120" x2="280" y2="120" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" />
        <text x="40" y="112" fill="#f59e0b" fontSize="10">range top</text>

        {[
          { x: 70, o: 150, c: 130, h: 125, l: 155 },
          { x: 110, o: 130, c: 145, h: 128, l: 150 },
          { x: 150, o: 145, c: 90, h: 85, l: 148 }, // strong close well above range
          { x: 190, o: 90, c: 60, h: 55, l: 95 }, // continuation
          { x: 230, o: 60, c: 40, h: 35, l: 65 },
        ].map((c, i) => {
          const bullish = c.c < c.o;
          const top = Math.min(c.o, c.c);
          const bottom = Math.max(c.o, c.c);
          return (
            <g key={i}>
              <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke="#71717a" strokeWidth="1.5" />
              <rect x={c.x - 6} y={top} width="12" height={Math.max(bottom - top, 2)} fill={bullish ? "#10b981" : "#ef4444"} />
            </g>
          );
        })}
        <text x="150" y="230" fill="#71717a" fontSize="11" textAnchor="middle">
          body closes clearly outside → valid
        </text>
      </g>
    </svg>
  );
}
