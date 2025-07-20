import { Card, CardContent } from "@/components/ui/card"
import { Shield, UserCheck, MapPin } from "lucide-react"

const ValueProposition = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Listings Only",
      description: "Every property is verified by our expert team. RERA approved projects with authentic documentation.",
      color: "text-teal"
    },
    {
      icon: UserCheck,
      title: "Assisted Site Visits",
      description: "Free guided tours with our property experts. Get insider insights and professional advice.",
      color: "text-gold"
    },
    {
      icon: MapPin,
      title: "Direct Contact with Property Owners",
      description: "No middlemen, no hidden charges. Connect directly with verified property owners and developers.",
      color: "text-navy"
    }
  ]

  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-urbanist font-bold text-navy mb-4">
            Why Choose URBAN GHAR?
          </h2>
          <p className="text-xl text-slate font-inter max-w-3xl mx-auto">
            We're revolutionizing the way you discover and buy your dream home with trust, transparency, and technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center p-8 bg-cream border-0 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-0">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    feature.color === "text-teal" ? "from-teal/10 to-teal/20" :
                    feature.color === "text-gold" ? "from-gold/10 to-gold/20" :
                    "from-navy/10 to-navy/20"
                  } mb-6`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-urbanist font-semibold text-navy mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-urbanist font-bold text-navy mb-2">10,000+</div>
            <div className="text-slate font-inter">Verified Properties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-urbanist font-bold text-navy mb-2">50+</div>
            <div className="text-slate font-inter">Top Builders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-urbanist font-bold text-navy mb-2">8</div>
            <div className="text-slate font-inter">Major Cities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-urbanist font-bold text-navy mb-2">25,000+</div>
            <div className="text-slate font-inter">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition