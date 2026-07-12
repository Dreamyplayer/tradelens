/**
 * Two most-used confirmation patterns at S/R zones: Pin Bar (rejection wick)
 * and Bullish/Bearish Engulfing.
 */
export default function CandlestickPatterns() {
  return (
    <svg
      viewBox="0 0 700 260"
      className="w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800"
    >
      {/* Pin bar - bullish rejection */}
      <g>
        <text x="90" y="30" fill="#a1a1aa" fontSize="13" fontFamily="monospace" textAnchor="middle">
          PIN BAR (rejection)
        </text>
        <line x1="90" y1="60" x2="90" y2="200" stroke="#71717a" strokeWidth="2" />
        <rect x="80" y="150" width="20" height="35" fill="#10b981" />
        <text x="90" y="220" fill="#71717a" fontSize="11" textAnchor="middle">
          long wick = rejected
        </text>
        <text x="90" y="235" fill="#71717a" fontSize="11" textAnchor="middle">
          small body = indecision
        </text>
      </g>

      {/* Bullish engulfing */}
      <g transform="translate(220,0)">
        <text x="90" y="30" fill="#a1a1aa" fontSize="13" fontFamily="monospace" textAnchor="middle">
          BULLISH ENGULFING
        </text>
        <line x1="60" y1="90" x2="60" y2="140" stroke="#71717a" strokeWidth="1.5" />
        <rect x="50" y="100" width="20" height="30" fill="#ef4444" />
        <line x1="110" y1="70" x2="110" y2="180" stroke="#71717a" strokeWidth="1.5" />
        <rect x="98" y="85" width="24" height="85" fill="#10b981" />
        <text x="90" y="220" fill="#71717a" fontSize="11" textAnchor="middle">
          big candle fully
        </text>
        <text x="90" y="235" fill="#71717a" fontSize="11" textAnchor="middle">
          covers previous body
        </text>
      </g>

      {/* Inside bar */}
      <g transform="translate(450,0)">
        <text x="90" y="30" fill="#a1a1aa" fontSize="13" fontFamily="monospace" textAnchor="middle">
          INSIDE BAR (coil)
        </text>
        <line x1="80" y1="60" x2="80" y2="180" stroke="#71717a" strokeWidth="1.5" />
        <rect x="65" y="90" width="30" height="70" fill="#52525b" />
        <line x1="80" y1="100" x2="80" y2="150" stroke="#71717a" strokeWidth="1.5" />
        <rect x="72" y="110" width="16" height="30" fill="#10b981" />
        <text x="90" y="220" fill="#71717a" fontSize="11" textAnchor="middle">
          small candle inside
        </text>
        <text x="90" y="235" fill="#71717a" fontSize="11" textAnchor="middle">
          prior range = compression
        </text>
      </g>
    </svg>
  );
}
