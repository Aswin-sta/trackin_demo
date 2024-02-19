import { FeedbackBarProps } from "./types";
import FeedbackBar from "./FeedbackBar";
import fetchFeedback from "../api/GetFeedbackBar";
import { useEffect, useState } from "react";

const FeedbackBarHandler = () => {
  const [feedback, setFeedback] = useState<FeedbackBarProps[]>([]);

  const GetFeedback = async () => {
    const response = await fetchFeedback();
    setFeedback(response);
  };

  useEffect(() => {
    GetFeedback();
  }, []);
  return <FeedbackBar feedback={feedback} />;
};

export default FeedbackBarHandler;
