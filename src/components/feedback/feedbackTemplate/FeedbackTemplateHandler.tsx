import { useForm, useFieldArray } from "react-hook-form";
import { FeedbackTemplateData, FeedbackTemplateHandlerProp } from "../types";
import FeedbackTemplate from "./FeedbackTemplate";
import { useEffect } from "react";
import { postFeedbackTemplate } from "../api/postFeedbackTemplate";
import { AxiosError } from "axios";
import { Box, Modal, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FeedbackTemplateHandler = ({
  openModal,
  onClose,
}: FeedbackTemplateHandlerProp) => {
  const { control, handleSubmit, watch, register } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "template",
  });

  const onSubmit = async (data: FeedbackTemplateData) => {
    try {
      await postFeedbackTemplate(data);
      onClose();
    } catch (error) {
      console.log(error as AxiosError);
    }
  };

  const isAddQuestionButtonActive = () => {
    if (fields.length === 0) return true;

    const lastIndex = fields.length - 1;
    const { type, options, question } = watch(`template[${lastIndex}]`);

    return (
      (type === "text" && question !== "") ||
      (type !== "text" && options.length >= 1 && question !== "")
    );
  };

  useEffect(() => {
    append({ question: "", type: "text", options: [] });
  }, []);

  return (
    <Modal open={openModal} disableEnforceFocus>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { md: "55%", xs: "95%" },
          height: "95%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
      >
        <Button
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <CloseIcon />
        </Button>
        <FeedbackTemplate
          handleSubmit={handleSubmit}
          register={register}
          remove={remove}
          onSubmit={onSubmit}
          isAddQuestionButtonActive={isAddQuestionButtonActive}
          append={append}
          fields={fields}
          control={control}
          watch={watch}
        />
      </Box>
    </Modal>
  );
};

export default FeedbackTemplateHandler;
