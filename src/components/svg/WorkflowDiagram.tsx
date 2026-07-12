/**
 * Capstone flowchart: the full decision path from reading conditions
 * through to journaling the result.
 */
export default function WorkflowDiagram() {
  const steps = [
    { label: '1. Read market condition', sub: 'trending / ranging / choppy' },
    { label: '2. Set HTF bias', sub: 'multi-timeframe top-down' },
    { label: '3. Pick matching strategy', sub: 'price action / trend / breakout / SMC' },
    { label: '4. Run pre-trade checklist', sub: 'zone, confirmation, size' },
    { label: '5. Enter with sized position', sub: 'risk management rules' },
    { label: '6. Manage the open trade', sub: 'breakeven, partials, trail' },
    { label: '7. Journal the result', sub: 'rule-followed? R multiple?' },
  ];
  return (
    <svg viewBox='0 0 400 620' className='w-full h-auto rounded-lg bg-neutral-900 border border-neutral-800'>
      {steps.map((s, i) => {
        const y = 20 + i * 85;
        return (
          <g key={i}>
            <rect x='30' y={y} width='340' height='60' rx='8' fill='#18181b' stroke='#3f3f46' strokeWidth='1' />
            <text x='50' y={y + 26} fill='#e4e4e7' fontSize='13' fontFamily='monospace'>
              {s.label}
            </text>
            <text x='50' y={y + 45} fill='#71717a' fontSize='11'>
              {s.sub}
            </text>
            {i < steps.length - 1 && (
              <text x='200' y={y + 78} fill='#52525b' fontSize='14' textAnchor='middle'>
                ↓
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
