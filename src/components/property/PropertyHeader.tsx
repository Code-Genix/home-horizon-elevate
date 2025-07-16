import { useState } from "react";
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

  return (
    <div className="bg-card border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${property.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-background/90 rounded-full px-3 py-1 text-sm">
                        {index + 1} / {property.images.length}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            {/* Thumbnail Strip */}
            <div className="flex space-x-2 mt-4 overflow-x-auto">
              {property.images.slice(0, 6).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2",
                    currentImageIndex === index ? "border-primary" : "border-border"
                  )}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div className="space-y-6">
            {/* Title & Tags */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {property.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{property.name}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-background rounded-lg p-4 border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                  <p className="text-2xl font-bold text-foreground">
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
                  >
                    {showFullPrice ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                    {showFullPrice ? "Hide" : "Show"} Price
                  </Button>
                )}
              </div>
            </div>

            {/* BHK Types */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Available Configurations</p>
              <div className="flex gap-2">
                {property.bhkTypes.map((bhk) => (
                  <Badge key={bhk} variant="outline" className="px-4 py-2">
                    {bhk}
                  </Badge>
                ))}
              </div>
            </div>

            {/* RERA */}
            <div className="flex items-center text-sm text-muted-foreground">
              <Shield className="w-4 h-4 mr-2" />
              <span>RERA: {property.rera}</span>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button size="lg" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Visit
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={onLocationClick}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Location
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
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