import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const PropertyFooter = () => {
  return (
    <footer className="bg-card border-t border-border mt-8 sm:mt-12">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">H</span>
              </div>
              <span className="font-bold text-lg text-foreground">HomeFinder</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted partner in finding the perfect home. Making property search simple and transparent.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2 text-xs sm:text-sm">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp Expert</span>
                <span className="sm:hidden">WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Buy Properties</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Rent Properties</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sell Property</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Property Valuation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home Loans</a></li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Popular Areas</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wakad, Pune</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hinjawadi, Pune</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Baner, Pune</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kharadi, Pune</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Koregaon Park, Pune</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@homefinder.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Pune, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            © 2025 HomeFinder. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PropertyFooter;