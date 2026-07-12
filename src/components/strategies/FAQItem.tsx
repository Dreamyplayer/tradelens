interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className='group rounded-lg border border-neutral-800 bg-neutral-900/60 open:bg-neutral-900 p-4'>
      <summary className='cursor-pointer list-none flex items-center justify-between text-neutral-100 font-medium'>
        {question}
        <span className='text-neutral-500 group-open:rotate-45 transition-transform ml-4 text-lg'>+</span>
      </summary>
      <p className='text-sm text-neutral-400 mt-3 leading-relaxed'>{answer}</p>
    </details>
  );
}
