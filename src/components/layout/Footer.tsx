export default function Footer() {
  return (
    <footer className='border-t border-neutral-900 mt-20'>
      <div className='max-w-3xl mx-auto px-6 py-10 text-sm text-neutral-500 flex flex-col sm:flex-row justify-between gap-2'>
        <p>TradeLens — educational content, not financial advice.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
