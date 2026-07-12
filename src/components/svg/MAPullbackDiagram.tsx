/**
 * Price in an uptrend pulling back to a rising moving average / VWAP,
 * then continuing — the classic trend-following entry.
 */
export default function MAPullbackDiagram() {
  return (
    <svg
      viewBox="0 0 700 300"
      className="w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800"
    >
      {/* Moving average line, rising */}
      <path
        d="M 40 250 C 150 220, 250 180, 360 150 C 470 122, 560 95, 660 60"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <text x="560" y="52" fill="#3b82f6" fontSize="12" fontFamily="monospace">
        20 EMA / VWAP
      </text>

      {/* Price line weaving around MA, pulling back to touch it twice */}
      <path
        d="M 40 240
           C 90 200, 130 170, 170 175
           C 200 178, 210 190, 220 200
           C 235 214, 245 200, 260 175
           C 300 130, 330 145, 350 160
           C 365 172, 375 185, 385 190
           C 400 175, 420 140, 450 110
           C 500 70, 560 55, 660 30"
        fill="none"
        stroke="#e4e4e7"
        strokeWidth="2.5"
      />

      {/* Pullback entry markers where price touches MA */}
      <circle cx="220" cy="200" r="6" fill="#10b981" />
      <text x="150" y="222" fill="#10b981" fontSize="12" fontFamily="monospace">
        entry 1 (bounce off MA)
      </text>

      <circle cx="385" cy="190" r="6" fill="#10b981" />
      <text x="400" y="212" fill="#10b981" fontSize="12" fontFamily="monospace">
        entry 2 (bounce off MA)
      </text>

      <text x="45" y="270" fill="#71717a" fontSize="11" fontFamily="monospace">
        Buy the dip toward a rising average — not the first touch, wait for a bullish candle to confirm.
      </text>
    </svg>
  );
}
