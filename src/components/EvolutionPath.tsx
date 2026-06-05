import { ComparisonItem } from '../types';
import { ArrowRight, Zap } from 'lucide-react';

interface EvolutionPathProps {
  data: ComparisonItem[];
}

export function EvolutionPath({ data }: EvolutionPathProps) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <div key={item.id} className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-4">
          <div className="md:w-1/4 shrink-0 px-2">
            <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">{item.category}</span>
          </div>
          
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4">
             <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100 text-slate-500 text-sm font-mono w-full sm:w-auto leading-relaxed">
                {item.legacy}
             </div>
             
             <div className="hidden sm:flex text-slate-300 shrink-0 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-5 h-5" />
             </div>

             <div className="sm:hidden text-slate-300 self-center group-hover:text-indigo-400 group-hover:translate-y-1 transition-all">
                <ArrowRight className="w-5 h-5 rotate-90" />
             </div>
             
             <div className="flex-1 bg-indigo-50 rounded-xl p-4 border border-indigo-100 text-indigo-900 font-semibold text-sm flex items-center justify-between w-full sm:w-auto leading-relaxed">
                <span>{item.modern}</span>
                <Zap className="w-4 h-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
             </div>
          </div>
        </div>
      ))}
    </div>
  );
}
