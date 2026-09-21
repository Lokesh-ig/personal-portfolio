import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { Code, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filterContainerRef = useRef<HTMLDivElement>(null);
  const filterRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [filterSliderStyle, setFilterSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const categories = ['All', 'AI/ML', 'Full-Stack', 'NLP', 'Computer Vision'];

  // Update animated sliding active pill for filter categories
  useEffect(() => {
    const updateFilterSlider = () => {
      const activeEl = filterRefs.current[activeCategory];
      const containerEl = filterContainerRef.current;
      if (activeEl && containerEl) {
        const activeRect = activeEl.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();
        setFilterSliderStyle({
          left: activeRect.left - containerRect.left,
          width: activeRect.width,
          opacity: 1
        });
      }
    };

    updateFilterSlider();
    window.addEventListener('resize', updateFilterSlider);
    return () => window.removeEventListener('resize', updateFilterSlider);
  }, [activeCategory]);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>FEATURED WORK & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software Projects & AI Systems
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Filter Category Tabs with Animated Sliding Pill */}
        <div
          ref={filterContainerRef}
          className="relative flex items-center justify-center overflow-x-auto p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl max-w-xl mx-auto mb-12 scrollbar-none gap-1"
        >
          {/* Hardware-Accelerated Sliding Indicator Pill */}
          <div
            className="absolute top-1.5 bottom-1.5 left-0 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 shadow-md shadow-cyan-500/20 pointer-events-none transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${filterSliderStyle.left}px, 0, 0)`,
              width: `${filterSliderStyle.width}px`,
              opacity: filterSliderStyle.opacity
            }}
          />

          {categories.map((cat) => (
            <button
              key={cat}
              ref={(el) => { filterRefs.current[cat] = el; }}
              onClick={() => setActiveCategory(cat)}
              className={`relative z-10 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-colors duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? 'text-white font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Large Premium Project Cards */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-[#0f172a] border border-slate-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl glass-panel relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Specs & Info */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-300 font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Problem & Solution Summary */}
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
                        <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider font-bold block">
                          PROBLEM:
                        </span>
                        <p className="text-slate-300">{project.problem}</p>
                      </div>

                      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1">
                        <span className="text-cyan-400 font-mono text-[11px] uppercase tracking-wider font-bold block">
                          SOLUTION:
                        </span>
                        <p className="text-slate-200">{project.solution}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                        Technologies & Frameworks:
                      </span>
                      <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-slate-900 text-cyan-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                      >
                        <Layers className="w-4 h-4" />
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-cyan-400" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Interactive Visual Workflow Diagram */}
                  <div className="lg:col-span-5 bg-[#0b0f17] border border-slate-800 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        ARCHITECTURE WORKFLOW
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">LIVE PIPELINE</span>
                    </div>

                    {/* Step-by-Step Flow Visualizer */}
                    <div className="space-y-2.5">
                      {project.caseStudy.architectureSteps.slice(0, 5).map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 transition-colors text-xs font-mono"
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                              {step.step}
                            </span>
                            <span className="text-slate-200 font-medium truncate">{step.title}</span>
                          </div>
                          {sIdx < project.caseStudy.architectureSteps.length - 1 && (
                            <span className="text-slate-600 text-xs">↓</span>
                          )}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="w-full py-2 text-center text-xs font-mono text-cyan-400 hover:text-cyan-300 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors"
                    >
                      Inspect Full Architecture & Code →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
