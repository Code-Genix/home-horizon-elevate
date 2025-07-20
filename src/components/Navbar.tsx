import { Button } from "@/components/ui/button"
import { Menu, X, Home } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Explore", href: "#" },
    { name: "Invest", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Home className="h-8 w-8 text-navy" />
            <span className="text-2xl font-urbanist font-bold text-navy">URBAN GHAR</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate hover:text-navy transition-colors duration-200 px-3 py-2 text-sm font-inter font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="font-inter">
              Sign In
            </Button>
            <Button size="sm" className="font-inter bg-navy hover:bg-navy/90">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-warm-white border-t border-border">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate hover:text-navy block px-3 py-2 text-base font-inter font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 mt-4 px-3">
                <Button variant="outline" size="sm" className="font-inter">
                  Sign In
                </Button>
                <Button size="sm" className="font-inter bg-navy hover:bg-navy/90">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar