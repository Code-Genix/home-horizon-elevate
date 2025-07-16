import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Bell, Bookmark } from "lucide-react";

// Mock property data
const mockProperties = [
  {
    id: 1,
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
    title: "Pristine Towers",
    location: "Wakad, Pune",
    price: "₹78 Lakhs – ₹1.2 Cr",
    bhkOptions: "1BHK / 2BHK",
    carpetArea: "650–900 sq.ft.",
    possession: "Ready to Move",
    tags: ["Hot Deal"],
    isPremium: true
  },
  {
    id: 2,
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"],
    title: "Green Valley Residency",
    location: "Hinjawadi, Pune",
    price: "₹95 Lakhs – ₹1.8 Cr",
    bhkOptions: "2BHK / 3BHK",
    carpetArea: "850–1200 sq.ft.",
    possession: "Possession by Dec 2025",
    tags: ["New Launch"],
    isPremium: false
  },
  {
    id: 3,
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
    title: "Skyline Heights",
    location: "Baner, Pune",
    price: "₹1.2 Cr – ₹2.5 Cr",
    bhkOptions: "3BHK / 4BHK",
    carpetArea: "1100–1800 sq.ft.",
    possession: "Ready to Move",
    tags: [],
    isPremium: true
  },
  {
    id: 4,
    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"],
    title: "Sunshine Apartments",
    location: "Kharadi, Pune",
    price: "₹65 Lakhs – ₹95 Lakhs",
    bhkOptions: "1BHK / 2BHK",
    carpetArea: "580–750 sq.ft.",
    possession: "Possession by Mar 2025",
    tags: ["Hot Deal"],
    isPremium: false
  },
  {
    id: 5,
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"],
    title: "Elite Residences",
    location: "Koregaon Park, Pune",
    price: "₹1.8 Cr – ₹3.2 Cr",
    bhkOptions: "3BHK / 4BHK+",
    carpetArea: "1400–2200 sq.ft.",
    possession: "Ready to Move",
    tags: ["Premium"],
    isPremium: true
  },
  {
    id: 6,
    images: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800"],
    title: "Dream Homes",
    location: "Undri, Pune",
    price: "₹55 Lakhs – ₹85 Lakhs",
    bhkOptions: "1BHK / 2BHK",
    carpetArea: "520–680 sq.ft.",
    possession: "Possession by Jun 2025",
    tags: ["New Launch"],
    isPremium: false
  }
];

interface PropertyGridProps {
  filters: any;
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Properties in Wakad, Pune
          </h1>
          <p className="text-muted-foreground mt-1">
            Showing {startIndex + 1}-{Math.min(startIndex + propertiesPerPage, mockProperties.length)} of {mockProperties.length} results
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={() => setSavedSearch(!savedSearch)}
          >
            <Bookmark className={`h-4 w-4 ${savedSearch ? 'fill-current' : ''}`} />
            <span>{savedSearch ? 'Saved' : 'Save Search'}</span>
          </Button>
          
          <Button variant="outline" className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span>Enable Alerts</span>
          </Button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
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