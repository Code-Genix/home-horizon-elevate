import { useParams } from "react-router-dom";
import { useState } from "react";
import PropertyHeader from "@/components/property/PropertyHeader";
import PropertyTabs from "@/components/property/PropertyTabs";
import AboutBuilder from "@/components/property/AboutBuilder";
import FaqAccordion from "@/components/property/FaqAccordion";
import RelatedProjectsCarousel from "@/components/property/RelatedProjectsCarousel";
import GetLocationModal from "@/components/property/GetLocationModal";
import AuthModal from "@/components/property/AuthModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Calendar, Download } from "lucide-react";

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
    "/koregaon-park.jpg",
    "/koregaon-park.jpg",
    "/koregaon-park.jpg",
    "/koregaon-park.jpg",
    "/koregaon-park.jpg",
    "/koregaon-park.jpg"
  ],
  builder: {
    name: "Rohan Builders",
    logo: "/koregaon-park.jpg",
    description: "Trusted name in real estate for over 35 years",
    otherProjects: 25
  },
  tags: ["Ready to Move", "RERA Approved", "Premium Location"],
  overview: "Experience luxury living at Rohan Ekam Balewadi with world-class amenities and strategic location.",
  amenities: [
    "Swimming Pool", "Gymnasium", "Clubhouse", "Children's Play Area",
    "Landscaped Gardens", "Power Backup", "Security", "Parking"
  ],
  partnerBanks: ["HDFC", "SBI", "ICICI", "Axis Bank", "Kotak"],
  units: [
    { type: "1BHK", area: "650 sq.ft", price: "₹1.30 Cr", available: 5 },
    { type: "2BHK", area: "950 sq.ft", price: "₹2.10 Cr", available: 3 },
    { type: "3BHK", area: "1250 sq.ft", price: "₹3.35 Cr", available: 2 }
  ]
});

const PropertyDetails = () => {
  const { id } = useParams();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const property = getPropertyData(id || "1");

  const handleLocationClick = () => {
    if (isAuthenticated) {
      // Show full location info
      return;
    }
    setShowLocationModal(true);
  };

  const handleAuthRequired = () => {
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Home</span>
            <span>/</span>
            <span>Pune</span>
            <span>/</span>
            <span>Balewadi</span>
            <span>/</span>
            <span className="text-foreground">{property.name}</span>
          </nav>
        </div>
      </div>

      {/* Property Header */}
      <PropertyHeader 
        property={property}
        onLocationClick={handleLocationClick}
        onAuthRequired={handleAuthRequired}
        isAuthenticated={isAuthenticated}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <PropertyTabs 
              property={property}
              onAuthRequired={handleAuthRequired}
              isAuthenticated={isAuthenticated}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="font-semibold text-lg mb-4">Interested in this property?</h3>
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Visit
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Partner Banks */}
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="font-semibold mb-4">Partner Banks</h3>
              <div className="grid grid-cols-2 gap-3">
                {property.partnerBanks.map((bank) => (
                  <div key={bank} className="bg-background rounded-lg p-3 text-center text-sm">
                    {bank}
                  </div>
                ))}
              </div>
              <Badge className="w-full mt-4 justify-center" variant="secondary">
                Pre-Approved Loans Available
              </Badge>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-12 space-y-12">
          <AboutBuilder builder={property.builder} />
          <FaqAccordion />
          <RelatedProjectsCarousel />
        </div>
      </div>

      {/* Modals */}
      <GetLocationModal 
        open={showLocationModal}
        onOpenChange={setShowLocationModal}
        property={property}
        onSignInClick={() => {
          setShowLocationModal(false);
          setShowAuthModal(true);
        }}
      />

      <AuthModal 
        open={showAuthModal}
        onOpenChange={setShowAuthModal}
        onSuccess={() => {
          setIsAuthenticated(true);
          setShowAuthModal(false);
        }}
      />
    </div>
  );
};

export default PropertyDetails;