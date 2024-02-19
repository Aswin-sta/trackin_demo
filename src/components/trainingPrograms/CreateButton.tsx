import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";

const CreateButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => navigate("/addProgram")}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        m: "0rem .5rem",
        p: "0rem 1rem",
        width: {
          xs: "1rem",
          md: "9rem",
        },
        height: {
          md: "4.5rem",
        },
        "& .MuiTypography-root": {
          textAlign: "left",
          mt: "0.3rem",
        },
      }}
    >
      <AddIcon fontSize="medium" />
      <Typography variant="body2" display={{ xs: "none", md: "block" }}>
        Create
      </Typography>
    </Button>
  );
};

export default CreateButton;
