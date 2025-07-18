import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Calendar, Home, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.04 }}
      className="h-full"
    >
      <Link to={`/property/${property.id}`} className="block h-full group" tabIndex={-1}>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 cursor-pointer h-full">
          <div className="relative">
            {/* Property Image */}
            <div 
              className="aspect-[4/3] bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${property.images[currentImageIndex]})` }}
            >
              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {property.tags.map((tag) => {
                  // If the tag is 'Premium' and isPremium is true, skip rendering this tag to avoid duplicate badge
                  if (tag.toLowerCase() === "premium" && property.isPremium) return null;
                  return (
                    <Badge key={tag} className={getTagColor(tag)}>
                      {tag}
                    </Badge>
                  );
                })}
                {property.isPremium && (
                  <Badge className="bg-gold text-foreground">Premium</Badge>
                )}
              </div>

              {/* Like Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                onClick={e => { e.stopPropagation(); e.preventDefault(); setIsLiked(!isLiked); }}
              >
                <Heart 
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
                  )} 
                />
              </Button>

              {/* Carousel Navigation Arrows */}
              {property.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={e => { 
                      e.stopPropagation(); 
                      e.preventDefault(); 
                      setCurrentImageIndex((currentImageIndex - 1 + property.images.length) % property.images.length);
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={e => { 
                      e.stopPropagation(); 
                      e.preventDefault(); 
                      setCurrentImageIndex((currentImageIndex + 1) % property.images.length);
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

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
                      onClick={e => { e.stopPropagation(); e.preventDefault(); setCurrentImageIndex(index); }}
                    />
                  ))}
                </div>
              )}
            </div>

            <CardContent className="p-6">
              {/* Title and Location */}
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="text-2xl font-bold text-foreground">{property.price}</p>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{property.bhkOptions}</span>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">{property.carpetArea}</span>
                </div>
              </div>

              {/* Possession Status */}
              <div className="flex items-center mb-6">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className={cn(
                  "text-sm px-2 py-1 rounded",
                  property.possession.includes("Ready") 
                    ? "bg-green-100 text-green-800" 
                    : "bg-blue-100 text-blue-800"
                )}>
                  {property.possession}
                </span>
              </div>

              {/* EMI/Down Payment Summary */}
              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">EMI starts from</span>
                  <span className="font-medium text-foreground">₹45,000/month</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Down payment</span>
                  <span className="font-medium text-foreground">₹15 Lakhs</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild onClick={e => { e.stopPropagation(); }}>
                <span>View Details</span>
              </Button>
            </CardContent>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;