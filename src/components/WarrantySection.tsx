import { Shield, Award, Clock, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import protectedHomeImage from "@/assets/protected-home.jpg";

const warrantyFeatures = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Guaranteed protection for as long as you own your home"
  },
  {
    icon: Award,
    title: "Professional Installation",
    description: "Expert installation by certified technicians"
  },
  {
    icon: Clock,
    title: "Year-Round Protection",
    description: "Works in all seasons and weather conditions"
  },
  {
    icon: Wrench,
    title: "Maintenance Free",
    description: "Never worry about gutter maintenance again"
  }
];

const WarrantySection = () => {
  return (
    <section className="py-20 bg-secondary/30" id="warranty">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Backed by Our Lifetime Warranty
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We stand behind our product with an industry-leading warranty that gives you 
            complete peace of mind and protection for your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img 
              src={protectedHomeImage} 
              alt="Protected home with Leaf Lock gutters"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {warrantyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
