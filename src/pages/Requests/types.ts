export type NominationCardCountData = {
  pending: number;
  rejected: number;
  approved: number;
};

export type PendingNominationRequestData = {
  id: number;
  trainingProgram_name: string;
  user_name: string;
  createdAt: string;
  approver_name: string;
  updatedAt: string;
  available_seats: number;
};

export type NominationRequestHeaderHandlerProps = {
  activeCount: NominationCardCountData;
};

export type Program = {
  title: string;
  description: string;
  trainingMode: string;
  startDate: string;
  endDate: string;
  duration: number;
  availableSeats: number;
  occuranceType: string;
  occuranceInterval: number;
  status: string;
  trainingType: string;
  ProgramAudiences: { TargetAudience: { name: string } }[];
  ProgramTrainers: { Trainer: { fullname: string } }[];
};
