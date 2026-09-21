import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0b0f17] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-20 hidden sm:flex">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Card Content Side */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="bg-[#0f172a] border border-slate-800/80 p-6 rounded-2xl glass-panel glass-panel-hover relative space-y-4">
                      {/* Header info */}
                      <div className="flex flex-col space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-800/50 w-fit shrink-0">
                            {exp.type}
                          </span>
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 whitespace-nowrap">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            {exp.period}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white font-mono pt-2">
                          {exp.role}
                        </h3>

                        <div className="text-sm font-semibold text-cyan-400 flex items-center justify-between">
                          <span>{exp.company}</span>
                          {exp.location && (
                            <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-slate-500" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Detail Bullet Points */}
                      <ul className="space-y-2 text-xs text-slate-300">
                        {exp.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Badges */}
                      <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5 font-mono text-[11px]">
                        {exp.skillsUsed.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            #{skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
