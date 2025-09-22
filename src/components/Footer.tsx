import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo i opis */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <h3 className="text-2xl font-bold text-foreground">SlimLife</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Profesjonalne programy odchudzania oparte na najnowszych badaniach naukowych. 
              Pomagamy osiągnąć wymarzoną sylwetkę w zdrowy i trwały sposób.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>kontakt@slimlife.pl</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>ul. Zdrowa 15<br />00-001 Warszawa</span>
              </div>
            </div>
          </div>

          {/* Szybkie linki */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Informacje</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                O nas
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Programy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Testimoniale
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 SlimLife. Wszystkie prawa zastrzeżone.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Regulamin
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;