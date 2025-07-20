import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Phone, Calendar, Shield, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyHeaderProps {
  property: {
    name: string;
    location: string;
    priceRange: string;
    bhkTypes: string[];
    rera: string;
    images: string[];
    tags: string[];
  };
  onLocationClick: () => void;
  onAuthRequired: () => void;
  isAuthenticated: boolean;
}

const PropertyHeader = ({ property, onLocationClick, onAuthRequired, isAuthenticated }: PropertyHeaderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullPrice, setShowFullPrice] = useState(isAuthenticated);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  // Update currentImageIndex when carousel slides change
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentImageIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', onSelect);
    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

  // Scroll carousel to selected thumbnail
  const scrollTo = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  return (
    <div className="bg-card border-b">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-6">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Image Carousel - Improved mobile responsiveness */}
          <div className="relative">
            <Carousel className="w-full" setApi={setCarouselApi}>
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${property.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-background/90 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm">
                        {index + 1} / {property.images.length}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 sm:left-2 md:left-4 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              <CarouselNext className="right-1 sm:right-2 md:right-4 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />
            </Carousel>

            {/* Thumbnail Strip - Improved mobile responsiveness */}
            <div className="flex space-x-1 sm:space-x-2 mt-2 sm:mt-3 md:mt-4 overflow-x-auto scrollbar-hide">
              {property.images.slice(0, 6).map((image, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "flex-shrink-0 w-10 h-8 sm:w-12 sm:h-9 md:w-16 md:h-12 rounded-md overflow-hidden border-2",
                    currentImageIndex === index ? "border-blue-800" : "border-border hover:border-blue-300"
                  )}
                  style={{ outline: currentImageIndex === index ? '2px solid #1e3a8a' : undefined }}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Property Info - Improved mobile responsiveness */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {/* Title & Tags */}
            <div>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                {property.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">{property.name}</h1>
              <div className="flex items-center text-muted-foreground mb-2 sm:mb-3 md:mb-4">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm md:text-base">{property.location}</span>
              </div>
            </div>

            {/* Price - Improved mobile layout */}
            <div className="bg-background rounded-lg p-2 sm:p-3 md:p-4 border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Price Range</p>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                    {showFullPrice ? property.priceRange : "₹1.30 Cr - ₹X.XX Cr"}
                  </p>
                </div>
                {!isAuthenticated && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setShowFullPrice(!showFullPrice);
                      if (!showFullPrice) onAuthRequired();
                    }}
                    className="w-full sm:w-auto"
                  >
                    {showFullPrice ? <EyeOff className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> : <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />}
                    {showFullPrice ? "Hide" : "Show"} Price
                  </Button>
                )}
              </div>
            </div>

            {/* BHK Types - Improved mobile layout */}
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Available Configurations</p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {property.bhkTypes.map((bhk) => (
                  <Badge key={bhk} variant="outline" className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                    {bhk}
                  </Badge>
                ))}
              </div>
            </div>

            {/* RERA - Improved mobile layout */}
            <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="break-all">RERA: {property.rera}</span>
            </div>

            {/* CTA Buttons - Improved mobile grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <Button size="sm" className="w-full">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Call Now
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Schedule Visit
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={onLocationClick}
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Get Location
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={!isAuthenticated ? onAuthRequired : undefined}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;