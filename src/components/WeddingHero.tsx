import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface WeddingHeroProps {
  weddingData: {
    names: string;
    date: string;
    time: string;
    venue: string;
    location: string;
    quote: string;
  };
}

const WeddingHero = ({ weddingData }: WeddingHeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-soft-peach to-soft-pink px-4">
      <Card className="max-w-2xl mx-auto text-center p-12 bg-white/90 backdrop-blur-sm shadow-2xl border-0">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-cormorant text-6xl md:text-7xl font-bold text-charcoal mb-2">
              {weddingData.names}
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
            <p className="text-lg text-medium-gray font-light tracking-wider">
              приглашают на семейный ужин
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-cormorant text-3xl text-charcoal">
                {weddingData.date}
              </p>
              <p className="text-medium-gray">{weddingData.time}</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-charcoal">{weddingData.venue}</p>
              <p className="text-medium-gray text-sm">{weddingData.location}</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-medium-gray italic">"{weddingData.quote}"</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("program")}
                className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
              >
                Программа дня
              </Button>
              <Button
                onClick={() => scrollToSection("rsvp")}
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Подтвердить присутствие
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default WeddingHero;
