import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Home, MapPin, Phone, Calendar, Download, Shield, Eye, EyeOff, Star, Check, Play } from "lucide-react";
import PropertyHeader from "@/components/property/PropertyHeader";
import GetLocationModal from "@/components/property/GetLocationModal";
import AuthModal from "@/components/property/AuthModal";
import AboutBuilder from "@/components/property/AboutBuilder";
import FaqAccordion from "@/components/property/FaqAccordion";
import RelatedProjectsCarousel from "@/components/property/RelatedProjectsCarousel";
import FloorPlansSection from "@/components/property/FloorPlansSection";
import PartnerBanks from "@/components/property/PartnerBanks";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Mock property data
const getPropertyData = (id: string) => ({
  id,
  name: "Rohan Ekam Balewadi",
  location: "Balewadi, Pune",
  fullAddress: "Plot No. 123, Sector 7, Balewadi, Pune - 411045",
  priceRange: "₹1.30 Cr - ₹3.35 Cr",
  bhkTypes: ["1BHK", "2BHK", "3BHK"],
  rera: "P52100047890",
  images: [
    "/Rohan Ekum/rohan-ekam-living-room.jpg",
    "/Rohan Ekum/rohan-ekam-balcony.jpg",
    "/Rohan Ekum/rohan-ekam-bedroom.jpg",
    "/Rohan Ekum/rohan-ekam-kitchen.jpg",
    "/Rohan Ekum/rohan-ekam-society-img1.jpg",
    "/Rohan Ekum/rohan-ekam-society-img2.jpg",
  ],
  builder: {
    name: "Rohan Builders",
    logo: "/koregaon-park.jpg",
    description: "Rohan Builders is a pioneer in Indian real estate, with over 35 years of proven excellence in construction, innovation, and sustainable design. Known for delivering quality projects across Pune and Bangalore, Rohan Builders focus on blending architecture with nature. Their portfolio includes award-winning residential projects, premium commercial buildings, and smart urban communities built on transparency, timely delivery, and customer trust.",
    experience: "35+ years",
    projectsDelivered: "25+",
    otherProjects: 25
  },
  tags: ["Ready to Move", "RERA Approved", "Premium Location"],
  overview: "Rohan Ekam is a premium residential development located in the vibrant neighborhood of Balewadi, Pune. Designed with a focus on urban comfort and sustainable architecture, this project brings together thoughtfully crafted homes, lush green spaces, and a host of modern amenities. Positioned for excellent connectivity to the Mumbai-Pune Expressway, Hinjawadi IT Park, and top-rated schools, Rohan Ekam balances city access with a peaceful living experience. Ideal for professionals and families alike, the project embodies a lifestyle of ease, elegance, and value.",
  amenities: [
    { name: "Swimming Pool", icon: "🏊" },
    { name: "Gymnasium", icon: "🏋️" },
    { name: "Clubhouse", icon: "🏢" },
    { name: "Children's Play Area", icon: "🎮" },
    { name: "Landscaped Gardens", icon: "🌳" },
    { name: "Power Backup", icon: "⚡" },
    { name: "Security", icon: "🔒" },
    { name: "Parking", icon: "🚗" }
  ],
  partnerBanks: [
    { name: "HDFC Bank", logo: "/lovable-uploads/81b31e6d-fea5-4de3-856c-7902094b884a.png", preApproved: true },
    { name: "SBI", logo: "/lovable-uploads/6b002fca-9e8f-42fa-8b96-5debbeeb532b.png", preApproved: true },
    { name: "ICICI Bank", logo: "/lovable-uploads/3c7672f5-6eec-4a1c-a399-c8dfc87f11ff.png", preApproved: true },
    { name: "Axis Bank", logo: "/lovable-uploads/717ecf42-d966-4a2a-ba1c-caf1ff728db7.png", preApproved: false },
    { name: "Kotak Bank", logo: "/lovable-uploads/806e47ae-7165-4537-9442-a84e5a840b0d.png", preApproved: false },
    { name: "Punjab National Bank", logo: "/lovable-uploads/cb81daaa-d012-414a-b31d-3f45c412284f.png", preApproved: false }
  ],
  units: [
    { type: "1BHK", area: "650 sq.ft", price: "₹1.30 Cr", available: 5, locked: false },
    { type: "2BHK", area: "950 sq.ft", price: "₹2.10 Cr", available: 3, locked: false },
    { type: "3BHK", area: "1250 sq.ft", price: "Hidden", available: 2, locked: true }
  ]
});

