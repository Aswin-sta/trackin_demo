import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Button,
  FormGroup,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { DynamicFormProps } from "../types";

export function DynamicForm({
  formData,
  handleSubmit,
  handleChange,
  setRating,
  formState,
  rating,
}: DynamicFormProps) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {formData.map((questionObj, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{questionObj.question}</h3>
            {questionObj.type === "text" && (
              <TextField
                id="outlined-basic"
                type="text"
                name={questionObj?.question}
                onChange={(e) =>
                  handleChange(
                    e as React.ChangeEvent<HTMLInputElement>,
                    questionObj.question
                  )
                }
                required={questionObj.required}
                fullWidth
              />
            )}
            {questionObj.type === "radio" && (
              <RadioGroup
                aria-label={questionObj.question}
                name={questionObj.question}
                value={formState[questionObj.question] || ""}
                onChange={(e) => handleChange(e, questionObj.question)}
              >
                {questionObj.options?.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            )}
            {questionObj.type === "checkbox" && (
              <FormGroup>
                {questionObj.options?.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        name={option}
                        onChange={(e) => handleChange(e, questionObj.question)}
                      />
                    }
                    label={option}
                  />
                ))}
              </FormGroup>
            )}
          </div>
        ))}
        <h3>Rate the program</h3>
        <Rating
          name="simple-controlled"
          value={rating}
          defaultValue={2.5}
          precision={0.5}
          size="large"
          onChange={(_, newValue) => {
            setRating(newValue);
          }}
        />
        <Button fullWidth type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}
