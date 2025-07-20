
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
    <section id="floor-plans" className="space-y-3 sm:space-y-4 md:space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Floor Plans</h2>
      </div>

      {/* Tab Navigation - Improved mobile responsiveness */}
      <div className="flex bg-muted rounded-lg p-1 w-full sm:w-fit">
        <button
          onClick={() => setActiveTab("master-plan")}
          className={`flex-1 sm:flex-none px-3 sm:px-4 md:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
            activeTab === "master-plan" 
              ? "bg-background text-foreground shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Master Plan
        </button>
        <button
          onClick={() => setActiveTab("floor-plan")}
          className={`flex-1 sm:flex-none px-3 sm:px-4 md:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
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
              {/* Header - Improved mobile spacing */}
              <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 pb-2 sm:pb-3 md:pb-4">
                <div className="border-b-2 border-green-500 pb-2">
                  <span className="text-xs sm:text-sm font-medium text-green-600">Master Plan</span>
                </div>
              </div>
              
              {/* Content - Improved mobile layout */}
              <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 md:mb-6 gap-1 sm:gap-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">MASTER PLAN</h3>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">ROHAN EKAM BALEWADI</h3>
                </div>
                
                {/* Master Plan Image - Improved mobile responsiveness */}
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
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                    <div className="border-b-2 border-green-500 pb-2">
                      <span className="text-xs sm:text-sm font-medium text-green-600">Floor Plan</span>
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4 md:mb-6">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">WING-WISE FLOOR PLANS</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Choose a wing to view detailed floor plans</p>
                  </div>

                  {/* Wing Cards - Improved mobile grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {wings.map((wing) => (
                      <Card key={wing.id} className="hover:shadow-md transition-shadow cursor-pointer group">
                        <CardHeader className="pb-2 sm:pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-sm sm:text-base md:text-lg">{wing.name}</CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              {wing.totalUnits} Units
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2 sm:space-y-3 md:space-y-4">
                          {/* Wing Image Preview */}
                          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={wing.image}
                              alt={`${wing.name} Floor Plan`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Wing Details - Improved mobile layout */}
                          <div className="space-y-1 sm:space-y-2">
                            <div className="flex items-center justify-between text-xs sm:text-sm">
                              <span className="text-muted-foreground">Floors:</span>
                              <span className="font-medium">{wing.floors}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs sm:text-sm">
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

                          {/* Actions - Improved mobile layout */}
                          <div className="flex gap-1 sm:gap-2 pt-1 sm:pt-2">
                            <Button variant="outline" size="sm" className="flex-1 text-xs">
                              <Eye className="w-3 h-3 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 text-xs">
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
                // Lock Screen Preview - Improved mobile responsiveness
                <div className="relative p-3 sm:p-4 md:p-6">
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center p-3 sm:p-4">
                    <Card className="max-w-md mx-auto shadow-lg w-full">
                      <CardContent className="p-3 sm:p-4 md:p-6 text-center space-y-2 sm:space-y-3 md:space-y-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                          <Lock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Unlock Wing-wise Floor Plans</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                            Get access to detailed floor plans for all wings with unit layouts, dimensions, and downloadable PDFs.
                          </p>
                        </div>
                        <Button onClick={onAuthRequired} className="w-full text-xs sm:text-sm">
                          <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Sign Up to View Floor Plans
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Blurred Preview Content - Improved mobile layout */}
                  <div className="opacity-30 blur-sm">
                    <div className="mb-3 sm:mb-4 md:mb-6">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">WING-WISE FLOOR PLANS</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Choose a wing to view detailed floor plans</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                      {wings.slice(0, 2).map((wing) => (
                        <Card key={wing.id}>
                          <CardHeader className="pb-2 sm:pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-sm sm:text-base md:text-lg">{wing.name}</CardTitle>
                              <Badge variant="secondary" className="text-xs">
                                {wing.totalUnits} Units
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-2 sm:space-y-3 md:space-y-4">
                            <div className="aspect-[4/3] bg-muted rounded-lg"></div>
                            <div className="space-y-1 sm:space-y-2">
                              <div className="flex items-center justify-between text-xs sm:text-sm">
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
