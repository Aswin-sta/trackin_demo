import { useState } from "react";
import CountCards from "./CountCards";
import { Count } from "./types";
import { DashboardCardCountProps } from "../../../pages/Dashboard/types";

const CountCardsHandler = ({pendingCount, totalCount}: DashboardCardCountProps) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick: (index: number) => void = (index: number) => {
    setSelectedCard(index);
  };
  
  const counts: Count[] = [
    { id: 1, type: "Pending Nominations", count: pendingCount.pending },
    { id: 2, type: "Manager Request", count: 0 },
    { id: 3, type: "Total Participation", count: totalCount.total },
  ];
  return (
    <CountCards
      counts={counts}
      selectedCard={selectedCard}
      handleCardClick={handleCardClick}
    />
  );
};

export default CountCardsHandler;
