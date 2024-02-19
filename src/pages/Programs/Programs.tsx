import { useState } from "react";
import ProgramHeaderHandler from "../../components/trainingPrograms/ProgramHeaderHandler";
import ProgramListHandler from "../../components/trainingPrograms/ProgramListHandler";

const Programs = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  return (
    <div>
      <ProgramHeaderHandler
        onCardSelected={(index: number) => setSelectedCard(index)}
      />
      <ProgramListHandler id={selectedCard as number} />
    </div>
  );
};

export default Programs;
