import { Card, Rating, Typography, Box, Divider } from "@mui/material";
import { FeedbackItemProps } from "../types";

const FeedbackViewer = ({ feedbackItem }: FeedbackItemProps) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", fontSize: "2rem", color: "#000" }}
      >
        {feedbackItem.user_name}
      </Typography>
      <Typography variant="overline">Overall Rating</Typography>
      <Box  >
        <Box display="flex" alignItems="center" mb={2}>
          <Rating
            size="large"
            name="read-only"
            value={feedbackItem.rating}
            precision={0.5}
            readOnly
          />
          <Typography ml={1}>{feedbackItem.rating}</Typography>
        </Box>
        
      </Box>
      <Card elevation={0}>
      {Object.entries(feedbackItem.feedback).map(
        ([question, answer], index) => (
          <Card
            key={index}
            sx={{padding: "1rem 2rem 1rem 2rem" }}
            elevation={0}
          >
            <Typography variant="subtitle1" fontWeight={500} >
              {index + 1}. {question}
            </Typography>
            {Array.isArray(answer) ? (
              <ul>
                {answer.map((item, idx) => (
                  <li key={idx}>
                    <Typography>{item}</Typography>
                  </li>
                ))}
              </ul>
            ) : (
              <Box display="flex" alignItems="center" mt={2}>
                <Typography ml={4} mb={2.5}>{answer}</Typography>
              </Box>
            )}
            <Divider></Divider>
          </Card>
        )
      )}
      </Card>
    </Box>
  );
};

export default FeedbackViewer;
