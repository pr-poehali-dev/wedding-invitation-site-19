import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Icon from "@/components/ui/icon";

const WeddingRSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    dietary: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Спасибо! Ваше подтверждение получено. Ждем вас на празднике! 💕",
    );
    setFormData({ name: "", guests: "1", dietary: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="rsvp"
      className="py-20 bg-gradient-to-br from-soft-peach via-soft-pink to-cream"
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-5xl font-bold text-charcoal mb-4">
            Подтвердите присутствие
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-medium-gray text-lg">
            Ваше присутствие сделает наш день еще более особенным
          </p>
        </div>

        <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-xl border-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-charcoal font-medium">
                Ваше имя
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Введите ваше полное имя"
                className="border-gold/30 focus:border-gold focus:ring-gold/20"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="text-charcoal font-medium">
                Количество гостей
              </Label>
              <Select
                value={formData.guests}
                onValueChange={(value) => handleInputChange("guests", value)}
              >
                <SelectTrigger className="border-gold/30 focus:border-gold focus:ring-gold/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 человек</SelectItem>
                  <SelectItem value="2">2 человека</SelectItem>
                  <SelectItem value="3">3 человека</SelectItem>
                  <SelectItem value="4">4 человека</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dietary" className="text-charcoal font-medium">
                Особенности питания
              </Label>
              <Input
                id="dietary"
                value={formData.dietary}
                onChange={(e) => handleInputChange("dietary", e.target.value)}
                placeholder="Вегетарианство, аллергии и другие пожелания"
                className="border-gold/30 focus:border-gold focus:ring-gold/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-charcoal font-medium">
                Поздравления и пожелания
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Напишите теплые слова молодоженам..."
                rows={4}
                className="border-gold/30 focus:border-gold focus:ring-gold/20 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold/90 text-white py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
            >
              <Icon name="Heart" size={16} className="mr-2" />
              Подтвердить присутствие
            </Button>
          </form>
        </Card>

        <div className="text-center mt-8 space-y-2">
          <p className="text-medium-gray">По всем вопросам обращайтесь:</p>
          <p className="text-charcoal font-medium">
            📞 +7 (xxx) xxx-xx-xx • 📧 wedding@example.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingRSVP;
