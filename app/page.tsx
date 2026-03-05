import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import DonationSection from '@/components/DonationSection';
import StoriesSection from '@/components/StoriesSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <DonationSection />
      <StatsSection />
      <StoriesSection />
      <Footer />
    </main>
  );
}
