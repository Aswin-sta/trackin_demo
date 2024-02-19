export type Program = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  availableSeats: number;
  ProgramTrainers: { Trainer: { fullname: string } }[];
  ProgramAudiences: { TargetAudience: { name: string } }[];
};

export type ProgramHeaderProps = {
  onCardSelected: (index: number) => void;
};

export type ProgramListCardProps = {
  programData: Program[];
  handleCardClick: (id: number) => void;
};

export type trainingsCount = {
  id: number;
  trainingType: string;
  programCount: number;
};

export type trainingsCountProps = {
  activeCount: trainingsCount[];
  selectedCard: number;
  handleCardClick: (index: number) => void;
};

export type TargetAudience = {
  name: string;
};

export type Trainer = {
  trainerType: string;
  fullname: string;
};

export type ProgramAudience = {
  audienceId: number;
  TargetAudience: TargetAudience;
};

export type ProgramTrainer = {
  trainerId: number;
  Trainer: Trainer;
};

export type TrainingProgram = {
  id: number;
  title: string;
  description: string;
  trainingMode: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  availableSeats: number;
  occuranceType: string;
  occuranceInterval: number;
  status: string;
  trainingType: string;
  ProgramAudiences: ProgramAudience[];
  ProgramTrainers: ProgramTrainer[];
};

export type AddNewFieldProp = {
  openModal: boolean;
  onClose: () => void;
};
