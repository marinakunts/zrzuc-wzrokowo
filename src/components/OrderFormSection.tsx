import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User } from "lucide-react";

const OrderFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Dziękujemy za zgłoszenie!",
      description: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Zamów Konsultację
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj się z nami, aby rozpocząć swoją transformację. Nasze ekspertki odpowiedzą na wszystkie pytania.
          </p>
        </div>

        <Card className="p-8 shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Imię i nazwisko
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Podaj swoje imię i nazwisko"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="twoj@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefon
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+48 123 456 789"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Dodatkowe informacje (opcjonalne)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Opisz swoje cele, doświadczenia z dietami, preferencje żywieniowe..."
                className="min-h-[120px]"
              />
            </div>

            <div className="text-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="px-12 py-6 text-lg font-semibold shadow-elegant hover:scale-105 transition-all duration-300"
              >
                Wyślij Zgłoszenie
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Oddzwaniamy w ciągu 24 godzin • Konsultacja całkowicie darmowa
              </p>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default OrderFormSection;