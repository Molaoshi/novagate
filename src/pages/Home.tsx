import Hero3D from '../sections/Hero3D';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import FounderSection from '../sections/FounderSection';
import GallerySection from '../sections/GallerySection';
import CTASection from '../sections/CTASection';

export default function Home() {
  return (
    <div>
      <Hero3D />
      <div className="relative z-10 bg-[#F5F3EF]">
        <AboutSection />
        <ServicesSection />
        <FounderSection />
        <GallerySection />
        <CTASection />
      </div>
    </div>
  );
}
