import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const WeddingProgram = () => {
  const programItems = [
    {
      time: "18:00",
      title: "Встреча гостей",
      description: "Приветственные напитки в саду",
      icon: "Users",
    },
    {
      time: "18:30",
      title: "Церемония",
      description: "Торжественная регистрация брака",
      icon: "Heart",
    },
    {
      time: "19:00",
      title: "Фотосессия",
      description: "Семейные фотографии в парке",
      icon: "Camera",
    },
    {
      time: "19:30",
      title: "Семейный ужин",
      description: "Праздничное меню в ресторане отеля",
      icon: "Utensils",
    },
    {
      time: "21:00",
      title: "Первый танец",
      description: "Открытие танцевального вечера",
      icon: "Music",
    },
    {
      time: "22:00",
      title: "Развлечения",
      description: "Живая музыка и танцы до полуночи",
      icon: "Star",
    },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-5xl font-bold text-charcoal mb-4">
            Программа дня
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-medium-gray text-lg">
            Наш особенный день пройдет в теплой семейной атмосфере
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {programItems.map((item, index) => (
            <Card
              key={index}
              className="p-6 border-l-4 border-l-gold bg-soft-peach/30 hover:bg-soft-peach/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Icon name={item.icon} size={20} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-cormorant text-2xl font-semibold text-charcoal">
                      {item.title}
                    </h3>
                    <span className="text-gold font-semibold text-lg">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-medium-gray">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingProgram;
