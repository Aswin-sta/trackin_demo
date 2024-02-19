import { FieldValues, SubmitHandler } from "react-hook-form";
import FeedbackTemplateCard from "./FeedbackTemplateCard";
import {
  Button,
  Grid,
  Container,
  TextField,
  CardContent,
  CardActions,
  Card,
  CardMedia,
} from "@mui/material";
import colorConfigs from "../../../configs/colorConfigs";
import { FeedbackTemplateProps } from "../types";

const FeedbackTemplate = ({
  handleSubmit,
  register,
  remove,
  onSubmit,
  isAddQuestionButtonActive,
  append,
  fields,
  control,
  watch,
}: FeedbackTemplateProps) => {
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ bgcolor: colorConfigs.sidebar.bgcolor }}>
              <CardMedia
                component="div"
                sx={{
                  height: 140,
                  backgroundColor: "#2196f3",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                }}
              >
                <TextField
                  required
                  {...register("name")}
                  label="Template Name"
                  fullWidth
                  placeholder={"untitled form"}
                  variant="filled"
                  InputProps={{
                    style: { color: "white", fontSize: "1.5rem" },
                  }}
                  InputLabelProps={{
                    style: { color: "white", fontSize: ".9rem" },
                  }}
                />
              </CardMedia>

              <CardContent>
                {fields?.map((field, index) => (
                  <Grid item key={field.id}>
                    <FeedbackTemplateCard
                      index={index}
                      register={register}
                      control={control}
                      remove={remove}
                      watch={watch}
                    />
                  </Grid>
                ))}
              </CardContent>

              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingInline: 2,
                }}
              >
                <Button
                  color="primary"
                  variant="text"
                  onClick={() => {
                    append({ question: "", type: "text", options: [] });
                  }}
                  disabled={!isAddQuestionButtonActive()}
                >
                  Add Question
                </Button>

                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default FeedbackTemplate;
