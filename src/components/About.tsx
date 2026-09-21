import React from 'react';
import { User } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Centered Narrative Content */}
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Narrative Bio Card */}
          <div className="bg-[#0f172a]/60 border border-slate-800/80 p-6 sm:p-8 rounded-2xl glass-panel space-y-4">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              I'm a <strong className="text-white font-semibold">Computer Science and Engineering graduate</strong> passionate about building practical software and AI-powered applications. My experience spans full-stack web development, Python programming, machine learning, NLP, computer vision, REST APIs, and databases.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Through internships and academic projects, I have worked on real-world applications including <span className="text-cyan-300 font-medium">AI-based comment moderation</span>, <span className="text-cyan-300 font-medium">banking FAQ automation</span>, <span className="text-cyan-300 font-medium">real-time object detection and tracking</span>, and <span className="text-cyan-300 font-medium">employee onboarding workflow systems</span>.
            </p>
          </div>

          {/* Role & Focus Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <div className="flex items-center justify-between p-3.5 bg-slate-900/90 border border-slate-800/90 rounded-xl">
              <span className="text-slate-400 font-semibold uppercase tracking-wider">ROLE</span>
              <span className="text-cyan-400 font-bold">{DEVELOPER_PROFILE.role}</span>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-slate-900/90 border border-slate-800/90 rounded-xl">
              <span className="text-slate-400 font-semibold uppercase tracking-wider">FOCUS</span>
              <span className="text-indigo-400 font-bold">{DEVELOPER_PROFILE.focus}</span>
            </div>
          </div>

          {/* Core Values / Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl text-center">
              <span className="text-cyan-400 font-bold block text-sm">Python Native</span>
              <span className="text-slate-400 text-[11px]">Backend & Data Science</span>
            </div>

            <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl text-center">
              <span className="text-indigo-400 font-bold block text-sm">Full-Stack API</span>
              <span className="text-slate-400 text-[11px]">React + Django</span>
            </div>

            <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl text-center">
              <span className="text-emerald-400 font-bold block text-sm">Applied AI/ML</span>
              <span className="text-slate-400 text-[11px]">BERT • YOLO • NLP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
