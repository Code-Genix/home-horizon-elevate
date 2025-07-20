import { Search, User, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PropertyHeaderProps {
  searchLocation: string;
  onSearchLocationChange: (location: string) => void;
}

const PropertyHeader = ({ searchLocation, onSearchLocationChange }: PropertyHeaderProps) => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-xl text-foreground">HomeFinder</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                value={searchLocation}
                onChange={(e) => onSearchLocationChange(e.target.value)}
                placeholder="Search for location or project..."
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="default" className="rounded-full px-6 py-3">
              <HelpCircle className="h-6 w-6" />
            </Button>
            
            <Button variant="ghost" size="default" className="rounded-full px-6 py-3">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PropertyHeader;