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
    { name: "HDFC Bank", logo: "🏦" },
    { name: "SBI", logo: "🏦" },
    { name: "ICICI Bank", logo: "🏦" },
    { name: "Axis Bank", logo: "🏦" },
    { name: "Kotak Bank", logo: "🏦" },
    { name: "Punjab National Bank", logo: "🏦" }
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
      {/* Breadcrumbs */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center space-x-2">
                {index === 0 && <Home className="w-4 h-4" />}
                <span className={index === breadcrumbs.length - 1 ? "text-foreground font-medium" : "hover:text-foreground cursor-pointer"}>
                  {crumb.label}
                </span>
                {index < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4" />}
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

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-8 space-y-16">
        
        {/* Overview Section */}
        <section id="overview" className="space-y-6">
          <h2 className="text-2xl font-bold">Project Overview</h2>
          <div className="prose prose-neutral max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {property.overview}
            </p>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="space-y-6">
          <h2 className="text-2xl font-bold">Amenities & Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border text-center hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{amenity.icon}</div>
                <p className="text-sm font-medium">{amenity.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Floor Plans Section - Replaced with new component */}
        <FloorPlansSection 
          isAuthenticated={isAuthenticated}
          onAuthRequired={handleAuthRequired}
        />

        {/* Pricing Section */}
        <section id="pricing" className="space-y-6">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <div className="bg-card rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Type</th>
                    <th className="text-left p-4 font-medium">Carpet Area</th>
                    <th className="text-left p-4 font-medium">Price</th>
                    <th className="text-left p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {property.units.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4 font-medium">{item.type}</td>
                      <td className="p-4 text-muted-foreground">{item.area}</td>
                      <td className="p-4">
                        {item.locked && !isAuthenticated ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-muted-foreground">Hidden</span>
                            <Eye className="w-4 h-4 text-muted-foreground" />
                          </div>
                        ) : (
                          <span className="font-medium">{item.price}</span>
                        )}
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <Check className="w-3 h-3 mr-1" />
                          Available
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t bg-muted/25">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={handleAuthRequired}>
                  Sign In to Unlock Full Pricing
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Cost Sheet
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Units Section */}
        <section id="units" className="space-y-6">
          <h2 className="text-2xl font-bold">Unit Availability</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["A103", "B207", "C145", "D089"].map((unit, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border text-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">📱</span>
                </div>
                <p className="font-medium">{unit}</p>
                <p className="text-sm text-muted-foreground">2BHK</p>
              </div>
            ))}
            {/* Blurred unit cards */}
            {["E156", "F201", "G089", "H134"].map((unit, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border text-center opacity-50 blur-sm">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">📱</span>
                </div>
                <p className="font-medium">{unit}</p>
                <p className="text-sm text-muted-foreground">3BHK</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" onClick={handleAuthRequired}>
              Unlock All Units
            </Button>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-6">
          <h2 className="text-2xl font-bold">Photos & Videos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {property.images.slice(0, 7).map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                <img src={image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {index === 3 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                )}
              </div>
            ))}
            <div className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-sm">+12 more</p>
                <p className="text-xs">View All</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Banks Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Partner Banks</h2>
          <div className="bg-card rounded-lg border p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {property.partnerBanks.map((bank, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-background">
                  <div className="text-2xl">{bank.logo}</div>
                  <div>
                    <p className="font-medium text-sm">{bank.name}</p>
                    {index < 3 && <Badge variant="secondary" className="text-xs mt-1">Pre-approved</Badge>}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button>
                <Phone className="w-4 h-4 mr-2" />
                Talk to Our Loan Advisor
              </Button>
            </div>
          </div>
        </section>

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
