import React from 'react';
import { EDUCATION_INFO } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-16 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Academic Card Container */}
        <div className="max-w-3xl mx-auto bg-[#0f172a] border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl glass-panel relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-mono">
                  {EDUCATION_INFO.institution}
                </h3>
                <p className="text-sm font-semibold text-cyan-300 font-mono mt-0.5">
                  {EDUCATION_INFO.degree}
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-400 font-mono mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {EDUCATION_INFO.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {EDUCATION_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-right font-mono shrink-0">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">CGPA SCORE</span>
              <span className="text-xl font-bold text-emerald-400">{EDUCATION_INFO.cgpa}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
