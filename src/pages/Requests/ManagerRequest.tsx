import { useState } from "react";
import ManagerRequestCardHandler from "../../components/request/Manager/ManagerRequestCardHandler";
import RequestHeaderHandler from "../../components/request/RequestHeaderHandler";

const ManagerRequest = () => {
  const [status, setStatus] = useState<"Pending" | "Accepted" | "Rejected">(
    "Pending"
  );
  return (
    <>
      <RequestHeaderHandler
        onSelected={(type: "Pending" | "Accepted" | "Rejected"): void => {
          setStatus(type);
        }}
      />
      <ManagerRequestCardHandler status={status} />
    </>
  );
};

export default ManagerRequest;
