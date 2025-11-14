import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramSection } from './components/ProgramSection';
import { SpeakersSection } from './components/SpeakersSection';
import { LiveStreamSection } from './components/LiveStreamSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        {/* <ProgramSection /> */}
        <LiveStreamSection />
      </main>
      <Footer />
    </div>
  );
}