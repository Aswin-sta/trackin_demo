import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import { PersonOutlineOutlined as TrainerIcon } from "@mui/icons-material";
import { DateRange as CalendarIcon } from "@mui/icons-material";
import { ProgramListCardProps } from "./types";
const ProgramListCard = ({
  programData,

  handleCardClick,
}: ProgramListCardProps) => {
  const convertDateFormat = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <Grid
        container
        sx={{ textAlign: "left", pb: "16px", mt: "1rem", marginTop: "2rem" }}
      >
        <Grid item xs={2.5}>
          <Typography variant="subtitle2" fontWeight="bold">
            Training Program{}
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Typography variant="subtitle2" fontWeight="bold">
            Trainer Name
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2" fontWeight="bold">
            Start Date
          </Typography>
        </Grid>
        <Grid item xs={1.7}>
          <Typography variant="subtitle2" fontWeight="bold">
            End Date
          </Typography>
        </Grid>
        <Grid item xs={1.7}>
          <Typography variant="subtitle2" fontWeight="bold">
            Attendees
          </Typography>
        </Grid>
        <Grid item xs={1.3}>
          <Typography variant="subtitle2" fontWeight="bold">
            Available seats
          </Typography>
        </Grid>
      </Grid>

      {/* Render training program list */}
      {programData.length === 0 ? (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption" color="grey" sx={{ mt: "3rem" }}>
            No available training programs.
          </Typography>
        </Box>
      ) : (
        programData.map((program) => (
          <Card
            key={program.id}
            onClick={() => handleCardClick(program.id)}
            sx={{
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              mb: ".6rem",
              backgroundColor: "#fcfcfc",
              height: "3.5rem",
              position: "relative",
            }}
          >
            <CardContent>
              <Grid container alignItems="center">
                <Grid item xs={2.3} display={"flex"}>
                  <Typography variant="caption">{program.title}</Typography>
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  display={"flex"}
                  style={{ overflow: "hidden" }}
                >
                  <TrainerIcon
                    fontSize="small"
                    sx={{ marginRight: "6px", color: "#545659" }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      width: "120px",
                    }}
                  >
                    {program.ProgramTrainers.map(
                      (program) => program.Trainer.fullname
                    ).join(", ")}
                  </Typography>
                </Grid>

                <Grid item xs={2} display={"flex"}>
                  <CalendarIcon
                    fontSize="small"
                    sx={{ marginRight: "6px", color: "#545659" }}
                  />
                  <Typography variant="caption">
                    {convertDateFormat(program.startDate)}
                  </Typography>
                </Grid>
                <Grid item xs={2} display={"flex"}>
                  <CalendarIcon
                    fontSize="small"
                    sx={{ marginRight: "6px", color: "#545659" }}
                  />
                  <Typography variant="caption">
                    {convertDateFormat(program.endDate)}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="caption">
                    {program.ProgramAudiences.map(
                      (audience) => audience.TargetAudience.name
                    ).join(", ")}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="caption">
                    {program.availableSeats}
                    {"  seats"}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
};

export default ProgramListCard;
