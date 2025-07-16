import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Lock } from "lucide-react";

const FaqAccordion = () => {
  const faqs = [
    {
      question: "When is the project delivery timeline?",
      answer: "The project is scheduled for completion by December 2025. All necessary approvals are in place.",
      locked: false
    },
    {
      question: "Is this project RERA approved?",
      answer: "Yes, this project is registered under RERA with registration number P52100047890.",
      locked: false
    },
    {
      question: "What are the payment terms?",
      answer: "Flexible payment plans available with construction-linked payments. Down payment starting from 20%.",
      locked: true
    },
    {
      question: "Are there any hidden charges?",
      answer: "Complete transparency in pricing. All charges including registration, legal, and other fees are clearly mentioned.",
      locked: true
    },
    {
      question: "What about parking and amenities?",
      answer: "Dedicated parking spaces for each unit. Premium amenities including club house, swimming pool, and more.",
      locked: false
    },
    {
      question: "Any upcoming phases of this project?",
      answer: "Phase 2 is planned to launch in Q2 2025 with similar configurations and enhanced amenities.",
      locked: true
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <HelpCircle className="w-5 h-5 mr-2" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex items-center justify-between">
                <span className="flex items-center">
                  {faq.question}
                  {faq.locked && <Lock className="w-3 h-3 ml-2 text-muted-foreground" />}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {faq.locked ? (
                  <div className="space-y-3">
                    <p className="text-muted-foreground blur-sm">
                      {faq.answer.substring(0, 50)}...
                    </p>
                    <Button size="sm" variant="outline">
                      Sign in to view complete answer
                    </Button>
                  </div>
                ) : (
                  <p className="text-muted-foreground">{faq.answer}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FaqAccordion;