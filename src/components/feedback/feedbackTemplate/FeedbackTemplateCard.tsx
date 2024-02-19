import { Controller, useFieldArray } from "react-hook-form";
import {
  IconButton,
  InputAdornment,
  TextField,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  CardActions,
  Button,
  Switch, // Import Checkbox from MUI
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import { FeedbackTemplateCardProps } from "../types";

const FeedbackTemplateCard = ({
  index,
  register,
  watch,
  control,
  remove,
}: FeedbackTemplateCardProps) => {
  const questionType = watch(`template[${index}].type`);
  const {
    fields,
    append,
    remove: removeOption,
  } = useFieldArray({
    control,
    name: `template[${index}].options`,
  });

  return (
    <Card elevation={1} sx={{ mb: 3 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              {...register(`template[${index}].question`)}
              label="Question"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name={`template[${index}].type`}
              control={control}
              defaultValue="text"
              render={({ field }) => (
                <Select {...field} fullWidth>
                  <MenuItem value="text">Text Box</MenuItem>
                  <MenuItem value="radio">Radio Button</MenuItem>
                  <MenuItem value="checkbox">Checkbox</MenuItem>
                </Select>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            {(questionType === "radio" || questionType === "checkbox") && (
              <>
                {fields.map((option, optionIndex) => (
                  <div key={option.id}>
                    <TextField
                      required
                      {...register(
                        `template[${index}].options[${optionIndex}]`
                      )}
                      label={`Option ${optionIndex + 1}`}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => removeOption(optionIndex)}
                            >
                              <ClearIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </div>
                ))}

                <Button size="small" variant="text" onClick={() => append("")}>
                  Add option
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => remove(index)}>
          <DeleteIcon />
        </IconButton>
        <Controller
          name={`template[${index}].required`}
          control={control}
          defaultValue={false}
          render={({ field }) => <Switch {...field} color="primary" />}
        />
        <span>required</span>
      </CardActions>
    </Card>
  );
};

export default FeedbackTemplateCard;
