import { Home, Waves, AlertTriangle, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Home,
    title: "Roofing Damage",
    description: "Prevent roof deterioration from water backup and ice dams"
  },
  {
    icon: Hammer,
    title: "Rotting Wood & Fascia",
    description: "Keep your home's exterior protected from water damage"
  },
  {
    icon: Waves,
    title: "Basement Flooding",
    description: "Stop water from overflowing and flooding your foundation"
  },
  {
    icon: AlertTriangle,
    title: "Foundation Damage",
    description: "Protect your home's foundation from erosion and cracks"
  }
];

const ProtectionFeatures = () => {
  return (
    <section className="py-20 bg-secondary/30" id="product">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Leaf Lock Gutter Guards Help Protect Your Entire Home
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our gutter guard system is backed by a lifetime warranty. From roof to foundation, 
            the damage caused by buildup in gutters can be devastating for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProtectionFeatures;
