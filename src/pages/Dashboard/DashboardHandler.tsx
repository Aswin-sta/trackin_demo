import React, { useEffect, useState } from "react";
import { PendingCardCountData, TotalCardCountData } from "./types";
import Dashboard from "./Dashboard";
import fetchPendingNominationCount from "./api/GetPendingNominationCount";
import fetchTotalParticipantsCount from "./api/GetParticipantsCount";
 
const DashboardHandler = () => {
  const [pendingCount, setPendingCount] = useState<PendingCardCountData>({
    pending: 0,
  });

  const [totalCount, setTotalCount] = useState<TotalCardCountData>({
    total: 0
  });
 
  const PendingNominationCount = async () => {
    const response = await fetchPendingNominationCount();
    setPendingCount(response);
  };

  const TotalParticipantsCount = async () => {
    const response = await fetchTotalParticipantsCount();
    setTotalCount(response);
  };
 
  useEffect(() => {
    PendingNominationCount();
    TotalParticipantsCount()
  }, []);
 
  return <Dashboard pendingCount={pendingCount} totalCount={totalCount}/>;
};
 
export default DashboardHandler;