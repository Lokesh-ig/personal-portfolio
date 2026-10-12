import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { CurrentLearning } from './components/CurrentLearning';
import { DeveloperApproach } from './components/DeveloperApproach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Quick Stats Strip */}
        <QuickStats />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Experience Timeline Section */}
        <Experience />

        {/* Projects & Interactive Workflows Section */}
        <Projects />

        {/* Certifications Section */}
        <Certifications />

        {/* Education Academic Section */}
        <Education />

        {/* Current Learning & Interests Section */}
        <CurrentLearning />

        {/* Developer Approach Section */}
        <DeveloperApproach />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
