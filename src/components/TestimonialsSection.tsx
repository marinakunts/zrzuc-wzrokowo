import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    age: 32,
    result: "-15 kg w 3 miesiące",
    text: "Nigdy nie myślałam, że odchudzanie może być tak proste! Program był idealnie dopasowany do mojego trybu życia. Schudłam 15 kg i czuję się fantastycznie!",
    rating: 5
  },
  {
    name: "Michał Nowak",
    age: 28,
    result: "-22 kg w 4 miesiące",
    text: "Po latach nieudanych prób w końcu znalazłem program, który działa. Bez głodówek, bez efektu jo-jo. Polecam każdemu!",
    rating: 5
  },
  {
    name: "Katarzyna Wiśniewska", 
    age: 45,
    result: "-18 kg w 5 miesięcy",
    text: "W wieku 45 lat myślałam, że to już niemożliwe. Ten program udowodnił mi, że się myliłam. Dziękuję za nowe życie!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Zobacz Co Mówią
            <span className="text-primary"> Nasi Klienci</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prawdziwe historie, prawdziwe rezultaty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 text-center italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-foreground text-lg mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {testimonial.age} lat
                </div>
                <div className="inline-block bg-gradient-to-r from-success to-primary-glow text-success-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonial.result}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>100% Bezpieczne</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Medycznie Sprawdzone</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Gwarancja Satysfakcji</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;