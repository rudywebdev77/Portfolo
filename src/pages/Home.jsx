import 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/HeroSection';
import ExpertDesignerSection from '../sections/ExpertDesignerSection';
import ProcessSection from '../sections/ProcessSection';
import DesignServicesSection from '../sections/DesignServicesSection';
import RecentDesignsSection from '../sections/RecentDesignsSection';
import WhyDesignPartnerSection from '../sections/WhyDesignPartnerSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FaqSection from '../sections/FAQSection';
import FinalCtaSection from '../sections/FinalCtaSection';
import Footer from '../sections/Footer';
import CustomCursor from '../components/CustomCursor';
import BottomBlurOverlay from '../components/BottomBlurOverlay';
import FramerBadge from '../components/FramerBadge';

const Home = () => {
  return (
    <div className="flow-root relative w-full max-w-full overflow-x-clip min-h-screen bg-[#070709] text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <Navbar />
      <BottomBlurOverlay />
      <FramerBadge />

      {/* Main Content Flow */}
      <main className="relative z-20 bg-[#070709]">
        <HeroSection />
        <ExpertDesignerSection />
        <ProcessSection />
        <DesignServicesSection />
        <RecentDesignsSection />
        <WhyDesignPartnerSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
