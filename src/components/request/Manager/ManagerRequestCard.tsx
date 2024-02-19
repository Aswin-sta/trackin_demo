import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { NominationRequestCardProps } from "../types";

const ManagerRequestCard = ({
  courses,
  isRejectModalOpen,
  rejectionReason,
  handleRejectClick,
  handleRejectClose,
  handleRejectionReasonChange,
  handleApproveClick,
  handleApproveAllClick,
  handleRejectSubmit,
  isSubmitDisabled,
  status,
}: NominationRequestCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <>
      <Box>
        <Grid container sx={{ ml: 7 }}>
          <Hidden mdDown>
            <Grid item md={2.5}>
              <Typography variant="subtitle2" fontWeight="bold">
                Training Program
              </Typography>
            </Grid>
            <Grid item md={2.5} sx={{ ml: 11 }}>
              <Typography variant="subtitle2" fontWeight="bold">
                Requested By
              </Typography>
            </Grid>
            <Grid item md={1.7} sx={{ ml: 3 }}>
              <Typography variant="subtitle2" fontWeight="bold">
                Requested Date
              </Typography>
            </Grid>
          </Hidden>
          {status === "Pending" && (
            <Grid item md={2.8} sx={{ ml: 5.25 }}>
              <Button
                variant="text"
                size="small"
                onClick={handleApproveAllClick}
                sx={{
                  "&:focus": { outline: "none" },
                  "&:active": { boxShadow: "none" },
                  textTransform: "capitalize",
                }}
              >
                Approve All
              </Button>
            </Grid>
          )}
        </Grid>
      </Box>

      {courses.length === 0 ? (
        <Box sx={{ ml: { xs: 1, sm: "5rem" }, textAlign: "center" }}>
          <Typography variant="caption" color="grey" sx={{ mt: "2rem" }}>
            No pending nominations.
          </Typography>
        </Box>
      ) : (
        courses.map((element) => (
          <Card
            key={element.id}
            sx={{
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.13)",
              m: "0.6rem 0.5rem",
              p: "0.7rem 1rem",
              backgroundColor: "#fcfcfc",
            }}
          >
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={12} md={4} sx={{ pl: { xs: 2, md: "2rem" } }}>
                <Typography variant="caption">
                  {element.trainingProgram_name}
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={2.3}
                sx={{
                  display: "flex",
                }}
              >
                <PersonOutlineOutlinedIcon
                  fontSize="small"
                  sx={{ marginRight: "6px", color: "#545659" }}
                />
                <Typography variant="caption">{element.user_name}</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={2.3}
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
                <Typography variant="caption">
                  {formatDate(element.createdAt)}
                </Typography>
              </Grid>
              {status === "Pending" && (
                <>
                  <Grid
                    item
                    xs={6}
                    md={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        "&:focus": { outline: "none" },
                        "&:active": { boxShadow: "none" },
                        textTransform: "capitalize",
                      }}
                      onClick={() => handleApproveClick(element.id)}
                    >
                      Approve
                    </Button>
                  </Grid>

                  <Grid item xs={6} md={1.4}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleRejectClick(element.id)}
                      sx={{
                        "&:focus": { outline: "none" },
                        "&:active": { boxShadow: "none" },
                        textTransform: "capitalize",
                      }}
                    >
                      Reject
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </Card>
        ))
      )}
      <Dialog
        open={isRejectModalOpen}
        onClose={handleRejectClose}
        maxWidth="xs"
        fullWidth
        sx={{
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          "& .MuiDialogTitle-root": {
            padding: "16px",
            borderBottom: "1px solid #ccc",
          },
          "& .MuiDialogContent-root": {
            padding: "16px",
          },
          "& .MuiDialogActions-root": {
            padding: "16px",
            borderTop: "1px solid #ccc",
            justifyContent: "flex-end",
          },
        }}
      >
        <DialogTitle>Message</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            fullWidth
            value={rejectionReason}
            multiline
            onChange={handleRejectionReasonChange}
            sx={{ padding: "1rem" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRejectClose} color="primary">
            Close
          </Button>
          <Button
            onClick={() => handleRejectSubmit()}
            color="primary"
            variant="contained"
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ManagerRequestCard;
