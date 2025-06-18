import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface EditPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  weddingData: {
    names: string;
    date: string;
    time: string;
    venue: string;
    location: string;
    quote: string;
  };
  onUpdate: (data: any) => void;
}

const EditPanel = ({
  isOpen,
  onToggle,
  weddingData,
  onUpdate,
}: EditPanelProps) => {
  const [formData, setFormData] = useState(weddingData);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onUpdate(formData);
    onToggle();
  };

  return (
    <>
      <Button
        onClick={onToggle}
        className="fixed top-4 right-4 z-50 bg-gold hover:bg-gold/90 text-white rounded-full p-3 shadow-lg"
      >
        <Icon name="Settings" size={20} />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-cormorant text-2xl font-semibold text-charcoal">
                Редактировать приглашение
              </h3>
              <Button
                onClick={onToggle}
                variant="ghost"
                size="sm"
                className="p-2"
              >
                <Icon name="X" size={16} />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="names" className="text-charcoal font-medium">
                  Имена молодоженов
                </Label>
                <Input
                  id="names"
                  value={formData.names}
                  onChange={(e) => handleInputChange("names", e.target.value)}
                  placeholder="Анна & Михаил"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-charcoal font-medium">
                  Дата свадьбы
                </Label>
                <Input
                  id="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  placeholder="15 августа 2024"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-charcoal font-medium">
                  Время
                </Label>
                <Input
                  id="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  placeholder="в 18:00"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue" className="text-charcoal font-medium">
                  Место проведения
                </Label>
                <Input
                  id="venue"
                  value={formData.venue}
                  onChange={(e) => handleInputChange("venue", e.target.value)}
                  placeholder='Загородный парк-отель "Усадьба"'
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-charcoal font-medium">
                  Адрес
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  placeholder="Московская область, Красногорский район"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quote" className="text-charcoal font-medium">
                  Цитата
                </Label>
                <Textarea
                  id="quote"
                  value={formData.quote}
                  onChange={(e) => handleInputChange("quote", e.target.value)}
                  placeholder="Любовь не знает границ, времени и расстояний"
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleSave}
                  className="flex-1 bg-gold hover:bg-gold/90 text-white"
                >
                  Сохранить
                </Button>
                <Button onClick={onToggle} variant="outline" className="flex-1">
                  Отмена
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default EditPanel;
