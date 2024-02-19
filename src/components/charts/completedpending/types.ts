// types.ts
export type CompletedPendingData = {
  label: string;
  value: number;
  color: string;
}

export type CompletedPendingProps = {
  data: CompletedPendingData[];
}

export type CompletedPendingCancelledData = {
  completed: number;
  pending: number;
  cancelled: number;
}