export type AttendanceBody = {
  isPresent: boolean;
  date: string;
  userTrainingId: number;
  user_email: string;
  training_title: string;
  end_date: string;
};

export type UnmarkedAttendee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  startDate: string;
  endDate: string;
  title: string;
  isPresent?: boolean;
};

export type EnrolledUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  title: string;
  startDate: string;
};

export type EnrolledParticipantsListProps = {
  enrolledUsers: EnrolledUser[];
};
