import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Gotowy na Zmianę?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Dołącz do tysięcy zadowolonych klientów i rozpocznij swoją transformację już dziś!
        </p>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-6 h-6 text-primary-glow" />
              <span className="font-semibold">10,000+ Klientów</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-primary-glow" />
              <span className="font-semibold">Dostępne 24/7</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-glow" />
              <span className="font-semibold">Gwarancja Rezultatu</span>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-elegant text-xl px-12 py-6 rounded-full font-bold transition-all duration-300 hover:scale-105"
          >
            Rozpocznij Program - 197 zł
          </Button>
          
          <div className="text-white/80 text-sm">
            ✓ 30 dni gwarancji zwrotu pieniędzy
          </div>
          <div className="text-white/80 text-sm">
            ✓ Darmowa konsultacja online
          </div>
          <div className="text-white/80 text-sm">
            ✓ Dostęp do aplikacji mobilnej
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;