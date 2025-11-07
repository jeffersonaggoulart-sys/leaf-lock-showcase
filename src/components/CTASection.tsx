import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Ready to Protect Your Home?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Get a free, no-obligation quote today and discover why thousands of homeowners trust Leaf Lock.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input placeholder="John Doe" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="(555) 123-4567" className="h-12" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="john@example.com" className="h-12" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Address
                </label>
                <Input placeholder="123 Main St, City, State ZIP" className="h-12" />
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg">
                Get Your Free Quote
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to be contacted about Leaf Lock services.
              </p>
            </form>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Call Us</div>
                    <div className="text-sm text-muted-foreground">1-800-LEAFLOCK</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email Us</div>
                    <div className="text-sm text-muted-foreground">info@leaflock.com</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Visit Us</div>
                    <div className="text-sm text-muted-foreground">Serving All Areas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
