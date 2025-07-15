import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Calendar, Home, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: {
    id: number;
    images: string[];
    title: string;
    location: string;
    price: string;
    bhkOptions: string;
    carpetArea: string;
    possession: string;
    tags: string[];
    isPremium: boolean;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "hot deal":
        return "bg-red-500 text-white";
      case "new launch":
        return "bg-accent text-accent-foreground";
      case "premium":
        return "bg-gold text-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md border-border hover:border-primary/20">
      <div className="relative">
        {/* Property Image */}
        <div 
          className="aspect-[3/2] bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${property.images[currentImageIndex]})` }}
        >
          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {property.tags.map((tag) => (
              <Badge key={tag} className={getTagColor(tag)}>
                {tag}
              </Badge>
            ))}
            {property.isPremium && (
              <Badge className="bg-gold text-foreground">Premium</Badge>
            )}
          </div>

          {/* Like Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart 
              className={cn(
                "h-5 w-5 transition-colors",
                isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
              )} 
            />
          </Button>

          {/* Image Navigation Dots */}
          {property.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentImageIndex 
                      ? "bg-white" 
                      : "bg-white/50"
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        <CardContent className="p-4">
          {/* Title and Location */}
          <div className="space-y-1 mb-3">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {property.title}
            </h3>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-3">
            <p className="text-lg font-bold text-foreground">{property.price}</p>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
            <div className="flex items-center">
              <Home className="h-3 w-3 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground text-xs">{property.bhkOptions}</span>
            </div>
            <div className="flex items-center">
              <Ruler className="h-3 w-3 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground text-xs">{property.carpetArea}</span>
            </div>
          </div>

          {/* Possession Status */}
          <div className="flex items-center mb-3">
            <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
            <span className={cn(
              "text-xs px-2 py-1 rounded-full",
              property.possession.includes("Ready") 
                ? "bg-green-100 text-green-800" 
                : "bg-blue-100 text-blue-800"
            )}>
              {property.possession}
            </span>
          </div>

          {/* EMI Summary - Compact */}
          <div className="bg-muted/30 rounded p-2 mb-3">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">EMI from</span>
              <span className="font-medium text-foreground">₹45K/mo</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            View Details
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default PropertyCard;