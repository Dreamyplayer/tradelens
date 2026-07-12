/**
 * Fair Value Gap: a 3-candle imbalance where candle 1's high doesn't
 * overlap candle 3's low (in a bullish move) — the untraded gap in
 * between often gets revisited before continuation.
 */
export default function FVGDiagram() {
  return (
    <svg viewBox='0 0 460 260' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Candle 1 */}
      <line x1='120' y1='90' x2='120' y2='170' stroke='#71717a' strokeWidth='1.5' />
      <rect x='108' y='120' width='24' height='45' fill='#10b981' />
      <text x='120' y='185' fill='#71717a' fontSize='10' textAnchor='middle'>
        candle 1
      </text>
      <text x='120' y='112' fill='#a1a1aa' fontSize='9' textAnchor='middle'>
        high
      </text>

      {/* Candle 2 - big impulsive */}
      <line x1='190' y1='40' x2='190' y2='150' stroke='#71717a' strokeWidth='1.5' />
      <rect x='178' y='50' width='24' height='90' fill='#10b981' />
      <text x='190' y='165' fill='#71717a' fontSize='10' textAnchor='middle'>
        candle 2
      </text>

      {/* Candle 3 */}
      <line x1='260' y1='20' x2='260' y2='90' stroke='#71717a' strokeWidth='1.5' />
      <rect x='248' y='30' width='24' height='35' fill='#10b981' />
      <text x='260' y='105' fill='#71717a' fontSize='10' textAnchor='middle'>
        candle 3
      </text>
      <text x='260' y='80' fill='#a1a1aa' fontSize='9' textAnchor='middle'>
        low
      </text>

      {/* FVG zone - gap between candle1 high and candle3 low */}
      <rect x='90' y='90' width='200' height='20' fill='#f59e0b' opacity='0.2' />
      <line x1='90' y1='90' x2='290' y2='90' stroke='#f59e0b' strokeWidth='1' strokeDasharray='4 4' />
      <line x1='90' y1='110' x2='290' y2='110' stroke='#f59e0b' strokeWidth='1' strokeDasharray='4 4' />
      <text x='95' y='145' fill='#f59e0b' fontSize='11' fontFamily='monospace'>
        FVG (imbalance)
      </text>
      <text x='95' y='160' fill='#71717a' fontSize='10'>
        untraded gap — no orders filled here
      </text>

      {/* Price returning to fill the gap */}
      <path
        d='M 260 20 C 300 30, 320 60, 330 90 C 335 105, 330 130, 310 160'
        fill='none'
        stroke='#3b82f6'
        strokeWidth='2'
        strokeDasharray='5 3'
      />
      <text x='330' y='185' fill='#3b82f6' fontSize='10' fontFamily='monospace'>
        price often
      </text>
      <text x='330' y='198' fill='#3b82f6' fontSize='10' fontFamily='monospace'>
        returns to fill
      </text>
    </svg>
  );
}
