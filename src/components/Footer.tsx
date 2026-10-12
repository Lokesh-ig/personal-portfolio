import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a10] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="relative w-8 h-8 rounded-lg p-[1.5px] bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/20 overflow-hidden shrink-0">
                <img
                  src={PERSONAL_INFO.profileImageUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top rounded-[6px]"
                />
              </div>
              <span className="text-xl font-bold font-mono text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm font-mono leading-relaxed">
              Software Developer | AI/ML Enthusiast | Full-Stack Developer | Python Developer 
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Building practical software applications combining 
              Web Development, Python, and AI/ML.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-slate-400">
              <a href="#home" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">
                Skills
              </a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">
                Experience
              </a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                Projects
              </a>
              <a href="#certifications" className="hover:text-cyan-400 transition-colors">
                Certifications
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Column 3: Social & Back to Top */}
          <div className="md:col-span-3 space-y-4 font-mono text-xs flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs">
                Connect & Social
              </h4>
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-lg text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-lg text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-lg text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors w-fit"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to top</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © 2026 Lokesh P. All rights reserved.
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>
      </div>
    </footer>
  );
};
