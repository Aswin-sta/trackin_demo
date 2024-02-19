import React, { useEffect, useState } from "react";
import ProgramListCard from "./ProgramListCard";

import { Program } from "./types";
import { useNavigate } from "react-router-dom";
import fetchTrainingPrograms from "../../pages/Programs/api/FetchTrainingProgram";

const ProgramListHandler = ({ id }: { id: number }) => {
  const [programData, setProgramData] = useState<Program[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Program[] = await fetchTrainingPrograms(id);
        setProgramData(data);
      } catch (error) {
        console.error("Error fetching program data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleCardClick = async (id: number) => {
    navigate(`/participants/${id}`);
  };

  return (
    <div>
      <ProgramListCard
        programData={programData}
        handleCardClick={handleCardClick}
      />
    </div>
  );
};

export default ProgramListHandler;
