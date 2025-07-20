import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

interface PartnerBank {
  name: string;
  logo: string;
  preApproved?: boolean;
}

interface PartnerBanksProps {
  banks: PartnerBank[];
}

const PartnerBanks = ({ banks }: PartnerBanksProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Partner Banks</h2>
      <div className="bg-card rounded-lg border p-6">
        {/* Bank Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {banks.map((bank, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-all duration-200 hover:scale-[1.02] group"
              title={bank.preApproved ? "Pre-approved partner" : bank.name}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                {/* Logo Container */}
                <div className="w-full h-15 flex items-center justify-center">
                  <img 
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    className="w-[160px] h-[60px] object-contain"
                    style={{
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* Badge */}
                {bank.preApproved && (
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    Pre-approved
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90">
            <Phone className="w-4 h-4 mr-2" />
            Talk to Our Loan Advisor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks;