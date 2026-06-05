import { ComparisonItem } from '../types';
import { XCircle, CheckCircle2 } from 'lucide-react';

interface VsCardsProps {
  data: ComparisonItem[];
  titleLegacy?: string;
  titleModern?: string;
}

export function VsCards({ data, titleLegacy = "기존 SAM4S 구조", titleModern = "신규 SAM4S 구조" }: VsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm border border-slate-200 text-slate-400 font-bold text-xs tracking-tighter z-10">
        VS
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-slate-400" />
              <span>{titleLegacy}</span>
            </div>
            <span className="text-[10px] font-bold bg-slate-200 text-slate-500 px-2 py-1 rounded uppercase tracking-wider">Legacy (As-Is)</span>
          </h3>
        </div>
        <div className="flex-1 p-6 space-y-4 bg-white">
          <div className="grid grid-cols-1 gap-3">
            {data.map(item => (
              <div key={`legacy-${item.id}`} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.category}</span>
                <span className="text-slate-700 font-mono text-sm leading-relaxed">{item.legacy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-indigo-200 overflow-hidden flex flex-col">
        <div className="bg-indigo-600 px-6 py-4 border-b border-indigo-700">
          <h3 className="text-lg font-bold text-white flex items-center justify-between">
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-indigo-200" />
               <span>{titleModern}</span>
             </div>
             <span className="text-[10px] font-bold bg-indigo-500/50 text-indigo-50 px-2 py-1 rounded uppercase tracking-wider">Modern (To-Be)</span>
          </h3>
        </div>
        <div className="flex-1 p-6 space-y-4 bg-white">
          <div className="grid grid-cols-1 gap-3">
            {data.map(item => (
              <div key={`modern-${item.id}`} className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                <span className="block text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">{item.category}</span>
                <span className="text-indigo-900 font-semibold text-sm leading-relaxed">{item.modern}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
