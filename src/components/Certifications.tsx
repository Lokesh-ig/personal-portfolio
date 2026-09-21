import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { Certification } from '../types';
import { Award, ExternalLink, ShieldCheck, X } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 relative bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & VERIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={cert.id}
              className="bg-[#0f172a] border border-slate-800/80 p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {cert.period}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base font-bold text-white font-mono leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-1">
                    {cert.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Footer CTA */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono text-cyan-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div className={`relative w-full ${selectedCert.image || selectedCert.pdf ? 'max-w-2xl sm:max-w-4xl' : 'max-w-lg'} bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl p-4 sm:p-6 space-y-4 glass-panel max-h-[92vh] flex flex-col my-auto`}>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 shrink-0">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-cyan-400 font-bold">CERTIFICATE PREVIEW — {selectedCert.organization}</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1">
              {selectedCert.image ? (
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-2 sm:p-3 flex items-center justify-center">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
                  />
                </div>
              ) : selectedCert.pdf ? (
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden h-[65vh]">
                  <iframe
                    src={selectedCert.pdf}
                    title={selectedCert.title}
                    className="w-full h-full border-none rounded-xl"
                  />
                </div>
              ) : (
                <div className="bg-[#0b0f17] border border-slate-800 p-6 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono">{selectedCert.title}</h3>
                  <p className="text-xs text-cyan-300 font-mono">Issued by {selectedCert.organization} — {selectedCert.period}</p>
                  <p className="text-xs text-slate-300 pt-2">{selectedCert.description}</p>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-800/80 shrink-0">
              <div className="flex items-center space-x-4">
                {selectedCert.image && (
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Full Image</span>
                  </a>
                )}
                {selectedCert.pdf && (
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Original PDF</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
