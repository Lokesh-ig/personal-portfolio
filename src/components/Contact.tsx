import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Send, Copy, Check, Sparkles, MessageSquare, AlertCircle, QrCode, Smartphone, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactProps {
  onOpenQR?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenQR }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const [submissionMethod, setSubmissionMethod] = useState<'api' | 'mailto' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || '046b7011-46eb-4eb5-918d-b1ca8e0c1eeb';

    if (web3FormsKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
            message: formData.message,
            from_name: `${formData.name} (Portfolio)`
          })
        });

        const result = await response.json();
        if (result.success) {
          setIsSubmitting(false);
          setSubmissionMethod('api');
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      } catch {
        // Fallback to mailto
      }
    }

    // Default Mailto fallback
    setSubmissionMethod('mailto');
    setIsSubmitting(false);
    setSubmitted(true);

    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 relative bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Useful.
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mt-2 leading-relaxed">
            Whether it's a software development opportunity, AI/ML project, or technical collaboration, feel free to connect with me.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Contact Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f172a] border border-slate-800/80 p-6 sm:p-8 rounded-2xl glass-panel space-y-6">
              <h3 className="text-lg font-bold text-white font-mono border-b border-slate-800 pb-3">
                Contact Information
              </h3>

              {/* Email Item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 group">
                <div className="flex items-center space-x-3 truncate">
                  <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-400 font-mono block">EMAIL</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-semibold text-slate-200 hover:text-cyan-300 truncate block font-mono"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg shrink-0 ml-2"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 group">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">PHONE</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs font-semibold text-slate-200 hover:text-cyan-300 font-mono"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800 shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">LINKEDIN</span>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 font-mono">
                      linkedin.com/in/lokesh-p-dev
                    </span>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-mono">Connect →</span>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">GITHUB</span>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 font-mono">
                      github.com/Lokesh-ig
                    </span>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-mono">Follow →</span>
              </a>

              {/* Mobile Portfolio QR Code Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <QrCode className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                      Mobile Portfolio QR
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800">
                    SCAN TO VIEW
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    onClick={onOpenQR}
                    className="p-2 bg-white rounded-lg shadow-md border border-slate-200 shrink-0 cursor-pointer hover:scale-105 transition-transform"
                    title="Click to view full QR code"
                  >
                    <img
                      src={PERSONAL_INFO.qrCodeUrl}
                      alt="Portfolio QR Code"
                      className="w-20 h-20 object-contain block"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-1.5 text-[11px] text-cyan-300 font-mono">
                      <Smartphone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Scan with phone camera</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                      Open and bookmark this portfolio instantly on your mobile device.
                    </p>
                    <div className="flex items-center space-x-2 pt-0.5">
                      <button
                        onClick={onOpenQR}
                        className="inline-flex items-center space-x-1 px-2.5 py-1 text-[11px] font-mono text-cyan-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
                      >
                        <QrCode className="w-3 h-3 text-cyan-400" />
                        <span>Enlarge</span>
                      </button>
                      <a
                        href={PERSONAL_INFO.qrCodeUrl}
                        download="Lokesh_Portfolio_QR.png"
                        className="inline-flex items-center space-x-1 px-2.5 py-1 text-[11px] font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
                      >
                        <Download className="w-3 h-3 text-cyan-400" />
                        <span>Save PNG</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] border border-slate-800/80 p-6 sm:p-8 rounded-2xl glass-panel space-y-6">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-mono">
                  Send a Direct Message
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Quick Response
                </span>
              </div>

              {submitted ? (
                <div className="p-6 bg-cyan-950/40 border border-cyan-800/80 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-900 border border-cyan-700 flex items-center justify-center text-cyan-300 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white font-mono">
                    {submissionMethod === 'api' ? 'Message Sent Successfully!' : 'Message Prepared!'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {submissionMethod === 'api' ? (
                      <>
                        Thank you for reaching out! Your message has been delivered directly to Lokesh's inbox (<strong className="text-cyan-300 font-mono">{PERSONAL_INFO.email}</strong>). He will respond to your email address shortly.
                      </>
                    ) : (
                      <>
                        Your default email client has been launched with your message. If it did not open automatically, you can also email me directly at{' '}
                        <strong className="text-cyan-300 font-mono">{PERSONAL_INFO.email}</strong>.
                      </>
                    )}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-cyan-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-semibold block">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-semibold block">YOUR EMAIL *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold block">SUBJECT</label>
                    <input
                      type="text"
                      placeholder="e.g. Full-Stack Developer Opportunity / Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold block">MESSAGE *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your project details, interview invitation, or message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Preparing Email...' : 'Send Message'}</span>
                  </button>

                  {/* Integration Config Note */}
                  <p className="text-[10px] text-slate-500 text-center pt-2">
                    <AlertCircle className="w-3 h-3 inline mr-1 text-slate-500" />
                    Directly triggers default mail client. For serverless form processing, plug in your Formspree/EmailJS API key in <code className="text-cyan-400">Contact.tsx</code>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
