import { Search, User, HelpCircle, Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface PropertyHeaderProps {
  searchLocation: string;
  onSearchLocationChange: (location: string) => void;
}

const PropertyHeader = ({ searchLocation, onSearchLocationChange }: PropertyHeaderProps) => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Home className="h-8 w-8 text-navy" />
            <span className="text-2xl font-urbanist font-bold text-navy hidden sm:block">URBAN GHAR</span>
          </div>

          {/* Search Bar - Hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                type="text"
                value={searchLocation}
                onChange={(e) => onSearchLocationChange(e.target.value)}
                placeholder="Search for location or project..."
                className="pl-10 h-10 sm:h-12 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Mobile Search Button */}
          <div className="sm:hidden flex-1">
            <Button variant="outline" className="w-full justify-start text-muted-foreground">
              <Search className="h-4 w-4 mr-2" />
              Search location...
            </Button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="rounded-full px-3 py-2">
                <HelpCircle className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="sm" className="rounded-full px-3 py-2">
                <User className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="sm:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        type="text"
                        value={searchLocation}
                        onChange={(e) => onSearchLocationChange(e.target.value)}
                        placeholder="Search for location or project..."
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Quick Actions</h3>
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Help & Support
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Sign In / Register
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PropertyHeader;