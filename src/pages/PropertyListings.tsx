import { useState } from "react";
import PropertyHeader from "@/components/PropertyHeader";
import FiltersSidebar from "@/components/FiltersSidebar";
import PropertyGrid from "@/components/PropertyGrid";
import PropertyFooter from "@/components/PropertyFooter";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const PropertyListings = () => {
  const [searchLocation, setSearchLocation] = useState("Wakad, Pune");
  const [filters, setFilters] = useState({
    priceRange: [1000000, 30000000],
    bhkTypes: [],
    possessionStatus: "",
    downPayment: 500000,
    projectTypes: [],
    sortBy: "price-low"
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <PropertyHeader 
        searchLocation={searchLocation}
        onSearchLocationChange={setSearchLocation}
      />
      
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden border-b bg-card">
        <div className="container mx-auto px-4 py-3">
          <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Filter className="w-4 h-4 mr-2" />
                Filters & Sort
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px] sm:w-[400px] p-0">
              <SheetHeader className="px-6 py-4 border-b">
                <SheetTitle className="flex items-center justify-between">
                  <span>Filters</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowMobileFilters(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </SheetTitle>
              </SheetHeader>
              <div className="overflow-y-auto h-[calc(100vh-80px)]">
                <FiltersSidebar 
                  filters={filters}
                  onFiltersChange={setFilters}
                  isMobile={true}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FiltersSidebar 
            filters={filters}
            onFiltersChange={setFilters}
            isMobile={false}
          />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <PropertyGrid filters={filters} />
        </main>
      </div>
      
      <PropertyFooter />
    </div>
  );
};

export default PropertyListings;