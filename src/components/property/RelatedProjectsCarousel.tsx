import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, ExternalLink } from "lucide-react";

const RelatedProjectsCarousel = () => {
  const relatedProjects = [
    {
      id: "1",
      name: "Godrej Elements",
      location: "Hinjewadi, Pune",
      price: "₹85 Lakhs onwards",
      bhk: "1, 2, 3 BHK",
      image: "/godrej-elements.jpg",
      tag: "New Launch"
    },
    {
      id: "2", 
      name: "Paranjape Blue Ridge",
      location: "Hinjewadi, Pune",
      price: "₹1.2 Cr onwards",
      bhk: "2, 3 BHK",
      image: "/paranjape-blue-ridge.gif",
      tag: "Ready to Move"
    },
    {
      id: "3",
      name: "Kolte Patil Life Republic",
      location: "Hinjewadi, Pune",
      price: "₹65 Lakhs onwards",
      bhk: "1, 2, 3 BHK",
      image: "/kolte-patil-life-republic.jpg",
      tag: "Hot Deal"
    },
    {
      id: "4",
      name: "Rohan Vasanta",
      location: "Lepakshi, Pune",
      price: "₹55 Lakhs onwards",
      bhk: "1, 2 BHK",
      image: "/rohan-vasanta.jpg",
      tag: "Premium"
    },
    {
      id: "5",
      name: "Tata Serein",
      location: "Thane West",
      price: "₹1.5 Cr onwards",
      bhk: "2, 3, 4 BHK",
      image: "/tata-serein.webp",
      tag: "Luxury"
    }
  ];

  const getTagVariant = (tag: string) => {
    switch (tag) {
      case "New Launch": return "default";
      case "Ready to Move": return "secondary";
      case "Hot Deal": return "destructive";
      default: return "outline";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Similar Projects in Pune</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {relatedProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="border rounded-lg overflow-hidden bg-card">
                  {/* Project Image */}
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge 
                      className="absolute top-3 left-3" 
                      variant={getTagVariant(project.tag)}
                    >
                      {project.tag}
                    </Badge>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {project.location}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-primary">{project.price}</p>
                      <p className="text-sm text-muted-foreground">{project.bhk}</p>
                    </div>
                    
                    <Button variant="default" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Explore
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default RelatedProjectsCarousel;