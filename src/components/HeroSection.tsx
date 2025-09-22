import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Zdrowie i fitness - rozpocznij swoją transformację"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Osiągnij Swoją
          <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            Wymarzoną Sylwetkę
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Skuteczny program odchudzania, który pomoże Ci zgubić wagę w zdrowy sposób 
          i osiągnąć trwałe rezultaty
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Rozpocznij Transformację
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300"
          >
            Dowiedz Się Więcej
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-white/80">Zadowolonych Klientów</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-white/80">Skuteczność Programu</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">30 dni</div>
            <div className="text-white/80">Pierwsze Efekty</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;