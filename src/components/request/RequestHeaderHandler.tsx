import fetchNominationCardCount from "../../pages/Requests/api/GetNominationCardCount";
import { NominationCardCountData } from "../../pages/Requests/types";
import RequestHeader from "./RequestHeader";
import { NominationAndRequestData } from "./types";
import { useEffect, useState } from "react";

const NominationRequestHeaderHandler = ({
  onSelected,
}: {
  onSelected: (type: "Pending" | "Accepted" | "Rejected") => void;
}) => {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const [activeCount, setActiveCount] = useState<NominationCardCountData>({
    pending: 0,
    rejected: 0,
    approved: 0,
  });

  const NominationCardCount = async () => {
    const response = await fetchNominationCardCount();
    setActiveCount(response);
  };

  useEffect(() => {
    NominationCardCount();
  }, []);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    onSelected(nominationAndRequestData[index].type);
  };

  const nominationAndRequestData: NominationAndRequestData[] = [
    {
      index: 0,
      type: "Pending",
      name: "Pending Nominations",
      count: activeCount.pending,
    },
    {
      index: 1,
      type: "Accepted",
      name: "Accepted Nominations",
      count: activeCount.approved,
    },
    {
      index: 2,
      type: "Rejected",
      name: "Rejected Nominations",
      count: activeCount.rejected,
    },
  ];

  return (
    <RequestHeader
      nominationAndRequestData={nominationAndRequestData}
      selectedCard={selectedCard}
      handleCardClick={handleCardClick}
    />
  );
};

export default NominationRequestHeaderHandler;
