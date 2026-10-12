import React from 'react';
import { X, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm sm:text-base font-semibold text-slate-200 font-mono">
              Resume Document — {PERSONAL_INFO.name}
            </h3>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Lokesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-lg transition-colors shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Resume View - 100% Matching Uploaded PDF Layout */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-950 flex-1">
          <div className="max-w-3xl mx-auto bg-white text-gray-900 p-6 sm:p-10 rounded-xl shadow-2xl space-y-4 font-sans leading-relaxed text-xs border border-gray-200">
            {/* Document Header */}
            <div className="text-center pb-2.5 border-b-2 border-gray-900 space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 font-sans uppercase">
                LOKESH P
              </h1>
              <p className="text-[11px] sm:text-xs text-gray-800 font-normal">
                +91 93420 30354 &nbsp;|&nbsp;{' '}
                <a href="mailto:lokesh2005lokesh15@gmail.com" className="text-gray-800 hover:underline">
                  lokesh2005lokesh15@gmail.com
                </a>{' '}
                &nbsp;|&nbsp;{' '}
                <a
                  href="https://linkedin.com/in/lokesh-p-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  linkedin.com/in/lokesh-p-dev
                </a>{' '}
                &nbsp;|&nbsp;{' '}
                <a
                  href="https://github.com/Lokesh-ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Lokesh-ig (Lokesh P)
                </a>
              </p>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wide border-b border-gray-900 pb-0.5">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-[11.5px] text-gray-800 leading-normal pt-1 text-left">
                Computer Science and Engineering graduate with hands-on experience in AI-integrated full-stack development and machine learning techniques, including NLP, BERT, and Scikit-learn. Seeking an entry-level Software Developer role to apply my technical skills and contribute to building efficient, scalable applications.
              </p>
            </div>

            {/* Internship */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wide border-b border-gray-900 pb-0.5">
                INTERNSHIP
              </h2>

              {/* Internship 1: Nova Spark Hub */}
              <div className="space-y-0.5">
                <div className="flex flex-col sm:flex-row justify-between text-xs font-bold text-gray-900">
                  <span>Full Stack Development Intern <span className="font-semibold text-gray-800">— Nova Spark Hub</span></span>
                  <span className="text-gray-800 font-normal text-[11px]">Jul 2025 – Aug 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-800 pl-1">
                  <li>Contributed to full-stack web development tasks, gaining hands-on experience with frontend and backend integration.</li>
                  <li>Built and tested responsive UI components as part of a collaborative development team.</li>
                </ul>
              </div>

              {/* Internship 2: CodeAlpha */}
              <div className="space-y-0.5">
                <div className="flex flex-col sm:flex-row justify-between text-xs font-bold text-gray-900">
                  <span>Artificial Intelligence Intern <span className="font-semibold text-gray-800">— CodeAlpha</span></span>
                  <span className="text-gray-800 font-normal text-[11px]">Aug 2026 – Sep 2026</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-800 pl-1">
                  <li>Developed two AI-based applications: a Banking FAQ Chatbot using NLP, TF-IDF, Cosine Similarity, and Flask, a Real-Time Object Detection & Tracking System using YOLO, OpenCV, and Deep SORT.</li>
                  <li>Gained practical experience in python, Machine Learning, Natural Language Processing, Computer Vision, API development, and real-world AI application development.</li>
                </ul>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wide border-b border-gray-900 pb-0.5">
                TECHNICAL SKILLS
              </h2>
              <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-800 pt-1 pl-1">
                <li><strong>Programming Languages:</strong> Python, SQL, JavaScript</li>
                <li><strong>Web Development:</strong> HTML5, CSS3, Django, REST APIs</li>
                <li><strong>Machine Learning & NLP:</strong> BERT, Scikit-learn, Text Classification, Model Training</li>
                <li><strong>Concepts:</strong> Data Structures, Object-Oriented Programming, DBMS</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wide border-b border-gray-900 pb-0.5">
                PROJECTS
              </h2>

              {/* Project 1 */}
              <div className="space-y-0.5">
                <div className="flex justify-between text-xs font-bold text-gray-900">
                  <span>Employee Onboarding & Document Checklist Automation</span>
                  <span className="text-gray-800 font-normal text-[11px]">2026</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-800 pl-1">
                  <li>Developed an Employee Onboarding and Document Checklist system using Django, React, and PostgreSQL.</li>
                  <li>Built features for employee onboarding, document submission, checklist management, and status tracking.</li>
                  <li>Integrated REST APIs between React and Django to streamline and automate employee onboarding process.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="space-y-0.5">
                <div className="flex justify-between text-xs font-bold text-gray-900">
                  <span>ToxiGuard — AI-Based Comment Moderation System</span>
                  <span className="text-gray-800 font-normal text-[11px]">2026</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-800 pl-1">
                  <li>Built a real-time comment moderation system using React for frontend and Django/Flask for backend.</li>
                  <li>Implemented a BERT-based model to classify comments into multiple toxicity categories.</li>
                  <li>Designed an admin dashboard for reviewing flagged comments alongside the core moderation interface.</li>
                  <li>Applied threshold-based decision logic to automatically allow, flag, or delete toxic comments, reducing manual moderation effort.</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wide border-b border-gray-900 pb-0.5">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-800 pt-1 pl-1">
                <li>Python Programming Internship Certificate – CodSoft</li>
                <li>Artificial Intelligence Internship Certificate – CodeAlpha</li>
                <li>Software Development Job Simulation – Datacom (Issued by Forage)</li>
                <li>Full Stack Development Internship Certificate – Nova Spark Hub</li>
              </ul>
            </div>

            {/* Education */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wide border-b border-gray-900 pb-0.5">
                EDUCATION
              </h2>
              <div className="space-y-0.5 pt-1">
                <div className="flex flex-col sm:flex-row justify-between text-xs font-bold text-gray-900">
                  <span>Alpha College of Engineering <span className="font-normal text-gray-800">— B.E., Computer Science and Engineering</span></span>
                  <span className="text-gray-800 font-normal text-[11px]">2022 – 2026 | Chennai</span>
                </div>
                <div className="text-[11px] font-bold text-gray-900">
                  CGPA: 8.0 / 10
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wide border-b border-gray-900 pb-0.5">
                PORTFOLIO
              </h2>
              <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-800 pt-1 pl-1">
                <li>
                  <a
                    href="https://personal-portfolio-ten-mu-19.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline font-medium"
                  >
                    personal-portfolio-ten-mu-19.vercel.app
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 shrink-0 font-mono">
          <span>Official Resume View — Lokesh P</span>
          <span>A4 Document Format</span>
        </div>
      </div>
    </div>
  );
};
