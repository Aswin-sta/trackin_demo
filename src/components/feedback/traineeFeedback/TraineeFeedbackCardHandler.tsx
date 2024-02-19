import React, { useEffect, useState } from "react";
import TraineeFeedbackCard from "./TraineeFeedBackCard";
import { TraineeFeedbackData } from "../types";
import { getFeedbackByProgramId } from "../api/getFeedbackByProgramId";
import { useParams } from "react-router";

const TraineeFeedbackCardHandler: React.FC = () => {
  const [traineeFeedbackData, setTraineeFeedbackData] = useState<
    TraineeFeedbackData[]
  >([]);
  const { training_id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFeedbackByProgramId(
          parseInt(training_id as string)
        );
        setTraineeFeedbackData(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <TraineeFeedbackCard data={traineeFeedbackData} />;
};

export default TraineeFeedbackCardHandler;
