import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FiltersSidebarProps {
  filters: any;
  onFiltersChange: (filters: any) => void;
  isMobile?: boolean;
}

const FiltersSidebar = ({ filters, onFiltersChange, isMobile = false }: FiltersSidebarProps) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)}Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L`;
    return `₹${price.toLocaleString()}`;
  };

  const formatDownPayment = (amount: number) => {
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    return `₹${amount.toLocaleString()}`;
  };

  const handleBHKChange = (bhk: string, checked: boolean) => {
    const updatedBHK = checked 
      ? [...filters.bhkTypes, bhk]
      : filters.bhkTypes.filter((b: string) => b !== bhk);
    onFiltersChange({ ...filters, bhkTypes: updatedBHK });
  };

  const handleProjectTypeChange = (type: string, checked: boolean) => {
    const updatedTypes = checked 
      ? [...filters.projectTypes, type]
      : filters.projectTypes.filter((t: string) => t !== type);
    onFiltersChange({ ...filters, projectTypes: updatedTypes });
  };

  const resetFilters = () => {
    onFiltersChange({
      priceRange: [1000000, 30000000],
      bhkTypes: [],
      possessionStatus: "",
      downPayment: 500000,
      projectTypes: [],
      sortBy: "price-low"
    });
  };

  return (
    <aside className={`${isMobile ? 'w-full p-4' : 'w-80 p-6 bg-card border-r border-border h-screen sticky top-20 overflow-y-auto'}`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Filters</h2>
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Reset All
          </Button>
        </div>

        {/* Price Range */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Price Range</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => onFiltersChange({ ...filters, priceRange: value })}
              max={50000000}
              min={500000}
              step={100000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatPrice(filters.priceRange[0])}</span>
              <span>{formatPrice(filters.priceRange[1])}</span>
            </div>
          </CardContent>
        </Card>

        {/* BHK Type */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">BHK Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {["1BHK", "2BHK", "3BHK", "4BHK+"].map((bhk) => (
                <div key={bhk} className="flex items-center space-x-2">
                  <Checkbox
                    id={bhk}
                    checked={filters.bhkTypes.includes(bhk)}
                    onCheckedChange={(checked) => handleBHKChange(bhk, checked as boolean)}
                  />
                  <Label htmlFor={bhk} className="text-sm cursor-pointer">
                    {bhk}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Possession Status */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Possession Status</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              value={filters.possessionStatus} 
              onValueChange={(value) => onFiltersChange({ ...filters, possessionStatus: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ready" id="ready" />
                <Label htmlFor="ready" className="text-sm cursor-pointer">Ready to Move</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="construction" id="construction" />
                <Label htmlFor="construction" className="text-sm cursor-pointer">Under Construction</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Down Payment */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Down Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Slider
              value={[filters.downPayment]}
              onValueChange={(value) => onFiltersChange({ ...filters, downPayment: value[0] })}
              max={5000000}
              min={100000}
              step={50000}
              className="w-full"
            />
            <div className="text-center text-sm text-muted-foreground">
              {formatDownPayment(filters.downPayment)}
            </div>
          </CardContent>
        </Card>

        {/* Project Type */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Project Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {["Apartment", "Villa", "Plot"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={filters.projectTypes.includes(type)}
                    onCheckedChange={(checked) => handleProjectTypeChange(type, checked as boolean)}
                  />
                  <Label htmlFor={type} className="text-sm cursor-pointer">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sort By */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Sort By</CardTitle>
          </CardHeader>
          <CardContent>
            <Select 
              value={filters.sortBy} 
              onValueChange={(value) => onFiltersChange({ ...filters, sortBy: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="area">Area: Large to Small</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Apply Filters Button */}
        <Button className="w-full bg-primary hover:bg-primary/90">
          Apply Filters
        </Button>
      </div>
    </aside>
  );
};

export default FiltersSidebar;