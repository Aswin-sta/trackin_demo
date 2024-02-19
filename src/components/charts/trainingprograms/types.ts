export type Course = {
    course: string;
    instructor: string;
    date: string; 
  };

 export  type trainingProgramsChartBodyCardProps={
    program:Course,
  }

  export type trainingProgramsChartHeaderProps = {
  headerText: string;
  next: string;
  handleFilter: () => void;
};
  
export type TrainingProgram = {
  id: number;
  title: string;
  description: string;
  trainingMode: string;
  startDate: string;
  endDate: string;
  duration: number;
  durationPerSession: number;
  availableSeats: number;
  occuranceType: string;
  occuranceInterval: number;
  status: string;
  trainingType: string;
  ProgramAudiences: ProgramAudience[];
  ProgramTrainers: ProgramTrainer[];
};

export type ProgramAudience = {
  audienceId: number;
  TargetAudience: {
    name: string;
  };
};

export type ProgramTrainer = {
  trainerId: number;
  Trainer: {
    trainerType: string;
    fullname: string;
  };
};

export type TrainingProgramsChartProps= {
  headerText: string;
}

