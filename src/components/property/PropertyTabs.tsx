import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Download, 
  Wifi, 
  Car, 
  Dumbbell, 
  Waves, 
  TreePine, 
  Shield, 
  Zap,
  Lock,
  Eye,
  Play
} from "lucide-react";

interface PropertyTabsProps {
  property: any;
  onAuthRequired: () => void;
  isAuthenticated: boolean;
}

const PropertyTabs = ({ property, onAuthRequired, isAuthenticated }: PropertyTabsProps) => {
  const amenityIcons = {
    "Swimming Pool": Waves,
    "Gymnasium": Dumbbell,
    "Clubhouse": TreePine,
    "Children's Play Area": TreePine,
    "Landscaped Gardens": TreePine,
    "Power Backup": Zap,
    "Security": Shield,
    "Parking": Car,
    "Wi-Fi": Wifi
  };

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="amenities">Amenities</TabsTrigger>
        <TabsTrigger value="floorplans">Floor Plans</TabsTrigger>
        <TabsTrigger value="pricing">Pricing</TabsTrigger>
        <TabsTrigger value="units">Units</TabsTrigger>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{property.overview}</p>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="amenities" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Amenities & Facilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {property.amenities.map((amenity: string) => {
                const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || TreePine;
                return (
                  <div key={amenity} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="floorplans" className="space-y-6">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-0">
              {/* Header Section */}
              <div className="flex items-center justify-between p-6 pb-4">
                <div className="flex items-center space-x-6">
                  <div className="border-b-2 border-green-500 pb-2">
                    <span className="text-sm font-medium text-green-600">Master Plan</span>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Plan Kit
                </Button>
              </div>
              
              {/* Content Section */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">MASTER PLAN</h2>
                  <h3 className="text-lg font-bold text-gray-900">ROHAN EKAM BALEWADI</h3>
                </div>
                
                {/* Master Plan Image */}
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <img 
                      src="/rohan-ekum-master-plan.jpg"
                      alt="Master Plan - Rohan Ekam Balewadi"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="pricing" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Price & Cost Sheet</CardTitle>
            <CardDescription>Detailed pricing information for all configurations</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Carpet Area</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {property.units.map((unit: any, index: number) => (
                  <TableRow key={unit.type}>
                    <TableCell>{unit.type}</TableCell>
                    <TableCell>{unit.area}</TableCell>
                    <TableCell>
                      {isAuthenticated || index < 2 ? (
                        unit.price
                      ) : (
                        <div className="flex items-center">
                          <span className="blur-sm">₹X.XX Cr</span>
                          <Lock className="w-3 h-3 ml-2" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Available</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {!isAuthenticated && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Sign in to view complete pricing details
                </p>
                <Button onClick={onAuthRequired}>
                  Sign In to Unlock Pricing
                </Button>
              </div>
            )}

            <div className="mt-4">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Cost Sheet
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="units" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Unit Availability</CardTitle>
            <CardDescription>Available units with QR codes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["D103", "A207", "B312", "C401", "D505", "A608"].map((unit, index) => (
                <div 
                  key={unit} 
                  className={`p-4 rounded-lg border text-center ${
                    isAuthenticated || index < 3 
                      ? "bg-background" 
                      : "bg-muted/50 blur-sm"
                  }`}
                >
                  <div className="w-12 h-12 bg-muted rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs">QR</span>
                  </div>
                  <p className="font-medium">{unit}</p>
                  <p className="text-xs text-muted-foreground">2BHK</p>
                  {!isAuthenticated && index >= 3 && (
                    <Lock className="w-4 h-4 mx-auto mt-2" />
                  )}
                </div>
              ))}
            </div>
            
            {!isAuthenticated && (
              <div className="mt-4 text-center">
                <Button onClick={onAuthRequired}>
                  <Eye className="w-4 h-4 mr-2" />
                  Unlock All Units
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="gallery" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Photos</CardTitle>
            <CardDescription>Project gallery and site visits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="aspect-video bg-muted rounded-lg relative overflow-hidden">
                  <img 
                    src="/koregaon-park.jpg" 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default PropertyTabs;