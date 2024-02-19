import { useEffect, useState } from "react";
import fetchNominationStatus from "../../pages/status/api/GetNominationStatus";
import { Status } from "../request/Manager/types";
import TrackStatus from "./TrackStatus";

const TrackStatusHandler = () => {
  const [status, setStatus] = useState<Status[]>([]);
  
  const NominationStatus = async () => {
    const response = await fetchNominationStatus();
    setStatus(response);
  };
  
  useEffect(() => {
    NominationStatus();
  }, []);

  return <TrackStatus status={status} />;
};

export default TrackStatusHandler;
