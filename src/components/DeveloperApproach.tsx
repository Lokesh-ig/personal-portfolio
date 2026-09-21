import React from 'react';
import { HOW_I_BUILD_STEPS } from '../data/portfolioData';
import { Search, Layout, Terminal, CheckCircle2, Workflow, ArrowRight } from 'lucide-react';

export const DeveloperApproach: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Build
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_I_BUILD_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-[#0f172a] border border-slate-800/80 p-6 rounded-2xl glass-panel glass-panel-hover relative space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono text-slate-700">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-mono">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < HOW_I_BUILD_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-700">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
