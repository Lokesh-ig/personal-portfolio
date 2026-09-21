import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume?: () => void;
}

const ROLES = [
  'SOFTWARE DEVELOPER',
  'FULL-STACK DEVELOPER',
  'AI / ML ENTHUSIAST',
  'PYTHON DEVELOPER'
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // Typewriter effect for professional role title
  useEffect(() => {
    const fullText = ROLES[roleIndex];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setCurrentRoleText(fullText.substring(0, currentRoleText.length - 1));
      }, 35);
    } else {
      timer = window.setTimeout(() => {
        setCurrentRoleText(fullText.substring(0, currentRoleText.length + 1));
      }, 85);
    }

    if (!isDeleting && currentRoleText === fullText) {
      timer = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentRoleText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [currentRoleText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-grid-pattern">
      {/* Radial Gradient Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-6">
          {/* Profile Photo Avatar */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsPhotoModalOpen(true)}
              className="relative group cursor-pointer focus:outline-none"
              title="Click to view full photo"
            >
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-75 blur-md group-hover:opacity-100 transition duration-300 animate-pulse" />
              <img
                src={PERSONAL_INFO.profileImageUrl}
                alt={PERSONAL_INFO.name}
                className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 object-cover object-[center_15%] rounded-full border-4 border-slate-900 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/80"
              />
            </button>
          </div>

          {/* High-Tech Expanding Letter Spacing & Dual Neon Accent Headline */}
          <div className="flex justify-center pt-2">
            <h1 className="relative text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight font-mono uppercase cursor-pointer select-none group inline-block py-3 px-4">
              {/* Soft Ambient Cyan-Indigo Pulse Backlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full pointer-events-none" />

              {/* Text with Expanding Letter Spacing & Flowing Gradient */}
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 group-hover:from-cyan-300 group-hover:via-white group-hover:to-indigo-300 transition-all duration-500 ease-out group-hover:tracking-[0.12em] block drop-shadow-sm">
                LOKESH P
              </span>

              {/* Floating Top & Bottom Cyan Accent Lines */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-3/4 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent group-hover:w-3/4 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            </h1>
          </div>

          {/* Clean Typewriter Role Display */}
          <div className="min-h-[38px] flex items-center justify-center pt-1">
            <div className="text-xs sm:text-base font-semibold tracking-wider font-mono text-cyan-300 bg-cyan-950/60 px-4 py-1.5 rounded-lg border border-cyan-800/60 inline-flex items-center shadow-sm">
              <span>{currentRoleText}</span>
              <span className="inline-block w-1 h-3.5 sm:h-4 bg-cyan-400 ml-1 animate-pulse" />
            </div>
          </div>

          {/* Subline Tagline */}
          <div className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase pt-1">
            BUILDING WITH CODE + AI
          </div>

          {/* Open to Work Badge */}
          <div className="flex justify-center pt-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="lowercase">open to work</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] focus:outline-none"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all duration-200 focus:outline-none"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub Profile</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Lokesh_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onOpenResume?.()}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all duration-200 focus:outline-none"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="pt-8 border-t border-slate-800/80 max-w-md mx-auto flex items-center justify-center space-x-6 text-slate-400 text-xs font-mono">
            <span className="text-slate-400">Connect with me:</span>
            <div className="flex items-center space-x-4">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 rounded-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 rounded-lg transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 rounded-lg transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pure Circular Full-Size Profile Photo Lightbox Modal */}
      {isPhotoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in cursor-pointer"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          {/* Floating Close Button */}
          <button
            onClick={() => setIsPhotoModalOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 shadow-2xl transition-all z-50 cursor-pointer"
            title="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Pure Circular Image Container with Glowing Cyan-Indigo Ring */}
          <div
            className="relative p-1.5 sm:p-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500 shadow-[0_0_60px_rgba(6,182,212,0.5)] cursor-default transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PERSONAL_INFO.profileImageUrl}
              alt={PERSONAL_INFO.name}
              className="w-72 h-72 sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] object-cover object-[center_15%] rounded-full border-4 sm:border-6 border-slate-950 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
