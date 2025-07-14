import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ]

  const quickLinks = [
    { name: "Buy Properties", href: "#" },
    { name: "Rent Properties", href: "#" },
    { name: "Sell Property", href: "#" },
    { name: "Property Valuation", href: "#" },
    { name: "Home Loans", href: "#" },
    { name: "Legal Services", href: "#" }
  ]

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad"
  ]

  return (
    <footer className="bg-navy text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal to-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-urbanist font-bold mb-4">
            Ready to visit your future home?
          </h2>
          <p className="text-xl font-inter mb-8 opacity-90">
            Get personalized property recommendations and schedule site visits
          </p>
          
          <Card className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border-white/20">
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="flex-1 h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl"
              />
              <Button 
                size="lg" 
                className="h-12 px-8 bg-gold hover:bg-gold/90 text-navy font-inter font-medium rounded-xl"
              >
                Get Call Back
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-urbanist font-bold text-gold">HomeHorizon</span>
            </div>
            <p className="font-inter text-white/80 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect home. We connect you with verified properties and trusted developers across India.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="font-inter text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="font-inter text-sm">hello@homehorizon.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="font-inter text-sm">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-urbanist font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <div key={link.name}>
                  <a 
                    href={link.href}
                    className="font-inter text-white/80 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-lg font-urbanist font-semibold mb-6">Top Cities</h3>
            <div className="space-y-3">
              {cities.map((city) => (
                <div key={city}>
                  <a 
                    href="#"
                    className="font-inter text-white/80 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    Properties in {city}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-urbanist font-semibold mb-6">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-gold transition-colors duration-200 rounded-lg flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            
            <div>
              <h4 className="font-inter font-medium mb-3">Stay Updated</h4>
              <p className="font-inter text-white/70 text-sm mb-4">
                Subscribe to get the latest property updates and market insights.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email"
                  className="flex-1 h-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm"
                />
                <Button 
                  size="sm" 
                  className="bg-gold hover:bg-gold/90 text-navy font-inter"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-inter text-white/60 text-sm mb-4 md:mb-0">
            © 2024 HomeHorizon. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-white/60 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-white/60 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="font-inter text-white/60 hover:text-white text-sm transition-colors duration-200">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer