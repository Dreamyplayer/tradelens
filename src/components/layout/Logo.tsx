interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * Icon: a lens (magnifying glass) framing a small candlestick chart —
 * literal read of "TradeLens". Uses currentColor so it inherits
 * whatever text color it's placed in.
 */
export default function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox='0 0 32 32' className='w-6 h-6 shrink-0' fill='none'>
        {/* Candlesticks inside the lens */}
        <line x1='12' y1='10' x2='12' y2='20' stroke='#10b981' strokeWidth='1.6' strokeLinecap='round' />
        <rect x='10.3' y='13' width='3.4' height='5' rx='0.5' fill='#10b981' />
        <line x1='17' y1='8' x2='17' y2='19' stroke='#e4e4e7' strokeWidth='1.6' strokeLinecap='round' />
        <rect x='15.3' y='11' width='3.4' height='6' rx='0.5' fill='#e4e4e7' />

        {/* Lens ring */}
        <circle cx='14.5' cy='14.5' r='10' stroke='currentColor' strokeWidth='2' />
        {/* Lens handle */}
        <line x1='21.5' y1='21.5' x2='27.5' y2='27.5' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' />
      </svg>
      {showWordmark && <span className='text-sm font-semibold text-neutral-100 tracking-tight'>TradeLens</span>}
    </div>
  );
}
