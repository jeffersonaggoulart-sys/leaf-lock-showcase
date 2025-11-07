import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Leaf Lock
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">
              Gutters Protection
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-foreground hover:text-primary transition-colors">
              Product
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#warranty" className="text-foreground hover:text-primary transition-colors">
              Warranty
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Phone className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
