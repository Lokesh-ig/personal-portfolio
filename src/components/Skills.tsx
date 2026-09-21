import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Globe, Brain, Eye, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-amber-400" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((catGroup) => (
            <div
              key={catGroup.category}
              className="bg-[#0f172a] border border-slate-800/80 p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {getCategoryIcon(catGroup.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-mono">
                      {catGroup.category}
                    </h3>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all duration-200"
                    >
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
