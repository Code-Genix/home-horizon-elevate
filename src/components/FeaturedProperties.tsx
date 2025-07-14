import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Calendar } from "lucide-react"

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Apartments at Koregaon Park",
      location: "Koregaon Park, Pune",
      price: "₹1.2 Cr",
      bhk: "3 BHK",
      area: "1,450 sq ft",
      badges: ["New Launch", "RERA Approved"],
      amenities: { beds: 3, baths: 2, area: "1,450" }
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Premium Residences in Andheri",
      location: "Andheri West, Mumbai",
      price: "₹2.8 Cr",
      bhk: "4 BHK",
      area: "2,100 sq ft",
      badges: ["Ready to Move", "Premium"],
      amenities: { beds: 4, baths: 3, area: "2,100" }
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Homes in Electronic City",
      location: "Electronic City, Bangalore",
      price: "₹95 L",
      bhk: "2 BHK",
      area: "1,200 sq ft",
      badges: ["Under Construction", "Investment"],
      amenities: { beds: 2, baths: 2, area: "1,200" }
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Waterfront Apartments in Worli",
      location: "Worli, Mumbai",
      price: "₹4.5 Cr",
      bhk: "4 BHK",
      area: "2,800 sq ft",
      badges: ["Sea View", "Luxury"],
      amenities: { beds: 4, baths: 4, area: "2,800" }
    }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-urbanist font-bold text-navy mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-slate font-inter max-w-2xl mx-auto">
            Handpicked premium properties from trusted developers across top cities
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden bg-warm-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 rounded-2xl border-0">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {property.badges.map((badge, index) => (
                    <Badge 
                      key={index} 
                      className={`${
                        badge === "New Launch" ? "bg-gold text-navy" :
                        badge === "RERA Approved" ? "bg-teal text-white" :
                        badge === "Ready to Move" ? "bg-green-500 text-white" :
                        badge === "Premium" ? "bg-purple-500 text-white" :
                        badge === "Under Construction" ? "bg-orange-500 text-white" :
                        badge === "Investment" ? "bg-blue-500 text-white" :
                        badge === "Sea View" ? "bg-cyan-500 text-white" :
                        "bg-navy text-white"
                      } font-inter text-xs`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-urbanist font-semibold text-navy mb-2 line-clamp-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-slate text-sm font-inter mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="text-2xl font-urbanist font-bold text-navy">
                    {property.price}
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-sm text-slate font-inter mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    {property.amenities.beds}
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {property.amenities.baths}
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    {property.amenities.area}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-200 font-inter"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Visit
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="px-8 py-4 bg-navy hover:bg-navy/90 text-white font-inter font-medium rounded-xl"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties