import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Home, IndianRupee } from "lucide-react"
import { useState } from "react"

const HeroSection = () => {
  const [searchType, setSearchType] = useState("buy")

  const cities = ["Mumbai", "Bangalore", "Pune", "Delhi", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad"]
  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/40 to-teal/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headlines */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-urbanist font-bold text-white mb-6 leading-tight">
            Find Your Dream Home.{" "}
            <span className="text-gold">Discover Life</span>{" "}
            in the Right Place.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            Curated properties from top developers. Verified, Real-time, Personalized.
          </p>
        </div>

        {/* Search Card */}
        <Card className="bg-warm-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-4xl mx-auto">
          {/* Buy/Rent Toggle */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-secondary rounded-full p-1">
              <button
                onClick={() => setSearchType("buy")}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-200 ${
                  searchType === "buy"
                    ? "bg-navy text-white shadow-md"
                    : "text-slate hover:text-navy"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType("rent")}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-200 ${
                  searchType === "rent"
                    ? "bg-navy text-white shadow-md"
                    : "text-slate hover:text-navy"
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* City Selection */}
            <div className="space-y-2">
              <label className="text-sm font-inter font-medium text-slate flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                City
              </label>
              <Select>
                <SelectTrigger className="h-12 rounded-xl border-2 border-border focus:border-navy">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase()}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Area/Project */}
            <div className="space-y-2">
              <label className="text-sm font-inter font-medium text-slate flex items-center gap-2">
                <Search className="h-4 w-4" />
                Area / Project
              </label>
              <Input 
                placeholder="Enter locality or project name"
                className="h-12 rounded-xl border-2 border-border focus:border-navy"
              />
            </div>

            {/* BHK Type */}
            <div className="space-y-2">
              <label className="text-sm font-inter font-medium text-slate flex items-center gap-2">
                <Home className="h-4 w-4" />
                BHK
              </label>
              <Select>
                <SelectTrigger className="h-12 rounded-xl border-2 border-border focus:border-navy">
                  <SelectValue placeholder="Select BHK" />
                </SelectTrigger>
                <SelectContent>
                  {bhkOptions.map((bhk) => (
                    <SelectItem key={bhk} value={bhk.toLowerCase()}>
                      {bhk}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-sm font-inter font-medium text-slate flex items-center gap-2">
                <IndianRupee className="h-4 w-4" />
                Budget
              </label>
              <Select>
                <SelectTrigger className="h-12 rounded-xl border-2 border-border focus:border-navy">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                  <SelectItem value="100-200">₹1Cr - ₹2Cr</SelectItem>
                  <SelectItem value="200-500">₹2Cr - ₹5Cr</SelectItem>
                  <SelectItem value="500+">₹5Cr+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <Button 
            size="lg" 
            className="w-full md:w-auto md:px-12 h-14 rounded-xl text-lg font-inter font-medium bg-gradient-to-r from-navy to-teal hover:shadow-lg transition-all duration-200"
          >
            <Search className="h-5 w-5 mr-2" />
            Start Exploring
          </Button>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-2">
            10,000+ Verified Properties
          </Badge>
          <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-2">
            RERA Approved
          </Badge>
          <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-2">
            Direct Owner Contact
          </Badge>
        </div>
      </div>
    </section>
  )
}

export default HeroSection