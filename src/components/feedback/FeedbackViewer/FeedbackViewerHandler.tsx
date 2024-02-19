import { useEffect, useState } from "react";
import FeedbackViewer from "./FeedbackViewer";
import { FeedbackItem } from "../types";
import { useParams } from "react-router";
import { getFeedbackById } from "../api/getFeedbackById";

const FeedbackViewerHandler = () => {
  const [feedbackItem, setFeedbackItem] = useState<FeedbackItem | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchFeedbackItem = async () => {
      try {
        const feedbackData: FeedbackItem = await getFeedbackById(
          parseInt(id as string)
        );
        console.log(feedbackData);
        setFeedbackItem(feedbackData);
        console.log(feedbackItem);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedbackItem();
  }, []);

  return (
    <div>
      {!feedbackItem ? (
        <p>No response received for this training program.</p>
      ) : (
        <FeedbackViewer feedbackItem={feedbackItem} />
      )}
    </div>
  );
};

export default FeedbackViewerHandler;
