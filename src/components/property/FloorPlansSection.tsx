
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Lock, Eye, FileText } from "lucide-react";

interface FloorPlansSectionProps {
  isAuthenticated: boolean;
  onAuthRequired: () => void;
}

const FloorPlansSection = ({ isAuthenticated, onAuthRequired }: FloorPlansSectionProps) => {
  const [activeTab, setActiveTab] = useState("master-plan");

  const wings = [
    {
      id: "wing-a",
      name: "Wing A",
      units: ["1BHK", "2BHK"],
      floors: "Ground + 10",
      totalUnits: 44,
      image: "/rohan-ekum-master-plan.jpg" // Placeholder - would be wing-specific
    },
    {
      id: "wing-b", 
      name: "Wing B",
      units: ["2BHK", "3BHK"],
      floors: "Ground + 12",
      totalUnits: 52,
      image: "/rohan-ekum-master-plan.jpg"
    },
    {
      id: "wing-c",
      name: "Wing C", 
      units: ["1BHK", "2BHK", "3BHK"],
      floors: "Ground + 8",
      totalUnits: 36,
      image: "/rohan-ekum-master-plan.jpg"
    }
  ];

  return (
    <section id="floor-plans" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Floor Plans</h2>
        <Button variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-green-600">
          <Download className="w-4 h-4 mr-2" />
          Plan Kit
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-muted rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveTab("master-plan")}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "master-plan" 
              ? "bg-background text-foreground shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Master Plan
        </button>
        <button
          onClick={() => setActiveTab("floor-plan")}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "floor-plan"
              ? "bg-background text-foreground shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Floor Plan
        </button>
      </div>

      {/* Content */}
      <Card className="bg-white shadow-sm">
        <CardContent className="p-0">
          {activeTab === "master-plan" ? (
            <div>
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-4">
                <div className="border-b-2 border-green-500 pb-2">
                  <span className="text-sm font-medium text-green-600">Master Plan</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">MASTER PLAN</h3>
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
            </div>
          ) : (
            <div>
              {/* Floor Plan Content */}
              {isAuthenticated ? (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="border-b-2 border-green-500 pb-2">
                      <span className="text-sm font-medium text-green-600">Floor Plan</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">WING-WISE FLOOR PLANS</h3>
                    <p className="text-sm text-muted-foreground">Choose a wing to view detailed floor plans</p>
                  </div>

                  {/* Wing Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wings.map((wing) => (
                      <Card key={wing.id} className="hover:shadow-md transition-shadow cursor-pointer group">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{wing.name}</CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              {wing.totalUnits} Units
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Wing Image Preview */}
                          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={wing.image}
                              alt={`${wing.name} Floor Plan`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Wing Details */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Floors:</span>
                              <span className="font-medium">{wing.floors}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Unit Types:</span>
                              <div className="flex gap-1">
                                {wing.units.map((unit) => (
                                  <Badge key={unit} variant="outline" className="text-xs">
                                    {unit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Eye className="w-3 h-3 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Download className="w-3 h-3 mr-1" />
                              PDF
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ) : (
                // Lock Screen Preview
                <div className="relative p-6">
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
                    <Card className="max-w-md mx-auto shadow-lg">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                          <Lock className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Unlock Wing-wise Floor Plans</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Get access to detailed floor plans for all wings with unit layouts, dimensions, and downloadable PDFs.
                          </p>
                        </div>
                        <Button onClick={onAuthRequired} className="w-full">
                          <FileText className="w-4 h-4 mr-2" />
                          Sign Up to View Floor Plans
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Blurred Preview Content */}
                  <div className="opacity-30 blur-sm">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">WING-WISE FLOOR PLANS</h3>
                      <p className="text-sm text-muted-foreground">Choose a wing to view detailed floor plans</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {wings.slice(0, 2).map((wing) => (
                        <Card key={wing.id}>
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{wing.name}</CardTitle>
                              <Badge variant="secondary" className="text-xs">
                                {wing.totalUnits} Units
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="aspect-[4/3] bg-muted rounded-lg"></div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Floors:</span>
                                <span className="font-medium">{wing.floors}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default FloorPlansSection;
