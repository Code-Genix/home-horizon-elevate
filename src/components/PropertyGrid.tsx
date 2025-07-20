import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Bell, Bookmark } from "lucide-react";

interface PropertyFilters {
  priceRange: [number, number];
  bhkTypes: string[];
  possessionStatus: string;
  downPayment: number;
  projectTypes: string[];
  sortBy: string;
}

// Real property data
const mockProperties = [
  {
    id: 1,
    images: [
      "/Rohan%20Ekum/rohan-ekam-society-img1.jpg",
      "/Rohan%20Ekum/rohan-ekam-living-room.jpg",
      "/Rohan%20Ekum/rohan-ekam-kitchen.jpg"
    ],
    title: "Rohan Ekam Balewadi",
    location: "Balewadi, Pune",
    price: "₹1.30 Cr - ₹3.35 Cr",
    bhkOptions: "1BHK / 2BHK / 3BHK",
    carpetArea: "650–1250 sq.ft.",
    possession: "Ready to Move",
    tags: ["Ready to Move", "RERA Approved", "Premium Location"],
    isPremium: true
  },
  {
    id: 2,
    images: [
      "/bonheur-by-engineers-horizon-img1.jpg",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "/bonheur-by-engineers-horizon-img2.jpg"
    ],
    title: "Bonheur by Engineers Horizon",
    location: "Wakad, Pune",
    price: "₹85 L – ₹1.4 Cr",
    bhkOptions: "1BHK / 2BHK / 3BHK",
    carpetArea: "650–1100 sq.ft.",
    possession: "Ready to Move",
    tags: ["Ready to Move", "RERA Approved"],
    isPremium: true
  },
  {
    id: 3,
    images: [
      "/32-pinewood-drive-img1.jpg",
      "/32-pinewood-drive-img2.jpg",
      "/32-pinewood-drive-img3.jpg"
    ],
    title: "32 Pinewood Drive",
    location: "Hinjawadi, Pune",
    price: "₹1.2 Cr – ₹2.1 Cr",
    bhkOptions: "2BHK / 3BHK",
    carpetArea: "900–1350 sq.ft.",
    possession: "Ready to Move",
    tags: ["Premium Location", "Modern Design"],
    isPremium: true
  },
  {
    id: 4,
    images: [
      "/aneesha-by-yugal-maheshwari-img2.jpg",
      "/aneesha-by-yugal-maheshwari-img3.jpg",
      "/aneesha-by-yugal-maheshwari-img1.jpg"
    ],
    title: "Aneesha by Yugal & Maheshwari",
    location: "Baner, Pune",
    price: "₹1.8 Cr – ₹3.2 Cr",
    bhkOptions: "3BHK / 3.5BHK",
    carpetArea: "1400–1800 sq.ft.",
    possession: "Ready to Move",
    tags: ["Luxury", "Premium Location"],
    isPremium: true
  },
  {
    id: 5,
    images: [
      "/majestic-towers-img1.jpg",
      "/majestic-towers-img2.jpg",
      "/majestic-towers-img3.jpg"
    ],
    title: "Majestique Towers",
    location: "Kharadi, Pune",
    price: "₹99 L – ₹1.55 Cr",
    bhkOptions: "2BHK / 3BHK",
    carpetArea: "826–1064 sq.ft.",
    possession: "Ready to Move",
    tags: ["Hot Deal", "RERA Approved"],
    isPremium: false
  },
  {
    id: 6,
    images: [
      "/45-paramount-img1.jpg",
      "/45-paramount-img2.jpg",
      "/45-paramount-img3.jpg"
    ],
    title: "45 Paramount",
    location: "Koregaon Park, Pune",
    price: "₹2.5 Cr – ₹4.8 Cr",
    bhkOptions: "3BHK / 4BHK+",
    carpetArea: "1800–2500 sq.ft.",
    possession: "Ready to Move",
    tags: ["Ultra Luxury", "Premium"],
    isPremium: true
  }
];

interface PropertyGridProps {
  filters: PropertyFilters;
}

const PropertyGrid = ({ filters }: PropertyGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [savedSearch, setSavedSearch] = useState(false);
  const propertiesPerPage = 6;

  const totalPages = Math.ceil(mockProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = mockProperties.slice(startIndex, startIndex + propertiesPerPage);

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            Properties in Wakad, Pune
          </h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Showing {startIndex + 1}-{Math.min(startIndex + propertiesPerPage, mockProperties.length)} of {mockProperties.length} results
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center justify-center space-x-2"
            onClick={() => setSavedSearch(!savedSearch)}
          >
            <Bookmark className={`h-4 w-4 ${savedSearch ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{savedSearch ? 'Saved' : 'Save Search'}</span>
            <span className="sm:hidden">{savedSearch ? 'Saved' : 'Save'}</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center justify-center space-x-2"
          >
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Enable Alerts</span>
            <span className="sm:hidden">Alerts</span>
          </Button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(i + 1);
                  }}
                  isActive={currentPage === i + 1}
                  className="hidden sm:flex"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default PropertyGrid;