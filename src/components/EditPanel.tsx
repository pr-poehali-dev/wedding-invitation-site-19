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

  const handleSave = () => {
    onUpdate(formData);
    onToggle();
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Button
        onClick={onToggle}
        className="fixed top-4 right-4 z-50 bg-gold hover:bg-gold/90 text-white rounded-full p-3 shadow-lg"
      >
        <Icon name="Edit" size={20} />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-cormorant text-2xl font-bold text-charcoal">
                Редактирование
              </h2>
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
              <div>
                <Label className="text-charcoal font-medium">Имена</Label>
                <Input
                  value={formData.names}
                  onChange={(e) => handleChange("names", e.target.value)}
                  placeholder="Анна & Михаил"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-charcoal font-medium">Дата</Label>
                <Input
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  placeholder="15 августа 2024"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-charcoal font-medium">Время</Label>
                <Input
                  value={formData.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  placeholder="в 18:00"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-charcoal font-medium">
                  Место проведения
                </Label>
                <Input
                  value={formData.venue}
                  onChange={(e) => handleChange("venue", e.target.value)}
                  placeholder="Загородный парк-отель"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-charcoal font-medium">Адрес</Label>
                <Input
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  placeholder="Московская область"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-charcoal font-medium">Цитата</Label>
                <Textarea
                  value={formData.quote}
                  onChange={(e) => handleChange("quote", e.target.value)}
                  placeholder="Красивая цитата о любви"
                  rows={3}
                  className="mt-1"
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
