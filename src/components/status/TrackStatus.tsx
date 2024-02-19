import { Box, Card, Grid, Typography } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { StatusProps } from "../request/Manager/types";

const TrackStatus = ({ status }: StatusProps) => {
  
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <Box sx={{ m: "0rem 0.8rem" }}>
      <Typography variant="h5" fontWeight="bold">
        Track your Requests
      </Typography>
      <Grid container sx={{ textAlign: "center", p: "1rem" }}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" fontWeight="bold">
            Course
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" fontWeight="bold">
            Nomination Date
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" fontWeight="bold">
            Status
          </Typography>
        </Grid>
      </Grid>
      {status.map((element,index ) => (
        <Card
        key={index}
          sx={{
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.13)",
            mb: ".6rem",
            backgroundColor: "#fcfcfc",
            p: "1rem 1.5rem",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography sx={{pl:'3rem'}} variant="body2">
                {element.trainingProgram_name}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DateRangeIcon
                fontSize="small"
                sx={{ marginRight: "6px", color: "#545659" }}
              />
              <Typography variant="body2">{formatDate(new Date(element.createdAt))}</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                textAlign: "center",
                pl: 3,
                color:
                  element.status === "Approved by L&D"
                    ? "#30B724"
                    : element.status === "Rejected by L&D" || element.status === "Rejected by Manager"
                    ? "#E10000"
                    : "#4E66E2",
              }}
            >
              <Typography variant="body2">{element.status}</Typography>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default TrackStatus;
