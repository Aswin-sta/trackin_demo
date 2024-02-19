//to preview feedback form template "pointer events disabled"

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DynamicForm } from "./DynamicForm";
import { getFeedbackTemplatebyId } from "../api/getFeedbackTemplatebyId";
import { FeedbackTemplateData } from "../types";

const FormViewer = () => {
  const { id } = useParams<{ id: string }>();
  const [feedbackTemplateData, setFeedbackTemplateData] =
    useState<FeedbackTemplateData>({
      id: 0,
      name: "",
      template: [],
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedbackTemplateDataFromApi = await getFeedbackTemplatebyId(
          parseInt(id as string)
        );
        setFeedbackTemplateData(feedbackTemplateDataFromApi);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {feedbackTemplateData.id && (
        <DynamicForm
          formData={feedbackTemplateData.template}
          handleSubmit={() => {}}
          handleChange={() => {}}
          setRating={() => {}}
          formState={{}}
          rating={2.5}
        />
      )}
    </div>
  );
};

export default FormViewer;
