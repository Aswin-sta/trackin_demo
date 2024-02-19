export type Course = {
  id: number;
  trainingProgram_name: string;
  user_name: string;
  createdAt: string;
  approver_name: string;
  updatedAt: string;
  available_seats: number;
};

export type NominationRequestCardProps = {
  courses: Course[];
  isRejectModalOpen: boolean;
  rejectionReason: string;
  handleRejectClick: (id: number) => void;
  handleRejectClose: () => void;
  handleRejectionReasonChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleApproveClick: (id: number) => void;
  handleApproveAllClick: () => void;
  approvedCourses: Course[];
  handleRejectSubmit: () => void;
  index: number;
  isSubmitDisabled: boolean;
  status: "Pending" | "Accepted" | "Rejected";
};

export type NominationAndRequestData = {
  index: number;
  type: "Pending" | "Accepted" | "Rejected";
  name: string;
  count: number;
};

export type NominationAndRequestDataProps = {
  nominationAndRequestData: NominationAndRequestData[];
  selectedCard: number;
  handleCardClick: (index: number) => void;
};
