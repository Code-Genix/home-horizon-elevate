import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Award, MapPin, ExternalLink } from "lucide-react";

interface AboutBuilderProps {
  builder: {
    name: string;
    logo: string;
    description: string;
    otherProjects: number;
  };
}

const AboutBuilder = ({ builder }: AboutBuilderProps) => {
  const otherProjects = [
    { name: "Rohan Abhilasha", location: "Wagholi", price: "₹45 Lakhs onwards" },
    { name: "Rohan Vasanta", location: "Lepakshi", price: "₹55 Lakhs onwards" },
    { name: "Rohan Kritika", location: "Sinhagad Road", price: "₹65 Lakhs onwards" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Building className="w-5 h-5 mr-2" />
          About the Builder
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Builder Info */}
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
            <img 
              src={builder.logo} 
              alt={builder.name}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{builder.name}</h3>
            <p className="text-muted-foreground mb-3">{builder.description}</p>
            <div className="flex items-center space-x-4 text-sm">
              <Badge variant="secondary" className="flex items-center">
                <Award className="w-3 h-3 mr-1" />
                35+ Years Experience
              </Badge>
              <Badge variant="secondary" className="flex items-center">
                <Building className="w-3 h-3 mr-1" />
                {builder.otherProjects}+ Projects
              </Badge>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h4 className="font-semibold mb-4 flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Other Projects by {builder.name}
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div key={project.name} className="border rounded-lg p-4 space-y-2">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-3">
                  <img 
                    src="/koregaon-park.jpg" 
                    alt={project.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h5 className="font-medium">{project.name}</h5>
                <p className="text-sm text-muted-foreground flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {project.location}
                </p>
                <p className="text-sm font-medium text-primary">{project.price}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="outline">
            View All Projects by {builder.name}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutBuilder;
