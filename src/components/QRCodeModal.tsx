import React, { useState, useEffect } from 'react';
import { X, QrCode, Download, Copy, Check, ExternalLink, Smartphone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.portfolioUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-modal-title"
    >
      <div
        className="relative w-full max-w-md bg-[#0d1424] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden text-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500" />

        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 id="qr-modal-title" className="text-base font-bold text-white font-mono">
                Portfolio QR Code
              </h3>
              <p className="text-xs text-slate-400 font-mono">Scan to open on mobile</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Close QR Code Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* QR Code Presentation Box */}
        <div className="my-6 flex flex-col items-center">
          <div className="relative p-4 bg-white rounded-2xl shadow-xl shadow-cyan-500/10 border-2 border-cyan-500/30 group">
            <img
              src={PERSONAL_INFO.qrCodeUrl}
              alt="QR Code for Lokesh Portfolio"
              className="w-52 h-52 sm:w-56 sm:h-56 object-contain block rounded-lg"
            />
            {/* Center Logo/Initials Badge overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-[#0b0f17] border-2 border-cyan-400 flex items-center justify-center shadow-lg">
                <span className="text-cyan-400 font-mono font-black text-xs">LP</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-2 text-xs font-mono text-cyan-300">
            <Smartphone className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Point phone camera to scan</span>
          </div>

          {/* URL Pill */}
          <div className="mt-2 text-center">
            <code className="text-[11px] text-slate-400 font-mono bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-full select-all">
              {PERSONAL_INFO.portfolioUrl}
            </code>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2 border-t border-slate-800 font-mono text-xs">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Open Link</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={PERSONAL_INFO.qrCodeUrl}
              download="Lokesh_Portfolio_QR.png"
              className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download PNG</span>
            </a>

            <a
              href={PERSONAL_INFO.qrCodeSvgUrl}
              download="Lokesh_Portfolio_QR.svg"
              className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-colors"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download SVG</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
