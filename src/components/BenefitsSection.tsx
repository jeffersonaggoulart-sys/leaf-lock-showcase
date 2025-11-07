import { CheckCircle2 } from "lucide-react";
import waterFlowImage from "@/assets/water-flow.jpg";

const benefits = [
  "Fewer trips up the ladder",
  "No more gutter cleaning",
  "Protection from pest infestations",
  "Prevents ice dams in winter",
  "Extends gutter lifespan",
  "Improves home value"
];

const BenefitsSection = () => {
  return (
    <section className="py-20" id="benefits">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={waterFlowImage} 
              alt="Clean water flowing through protected gutters"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Cleaning Gutters is Dirty and Dangerous
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Gutter cleaning is a tedious, messy, and potentially dangerous task that you have 
              to complete year after year. With Leaf Lock Gutter Protection, there's no more 
              cleaning out gutters – guaranteed:
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
