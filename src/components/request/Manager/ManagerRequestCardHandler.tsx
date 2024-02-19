import React, { useEffect, useState } from "react";
import { Course } from "../types";
import axiosInstance from "../../../configs/axiosConfigs";
import ManagerRequestCard from "./ManagerRequestCard";
import fetchNominations from "../../../pages/Requests/api/GetPendingNominations";

const ManagerRequestCardHandler = ({
  status,
}: {
  status: "Pending" | "Accepted" | "Rejected";
}) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNominations(status);
      setCourses(data);
    };
    fetchData();
  }, [status]);

  const [approvedCourses, setApprovedCourses] = useState<Course[]>([]);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [selectedCourseIndex, setSelectedCourseIndex] = useState<number | null>(
    null
  );
  const isSubmitDisabled = rejectionReason.trim() === "";

  let rejectIndex!: number;
  const handleRejectClick = (index: number) => {
    setRejectModalOpen(true);
    setSelectedCourseIndex(index);
    rejectIndex = index;
  };

  const handleRejectClose = () => {
    setRejectModalOpen(false);
    setSelectedCourseIndex(null);
    setRejectionReason("");
  };

  const handleRejectSubmit = async () => {
    if (selectedCourseIndex !== null) {
      try {
        const response = await axiosInstance.put(
          "nomination/put-nomination-requests",
          [
            {
              id: selectedCourseIndex,
              status: "Rejected by Manager",
              remarks: rejectionReason,
            },
          ]
        );

        if (response.status === 200) {
          const updatedCourses = courses.filter(
            (course) => course.id !== selectedCourseIndex
          );
          setCourses(updatedCourses);
          handleRejectClose();
        } else {
          console.error("Failed to update nomination:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to update nomination:", error);
      }
    }
  };

  const handleRejectionReasonChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRejectionReason(event.target.value);
  };

  const handleApproveClick = async (id: number) => {
    try {
      type requestType = {
        id: number;
        status: "Approved by Manager";
        message?: string;
      };
      const data: requestType[] = [{ id: id, status: "Approved by Manager" }];
      const response = await axiosInstance.put(
        "/nomination/put-nomination-requests",
        data
      );
      if (response.status === 200) {
        const updatedCourses = courses.filter((course) => course.id !== id);
        setCourses(updatedCourses);
        const approvedCourse = courses.find((course) => course.id === id);
        if (approvedCourse) {
          setApprovedCourses([...approvedCourses, approvedCourse]);
        }
      } else {
        console.error("Failed to update nomination:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to update nomination:", error);
    }
  };

  const handleApproveAllClick = async () => {
    try {
      const requestData: {
        id: number;
        status: "Approved by Manager";
        message?: string;
      }[] = [];
      courses.forEach((course) => {
        requestData.push({ id: course.id, status: "Approved by Manager" });
      });

      const response = await axiosInstance.put(
        "/nomination/put-nomination-requests",
        requestData
      );
      if (response.status === 200) {
        setCourses([]);
        setApprovedCourses([...approvedCourses, ...courses]);
      } else {
        console.error("Failed to update nomination:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to update nomination:", error);
    }
  };

  return (
    <div>
      <ManagerRequestCard
        courses={courses}
        approvedCourses={approvedCourses}
        isRejectModalOpen={isRejectModalOpen}
        rejectionReason={rejectionReason}
        handleRejectClick={handleRejectClick}
        handleRejectClose={handleRejectClose}
        handleRejectionReasonChange={handleRejectionReasonChange}
        handleApproveClick={handleApproveClick}
        handleApproveAllClick={handleApproveAllClick}
        handleRejectSubmit={handleRejectSubmit}
        index={rejectIndex}
        isSubmitDisabled={isSubmitDisabled}
        status={status}
      />
    </div>
  );
};

export default ManagerRequestCardHandler;
