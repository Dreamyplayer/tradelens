/**
 * Shows the measured-move calculation: the range's height gets
 * projected upward from the breakout point to estimate a target.
 */
export default function MeasuredMoveDiagram() {
  return (
    <svg viewBox='0 0 500 320' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* Range box */}
      <rect
        x='60'
        y='180'
        width='160'
        height='80'
        fill='#f59e0b'
        opacity='0.12'
        stroke='#f59e0b'
        strokeWidth='1'
        strokeDasharray='4 4'
      />
      <text x='70' y='172' fill='#f59e0b' fontSize='11' fontFamily='monospace'>
        RANGE
      </text>

      {/* Height bracket for range */}
      <line x1='45' y1='180' x2='45' y2='260' stroke='#e4e4e7' strokeWidth='1.5' />
      <line x1='40' y1='180' x2='50' y2='180' stroke='#e4e4e7' strokeWidth='1.5' />
      <line x1='40' y1='260' x2='50' y2='260' stroke='#e4e4e7' strokeWidth='1.5' />
      <text x='15' y='224' fill='#e4e4e7' fontSize='11' fontFamily='monospace'>
        H
      </text>

      {/* Breakout point */}
      <circle cx='220' cy='180' r='5' fill='#10b981' />
      <text x='230' y='178' fill='#10b981' fontSize='11' fontFamily='monospace'>
        breakout
      </text>

      {/* Projected height above breakout = target */}
      <rect
        x='220'
        y='100'
        width='160'
        height='80'
        fill='#10b981'
        opacity='0.1'
        stroke='#10b981'
        strokeWidth='1'
        strokeDasharray='4 4'
      />
      <line x1='405' y1='100' x2='405' y2='180' stroke='#e4e4e7' strokeWidth='1.5' />
      <line x1='400' y1='100' x2='410' y2='100' stroke='#e4e4e7' strokeWidth='1.5' />
      <line x1='400' y1='180' x2='410' y2='180' stroke='#e4e4e7' strokeWidth='1.5' />
      <text x='415' y='144' fill='#e4e4e7' fontSize='11' fontFamily='monospace'>
        H (same)
      </text>

      <circle cx='380' cy='100' r='5' fill='#3b82f6' />
      <text x='330' y='88' fill='#3b82f6' fontSize='12' fontFamily='monospace'>
        target
      </text>

      {/* Formula */}
      <rect x='60' y='20' width='380' height='46' rx='6' fill='#18181b' stroke='#3f3f46' strokeWidth='1' />
      <text x='75' y='48' fill='#e4e4e7' fontSize='14' fontFamily='monospace'>
        Target = Breakout price + Range height (H)
      </text>
    </svg>
  );
}
