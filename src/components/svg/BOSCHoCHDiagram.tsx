/**
 * BOS = structure break in the SAME direction as the trend (continuation).
 * CHoCH = structure break AGAINST the trend (first sign of reversal).
 */
export default function BOSCHoCHDiagram() {
  return (
    <svg viewBox='0 0 700 300' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {/* BOS - uptrend continuation */}
      <g>
        <text x='150' y='24' fill='#10b981' fontSize='13' fontFamily='monospace' textAnchor='middle'>
          BOS — Break of Structure
        </text>
        <polyline
          points='30,220 80,160 120,190 170,110 210,150 260,60'
          fill='none'
          stroke='#e4e4e7'
          strokeWidth='2.5'
        />
        <line x1='170' y1='110' x2='300' y2='110' stroke='#10b981' strokeWidth='1' strokeDasharray='4 4' />
        <text x='215' y='103' fill='#10b981' fontSize='10'>
          prior high
        </text>
        <circle cx='260' cy='60' r='5' fill='#10b981' />
        <text x='230' y='45' fill='#10b981' fontSize='11' fontFamily='monospace'>
          breaks above → BOS
        </text>
        <text x='150' y='250' fill='#71717a' fontSize='11' textAnchor='middle'>
          confirms uptrend continuing
        </text>
      </g>

      {/* CHoCH - reversal signal */}
      <g transform='translate(370,0)'>
        <text x='150' y='24' fill='#ef4444' fontSize='13' fontFamily='monospace' textAnchor='middle'>
          CHoCH — Change of Character
        </text>
        <polyline
          points='30,220 80,160 120,190 170,110 220,150 260,130 300,190'
          fill='none'
          stroke='#e4e4e7'
          strokeWidth='2.5'
        />
        <line x1='120' y1='190' x2='300' y2='190' stroke='#ef4444' strokeWidth='1' strokeDasharray='4 4' />
        <text x='220' y='205' fill='#ef4444' fontSize='10'>
          prior higher-low
        </text>
        <circle cx='300' cy='190' r='5' fill='#ef4444' />
        <text x='220' y='230' fill='#ef4444' fontSize='11' fontFamily='monospace'>
          breaks below → CHoCH
        </text>
        <text x='150' y='255' fill='#71717a' fontSize='11' textAnchor='middle'>
          first warning trend may be reversing
        </text>
      </g>
    </svg>
  );
}