const PropertyDetails = () => {
  const { id } = useParams();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMasterPlan, setShowMasterPlan] = useState(true);
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [modalPhotoIndex, setModalPhotoIndex] = useState(0);

  const property = getPropertyData(id || "1");

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Pune", href: "/properties?city=pune" },
    { label: "Balewadi", href: "/properties?location=balewadi" },
    { label: property.name, href: "#" }
  ];

  const navigationSections = [
    { id: "overview", label: "Overview" },
    { id: "amenities", label: "Amenities" },
    { id: "floor-plans", label: "Floor Plans" },
    { id: "pricing", label: "Pricing" },
    { id: "units", label: "Units" },
    { id: "gallery", label: "Gallery" }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationSections.map(section => section.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocationClick = () => {
    setShowLocationModal(true);
  };

  const handleAuthRequired = () => {
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setShowLocationModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs - Improved mobile responsiveness */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto scrollbar-hide">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                {index === 0 && <Home className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span className={`${index === breadcrumbs.length - 1 ? "text-foreground font-medium" : "hover:text-foreground cursor-pointer"} truncate max-w-[80px] sm:max-w-none`}>
                  {crumb.label}
                </span>
                {index < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <PropertyHeader
        property={property}
        onLocationClick={handleLocationClick}
        onAuthRequired={handleAuthRequired}
        isAuthenticated={isAuthenticated}
      />

      {/* Sticky Navigation - Improved mobile responsiveness */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-3 sm:px-4">
          <nav className="flex space-x-2 sm:space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`py-2 sm:py-3 md:py-4 px-1 sm:px-2 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeSection === section.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections - Improved mobile responsiveness */}
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8 space-y-8 sm:space-y-12 md:space-y-16">
        
        {/* Overview Section */}
        <section id="overview" className="space-y-3 sm:space-y-4 md:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Project Overview</h2>
          <div className="prose prose-neutral max-w-none">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {property.overview}
            </p>
          </div>
        </section>

        {/* Amenities Section - Improved grid responsiveness */}
        <section id="amenities" className="space-y-3 sm:space-y-4 md:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Amenities & Facilities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="bg-card p-2 sm:p-3 md:p-4 rounded-lg border text-center hover:shadow-md transition-shadow">
                <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{amenity.icon}</div>
                <p className="text-xs sm:text-sm font-medium leading-tight">{amenity.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Floor Plans Section - Replaced with new component */}
        <FloorPlansSection 
          isAuthenticated={isAuthenticated}
          onAuthRequired={handleAuthRequired}
        />

        {/* Pricing Section - Improved mobile table */}
        <section id="pricing" className="space-y-3 sm:space-y-4 md:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Pricing</h2>
          <div className="bg-card rounded-lg border overflow-hidden">
            {/* Mobile card layout for small screens */}
            <div className="block sm:hidden">
              {property.units.map((item, index) => (
                <div key={index} className="p-3 border-b last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">{item.type}</p>
                      <p className="text-xs text-muted-foreground">{item.area}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      <Check className="w-3 h-3 mr-1" />
                      Available
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    {item.locked && !isAuthenticated ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-muted-foreground text-sm">Hidden</span>
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      </div>
                    ) : (
                      <span className="font-medium text-sm">{item.price}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop table layout */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 sm:p-4 font-medium text-sm">Type</th>
                    <th className="text-left p-3 sm:p-4 font-medium text-sm">Carpet Area</th>
                    <th className="text-left p-3 sm:p-4 font-medium text-sm">Price</th>
                    <th className="text-left p-3 sm:p-4 font-medium text-sm">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {property.units.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3 sm:p-4 font-medium text-sm">{item.type}</td>
                      <td className="p-3 sm:p-4 text-muted-foreground text-sm">{item.area}</td>
                      <td className="p-3 sm:p-4">
                        {item.locked && !isAuthenticated ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-muted-foreground text-sm">Hidden</span>
                            <Eye className="w-4 h-4 text-muted-foreground" />
                          </div>
                        ) : (
                          <span className="font-medium text-sm">{item.price}</span>
                        )}
                      </td>
                      <td className="p-3 sm:p-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          Available
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-3 sm:p-4 border-t bg-muted/25">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button variant="outline" size="sm" onClick={handleAuthRequired} className="w-full sm:w-auto">
                  Sign In to Unlock Full Pricing
                </Button>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Download Cost Sheet
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Units Section - Improved grid responsiveness */}
        <section id="units" className="space-y-3 sm:space-y-4 md:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Unit Availability</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {["A103", "B207", "C145", "D089"].map((unit, index) => (
              <div key={index} className="bg-card p-2 sm:p-3 md:p-4 rounded-lg border text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <span className="text-sm sm:text-base md:text-lg">📱</span>
                </div>
                <p className="font-medium text-xs sm:text-sm">{unit}</p>
                <p className="text-xs text-muted-foreground">2BHK</p>
              </div>
            ))}
            {/* Blurred unit cards */}
            {["E156", "F201", "G089", "H134"].map((unit, index) => (
              <div key={index} className="bg-card p-2 sm:p-3 md:p-4 rounded-lg border text-center opacity-50 blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <span className="text-sm sm:text-base md:text-lg">📱</span>
                </div>
                <p className="font-medium text-xs sm:text-sm">{unit}</p>
                <p className="text-xs text-muted-foreground">3BHK</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="sm" onClick={handleAuthRequired} className="w-full sm:w-auto">
              Unlock All Units
            </Button>
          </div>
        </section>

        {/* Gallery Section - Improved responsive grid */}
        <section id="gallery" className="space-y-3 sm:space-y-4 md:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {property.images.slice(0, 7).map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer"
                onClick={() => { setPhotoModalOpen(true); setModalPhotoIndex(index); }}
              >
                <img 
                  src={image} 
                  alt={`${property.name} - Photo ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
            <div className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-xs sm:text-sm">+12 more</p>
                <p className="text-xs">View All</p>
              </div>
            </div>
          </div>
          
          {/* Photo Modal - Improved mobile responsiveness */}
          <Dialog open={photoModalOpen} onOpenChange={setPhotoModalOpen}>
            <DialogContent className="max-w-[95vw] sm:max-w-3xl flex flex-col items-center p-2 sm:p-6">
              <div className="relative w-full flex items-center justify-center">
                <button
                  className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 shadow"
                  onClick={() => setModalPhotoIndex((modalPhotoIndex - 1 + property.images.length) % property.images.length)}
                  aria-label="Previous photo"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 rotate-180" />
                </button>
                <img
                  src={property.images[modalPhotoIndex]}
                  alt="Large Property Photo"
                  className="max-h-[60vh] sm:max-h-[70vh] w-auto rounded-lg object-contain mx-auto"
                />
                <button
                  className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 shadow"
                  onClick={() => setModalPhotoIndex((modalPhotoIndex + 1) % property.images.length)}
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="mt-2 text-center text-muted-foreground text-xs sm:text-sm">
                {modalPhotoIndex + 1} / {property.images.length}
              </div>
            </DialogContent>
          </Dialog>
        </section>

        {/* Partner Banks Section */}
        <PartnerBanks banks={property.partnerBanks} />

        <AboutBuilder builder={property.builder} />
        <FaqAccordion />
        <RelatedProjectsCarousel />
      </div>

      <GetLocationModal
        open={showLocationModal}
        onOpenChange={setShowLocationModal}
        property={property}
        onSignInClick={handleAuthRequired}
      />

      <AuthModal
        open={showAuthModal}
        onOpenChange={setShowAuthModal}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default PropertyDetails;
