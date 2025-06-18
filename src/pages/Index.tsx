import { useState } from "react";
import WeddingHero from "@/components/WeddingHero";
import WeddingProgram from "@/components/WeddingProgram";
import WeddingRSVP from "@/components/WeddingRSVP";
import EditPanel from "@/components/EditPanel";

const Index = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [weddingData, setWeddingData] = useState({
    names: "Анна & Михаил",
    date: "15 августа 2024",
    time: "в 18:00",
    venue: 'Загородный парк-отель "Усадьба"',
    location: "Московская область, Красногорский район",
    quote: "Любовь не знает границ, времени и расстояний",
  });

  return (
    <div className="min-h-screen">
      <EditPanel
        isOpen={isEditOpen}
        onToggle={() => setIsEditOpen(!isEditOpen)}
        weddingData={weddingData}
        onUpdate={setWeddingData}
      />
      <WeddingHero weddingData={weddingData} />
      <WeddingProgram />
      <WeddingRSVP />
    </div>
  );
};

export default Index;
