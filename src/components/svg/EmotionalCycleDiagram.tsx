/**
 * The classic "cycle of market emotions" mapped onto a price curve —
 * shows where impulsive decisions typically get made.
 */
export default function EmotionalCycleDiagram() {
  const points = [
    { x: 40, y: 200, label: 'Hope', color: '#a1a1aa' },
    { x: 100, y: 160, label: 'Optimism', color: '#10b981' },
    { x: 160, y: 110, label: 'Excitement', color: '#10b981' },
    { x: 220, y: 70, label: 'Euphoria', color: '#f59e0b', warn: true },
    { x: 280, y: 90, label: 'Anxiety', color: '#f59e0b' },
    { x: 340, y: 130, label: 'Denial', color: '#ef4444' },
    { x: 400, y: 190, label: 'Fear', color: '#ef4444' },
    { x: 460, y: 230, label: 'Panic sell', color: '#ef4444', warn: true },
    { x: 520, y: 210, label: 'Depression', color: '#71717a' },
    { x: 580, y: 180, label: 'Hope again', color: '#a1a1aa' },
  ];
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  return (
    <svg viewBox='0 0 620 280' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      <path d={pathD} fill='none' stroke='#e4e4e7' strokeWidth='2' />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={p.warn ? 6 : 4} fill={p.color} />
          <text
            x={p.x}
            y={p.warn ? p.y - 14 : p.y + 18}
            fill={p.color}
            fontSize='10.5'
            fontFamily='monospace'
            textAnchor='middle'
          >
            {p.label}
          </text>
        </g>
      ))}
      <text x='220' y='255' fill='#f59e0b' fontSize='11' fontFamily='monospace' textAnchor='middle'>
        ← most traders buy here (euphoria)
      </text>
      <text x='460' y='260' fill='#ef4444' fontSize='11' fontFamily='monospace' textAnchor='middle'>
        most traders sell here (panic) →
      </text>
    </svg>
  );
}
