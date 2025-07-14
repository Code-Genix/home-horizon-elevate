import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FeaturedProperties from "@/components/FeaturedProperties"
import ValueProposition from "@/components/ValueProposition"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <ValueProposition />
      <Footer />
    </div>
  );
};

export default Index;
