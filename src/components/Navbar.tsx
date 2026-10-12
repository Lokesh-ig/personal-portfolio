import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const isManualClickRef = useRef(false);
  const clickTimeoutRef = useRef<number | null>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Ignore scroll-based active section switching if user manually clicked a link
      if (isManualClickRef.current) return;

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update animated sliding pill position whenever active section changes
  useEffect(() => {
    const updateSlider = () => {
      const activeEl = itemRefs.current[activeSection];
      const navEl = navContainerRef.current;
      if (activeEl && navEl) {
        const activeRect = activeEl.getBoundingClientRect();
        const navRect = navEl.getBoundingClientRect();
        setSliderStyle({
          left: activeRect.left - navRect.left,
          width: activeRect.width,
          opacity: 1
        });
      }
    };

    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const sectionId = href.substring(1);

    // Lock scroll-based section switching so pill glides directly to target in 1 fluid motion
    isManualClickRef.current = true;
    setActiveSection(sectionId);

    if (clickTimeoutRef.current) {
      window.clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = window.setTimeout(() => {
      isManualClickRef.current = false;
    }, 800);

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            {/* Avatar Container with Subtle Scale-105 & Glowing Cyan Border */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 via-indigo-500 to-cyan-500 shadow-md shadow-cyan-500/20 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-300 shrink-0">
              <img
                src={PERSONAL_INFO.profileImageUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-[center_15%] rounded-full border border-slate-900 group-hover:border-cyan-400 transition-colors duration-300"
              />
            </div>

            {/* Brand Title & Subtitle */}
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white font-mono group-hover:text-cyan-400 transition-colors duration-300">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 font-mono hidden sm:inline-block">
                SOFTWARE DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Hardware-Accelerated Sliding Pill */}
          <nav
            ref={navContainerRef}
            className="relative hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm"
          >
            {/* Hardware Accelerated Sliding Active Indicator Pill */}
            <div
              className="absolute top-1.5 bottom-1.5 left-0 rounded-full bg-gradient-to-r from-cyan-500/30 via-indigo-500/25 to-cyan-500/30 border border-cyan-400/50 shadow-md shadow-cyan-500/20 pointer-events-none transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${sliderStyle.left}px, 0, 0)`,
                width: `${sliderStyle.width}px`,
                opacity: sliderStyle.opacity
              }}
            />

            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  ref={(el) => { itemRefs.current[sectionId] = el; }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative z-10 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-cyan-300 font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-all duration-200 hover:border-slate-500 shadow-sm"
              title="View GitHub Repository & Profile"
            >
              <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-all duration-200 hover:border-slate-500 shadow-sm"
              aria-label="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-lg transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center sm:hidden space-x-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResume}
              className="p-2 text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0b0f17]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col space-y-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub Profile</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
