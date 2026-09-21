import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';
import { Code, Briefcase, Terminal, Layers } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 3:
      default:
        return <Layers className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section className="relative z-20 -mt-6 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-[#0f172a]/90 border border-slate-800/80 rounded-2xl shadow-xl backdrop-blur-md glass-panel">
        {QUICK_STATS.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-4 p-3 rounded-xl bg-slate-900/40 border border-slate-800/40 hover:border-slate-700 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 shrink-0">
              {getIcon(idx)}
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-300">
                {stat.label}
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                {stat.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
