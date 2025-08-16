import Header from "@/components/Header";
import YCombinatorBanner from "@/components/YCombinatorBanner";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import CalendarSection from "@/components/CalendarSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PainPointsSection from "@/components/PainPointsSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import StrategicPlanSection from "@/components/StrategicPlanSection";
import WorkflowSection from "@/components/WorkflowSection";
import ContextualMessagingSection from "@/components/ContextualMessagingSection";
import TechPartnerSection from "@/components/TechPartnerSection";
import PromiseSection from "@/components/PromiseSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-subtle text-foreground">
      <Header />
      <main>
        <YCombinatorBanner />
        <HeroSection />
        <TrustedBySection />
        <CalendarSection />
        <TestimonialsSection />
        <PainPointsSection />
        <ValuePropositionSection />
        <StrategicPlanSection />
        <WorkflowSection />
        <ContextualMessagingSection />
        <TechPartnerSection />
        <PromiseSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
