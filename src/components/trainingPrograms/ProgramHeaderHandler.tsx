import { useEffect, useState } from "react";
import ProgramHeader from "./ProgramHeader";
import { ProgramHeaderProps, trainingsCount } from "./types";
import fetchTrainingsCount from "../../pages/Programs/api/GetTrainingsCount";

const ProgramHeaderHandler = ({ onCardSelected }: ProgramHeaderProps) => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [activeCount, setActiveCount] = useState<trainingsCount[]>([]);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    onCardSelected(index);
  };

  const ProgramCardCount = async () => {
    const response = await fetchTrainingsCount();
    setActiveCount(response);
  };

  useEffect(() => {
    ProgramCardCount();
  }, []);
  return (
    <ProgramHeader
      activeCount={activeCount}
      selectedCard={selectedCard}
      handleCardClick={handleCardClick}
    />
  );
};

export default ProgramHeaderHandler;
