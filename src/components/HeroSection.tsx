import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Search as SearchIcon } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const cities = [
  "Mumbai",
  "Bangalore",
  "Pune",
  "Delhi",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
]

const HeroSection = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [locality, setLocality] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/properties");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/40 to-teal/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[calc(4rem+env(safe-area-inset-top))] md:pt-32">
        {/* Headlines */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-urbanist font-bold text-white mb-6 leading-tight">
            Find Your Dream Home.{' '}
            <span className="text-gold">Discover Life</span>{' '}
            in the Right Place.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            Curated properties from top developers. Verified, Real-time, Personalized.
          </p>
        </div>

        {/* Sleek Search Card */}
        <Card className="w-full max-w-xl rounded-2xl shadow-[0_4px_24px_rgba(30,41,59,0.10)] bg-white/90 p-4 md:p-6 flex flex-col items-center mx-auto border-0">
          {/* Tagline */}
          <div className="w-full text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-navy mb-1 font-urbanist tracking-tight">
              Browse Homes for Sale
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-inter italic">
              From verified developers. Trusted. Transparent.
            </p>
          </div>

          {/* Search Form */}
          <form className="w-full flex flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Select City */}
              <div className="flex-1">
                <label className="text-xs font-inter font-medium text-slate-700 flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4 text-navy" />
                  Select City
                </label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="h-10 rounded-lg border border-border focus:border-navy bg-white shadow-inner text-sm">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city} className="text-sm">
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Locality/Project Name */}
              <div className="flex-1">
                <label className="text-xs font-inter font-medium text-slate-700 flex items-center gap-2 mb-1">
                  <SearchIcon className="h-4 w-4 text-navy" />
                  Enter locality / project name
                </label>
                <Input
                  value={locality}
                  onChange={e => setLocality(e.target.value)}
                  placeholder="Enter locality or project name"
                  className="h-10 rounded-lg border border-border focus:border-navy bg-white shadow-inner text-sm"
                />
              </div>
            </div>
            {/* CTA Button */}
            <Button
              type="submit"
              size="default"
              className="mx-auto mt-2 h-12 w-64 rounded-lg text-base font-inter font-semibold bg-gradient-to-r from-[#0A2342] to-[#2E8BC0] text-white shadow-md hover:from-[#163D5C] hover:to-[#2E8BC0] flex items-center justify-center gap-2 border-0"
              onClick={handleSearch}
            >
              <SearchIcon className="h-5 w-5 mr-2" />
              Start Exploring
            </Button>
          </form>
        </Card>

        {/* Trust Badges Outside Card */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 w-full">
          <span className="px-4 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-inter font-medium shadow-sm backdrop-blur-md">
            10,000+ Verified Properties
          </span>
          <span className="px-4 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-inter font-medium shadow-sm backdrop-blur-md">
            RERA Approved
          </span>
          <span className="px-4 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-inter font-medium shadow-sm backdrop-blur-md">
            Direct Owner Contact
          </span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection