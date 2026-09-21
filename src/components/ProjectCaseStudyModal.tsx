import React from 'react';
import { X, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col glass-panel">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0b0f17]/95 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white font-mono truncate">
              {project.title} <span className="text-slate-400 font-normal text-xs">— Case Study</span>
            </h3>
          </div>

          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-slate-300 font-sans leading-relaxed">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 p-6 rounded-2xl border border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-mono mb-2">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-cyan-300 font-mono mb-4">
              {project.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              {project.description}
            </p>
          </div>

          {/* 01 - Problem */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span className="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">01</span>
              <span>Problem Statement</span>
            </div>
            <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200">
              {caseStudy.problem}
            </div>
          </section>

          {/* 02 - Approach */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span className="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">02</span>
              <span>Engineering Approach</span>
            </div>
            <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200">
              {caseStudy.approach}
            </div>
          </section>

          {/* 03 - Architecture Workflow Diagram */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span className="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">03</span>
              <span>System Architecture & Data Flow</span>
            </div>

            <p className="text-xs text-slate-400">
              {caseStudy.architectureDescription}
            </p>

            {/* Interactive Step-by-Step Architecture Flow Diagram */}
            <div className="bg-[#0b0f17] p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-slate-400 border-b border-slate-800 pb-2 flex items-center justify-between">
                <span>SYSTEM PIPELINE WORKFLOW</span>
                <span className="text-emerald-400 text-[10px]">DECOUPLED SERVICE ARCHITECTURE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudy.architectureSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/50 transition-colors relative"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                      <span className="font-bold">STEP 0{step.step}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {step.type || 'service'}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1 font-mono">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 04 - Technologies Used */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span className="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">04</span>
              <span>Technologies & Libraries</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudy.technologiesUsed.map((techCat, idx) => (
                <div key={idx} className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold font-mono text-slate-300">{techCat.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {techCat.stack.map((item) => (
                      <span key={item} className="px-2 py-1 rounded bg-slate-800 text-xs font-mono text-cyan-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 05 - Key Features */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span className="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">05</span>
              <span>Key Features</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start space-x-3 p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 06 - Challenges & Solutions */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span className="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">06</span>
              <span>Technical Challenges & Solutions</span>
            </div>

            <div className="space-y-4">
              {caseStudy.challengesAndSolutions.map((cs, csIdx) => (
                <div key={csIdx} className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-start space-x-2 text-amber-300 text-xs font-medium">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                    <span><strong>Challenge:</strong> {cs.challenge}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-emerald-300 text-xs font-medium pl-6">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                    <span><strong>Solution:</strong> {cs.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 07 - Outcome */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span className="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">07</span>
              <span>Project Outcome</span>
            </div>
            <div className="p-5 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-800/60 rounded-xl text-sm text-cyan-100">
              {caseStudy.outcome}
            </div>
          </section>
        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-4 bg-[#0b0f17]/95 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span className="font-mono">Case Study: {project.title}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
