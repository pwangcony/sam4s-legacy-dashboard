import { SummaryItem } from '../types';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface SummaryListProps {
  data: SummaryItem[];
  iconType?: 'check' | 'chevron';
}

export function SummaryList({ data, iconType = 'chevron' }: SummaryListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((item) => (
        <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-sm hover:border-indigo-200 transition-colors">
          <div className="mt-0.5">
            {iconType === 'check' ? (
              <CheckCircle2 className="w-5 h-5 text-indigo-500" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
