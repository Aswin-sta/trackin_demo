import { UUID } from "crypto";

export type Program ={
    id:number
    title: string;
    startDate: Date;
    endDate: Date;
    availableSeats: number;
    ProgramTrainers: { Trainer: { fullname: string } }[];
    ProgramAudiences: { TargetAudience: { name: string } }[];
  }
  export type EnrolledUsers ={
    id:UUID;
    firstName: string;
    email:string
    department:string
  }
