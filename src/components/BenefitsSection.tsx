import { CheckCircle, Heart, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Target,
    title: "Personalizowany Plan",
    description: "Indywidualnie dopasowany program odchudzania uwzględniający Twoje potrzeby i styl życia"
  },
  {
    icon: Heart,
    title: "Zdrowe Nawyki",
    description: "Naucz się zdrowych nawyków żywieniowych, które pozostaną z Tobą na zawsze"
  },
  {
    icon: Zap,
    title: "Szybkie Rezultaty",
    description: "Zobacz pierwsze efekty już po 7 dniach i osiągnij cel w 30-90 dni"
  },
  {
    icon: CheckCircle,
    title: "Bezpieczna Metoda",
    description: "Medycznie sprawdzone metody bez efektu jo-jo i niebezpiecznych diet"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dlaczego Warto Wybrać
            <span className="text-primary"> Nasz Program?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skuteczne odchudzanie oparte na najnowszych badaniach naukowych 
            i sprawdzonych metodach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;