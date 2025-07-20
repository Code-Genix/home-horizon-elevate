import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Bell, Bookmark } from "lucide-react";

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
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
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
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"
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
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800",
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800",
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800"
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
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
      "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=800"
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
      "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800",
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800"
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