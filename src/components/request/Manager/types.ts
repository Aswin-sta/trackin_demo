export type Status={
    trainingProgram_name:string,
    createdAt:string,
    status:string
}

export type StatusProps={
    status:Status[]
}

export type request={
    name:string,
    date:string,
    status:string
}

export type RequestData = {
    course: string;
    date: string;
    status: string;
}

export type RequestDataProps = {
    nominationRequest: RequestData[];
}

export type Course = {
    coursename: string;
    requestedby: string;
    requesteddate: string;
};

export type NominationRequestCardProps = {
    courses: Course[];
    isRejectModalOpen: boolean;
    rejectionReason: string;
    handleRejectClick: (index: number) => void;
    handleRejectClose: () => void;
    handleRejectionReasonChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleApproveClick: (index: number) => void;
    handleApproveAllClick: () => void;
    approvedCourses: Course[];
    handleRejectSubmit: (index: number) => void;
    rejectedCourses: Course[];
    index: number;
    isSubmitDisabled: boolean;
};

export type NominationAndRequestData = {
    type: string;
    count: number;
};

export type NominationAndRequestDataProps = {
    nominationAndRequestData: NominationAndRequestData[];
};
