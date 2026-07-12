interface ExampleBoxProps {
  instrument: string;
  scenario: string;
  entry: string;
  stop: string;
  target: string;
  note?: string;
}

/**
 * Concrete worked example with numbers, so the concept isn't just
 * theoretical. Used at the end of every strategy page.
 */
export default function ExampleBox({ instrument, scenario, entry, stop, target, note }: ExampleBoxProps) {
  return (
    <div className='rounded-xl border border-neutral-800 bg-neutral-900 p-5'>
      <p className='text-xs font-mono tracking-widest text-neutral-500 mb-3'>WORKED EXAMPLE — {instrument}</p>
      <p className='text-neutral-300 mb-4'>{scenario}</p>
      <div className='grid sm:grid-cols-3 gap-3 text-sm'>
        <div className='rounded-lg bg-emerald-950/30 border border-emerald-900 p-3'>
          <p className='text-emerald-500 font-semibold mb-1'>Entry</p>
          <p className='text-neutral-400'>{entry}</p>
        </div>
        <div className='rounded-lg bg-red-950/30 border border-red-900 p-3'>
          <p className='text-red-500 font-semibold mb-1'>Stop Loss</p>
          <p className='text-neutral-400'>{stop}</p>
        </div>
        <div className='rounded-lg bg-blue-950/30 border border-blue-900 p-3'>
          <p className='text-blue-500 font-semibold mb-1'>Target</p>
          <p className='text-neutral-400'>{target}</p>
        </div>
      </div>
      {note && <p className='text-sm text-neutral-500 mt-3'>{note}</p>}
    </div>
  );
}
