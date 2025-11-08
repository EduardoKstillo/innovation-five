import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramSection } from './components/ProgramSection';
import { SpeakersSection } from './components/SpeakersSection';
import { LiveStreamSection } from './components/LiveStreamSection';
import { Footer } from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <SpeakersSection />
        <LiveStreamSection />
      </main>
      <Footer />
    </div>
  );
}
