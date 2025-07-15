import { useState } from "react";
import PropertyHeader from "@/components/PropertyHeader";
import FiltersSidebar from "@/components/FiltersSidebar";
import PropertyGrid from "@/components/PropertyGrid";
import PropertyFooter from "@/components/PropertyFooter";

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

  return (
    <div className="min-h-screen bg-background">
      <PropertyHeader 
        searchLocation={searchLocation}
        onSearchLocationChange={setSearchLocation}
      />
      
      <div className="flex">
        <FiltersSidebar 
          filters={filters}
          onFiltersChange={setFilters}
        />
        
        <main className="flex-1 p-6">
          <PropertyGrid filters={filters} />
        </main>
      </div>
      
      <PropertyFooter />
    </div>
  );
};

export default PropertyListings;