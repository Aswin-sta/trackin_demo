import { useState } from "react";
import LDRequestCardHandler from "../../components/request/L&D/LDRequestCardHandler";
import RequestHeaderHandler from "../../components/request/RequestHeaderHandler";

const LDRequests = () => {
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
      <LDRequestCardHandler status={status} />
    </>
  );
};

export default LDRequests;
