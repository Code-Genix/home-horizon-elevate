import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Lock } from "lucide-react";

interface GetLocationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: {
    name: string;
    location: string;
    fullAddress: string;
  };
  onSignInClick: () => void;
}

const GetLocationModal = ({ open, onOpenChange, property, onSignInClick }: GetLocationModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Property Location
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Blurred Map Preview */}
          <div className="relative">
            <div className="h-48 bg-muted rounded-lg blur-sm opacity-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Map Preview</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/90 rounded-lg p-4 text-center border">
                <Lock className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Location Locked</p>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Visible Location</p>
              <p className="font-medium">{property.location}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Full Address</p>
              <div className="flex items-center">
                <p className="text-sm text-muted-foreground blur-sm">
                  Plot No. [Hidden], Sector [Hidden], {property.location} - [Hidden]
                </p>
                <Lock className="w-3 h-3 ml-2 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              className="w-full" 
              size="lg"
              onClick={onSignInClick}
            >
              Sign In to View Full Location
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full" 
              size="lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call for Location Details
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Full address and interactive map will be available after sign in
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetLocationModal;