import { ScrollProgress, FloatingActionButton } from "./components/ScrollComponents";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { VideoFormSection } from "./components/VideoFormSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[color:var(--surface)] text-[color:var(--text-primary)] overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <VideoFormSection />
        <ProcessSection />
        <ServicesSection />
        <TestimonialsSection />
        <AdvantagesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;
