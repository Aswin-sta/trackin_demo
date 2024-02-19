// CompletedPendingPieHandler.tsx
import { useEffect, useState } from "react";
import fetchCompletedPending from "../api/GetCompletedPending";
import CompletedPending from "./CompletedPending";
import { CompletedPendingCancelledData, CompletedPendingData } from "./types";

const CompletedPendingHandler = () => {

  const [activeCount, setActiveCount] = useState<CompletedPendingCancelledData>({
    completed: 0,
    pending: 0,
    cancelled: 0
  });

  const completedPendingData: CompletedPendingData[] = [
    { label: "Completed", value: activeCount.completed, color: "#03298a" },
    { label: "Pending", value: activeCount.pending, color: "#9BC5EC" },
    { label: "Cancelled", value: activeCount.cancelled, color: "#3168f5" },
  ];
 
  const GetCompletedPending = async () => {
    const response = await fetchCompletedPending();
    setActiveCount(response);
  };
 
  useEffect(() => {
    GetCompletedPending();
  }, []);

  return <CompletedPending data={completedPendingData} />;
};

export default CompletedPendingHandler;
