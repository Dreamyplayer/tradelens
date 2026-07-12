interface InfoItem {
  title: string;
  detail: string;
}

interface InfoGridProps {
  items: InfoItem[];
  tone?: "neutral" | "good" | "bad";
}

const toneStyles = {
  neutral: "border-neutral-800 bg-neutral-900/60",
  good: "border-emerald-900 bg-emerald-950/30",
  bad: "border-red-900 bg-red-950/30",
};

export default function InfoGrid({ items, tone = "neutral" }: InfoGridProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 my-4">
      {items.map((item) => (
        <div
          key={item.title}
          className={`rounded-lg border p-4 ${toneStyles[tone]}`}
        >
          <p className="text-sm font-semibold text-neutral-100">
            {item.title}
          </p>
          <p className="text-sm text-neutral-400 mt-1">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
