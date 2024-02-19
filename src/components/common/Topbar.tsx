import { AppBar, Toolbar, IconButton, Avatar, TextField } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";
const Topbar = () => {
  const { toggleNavBar } = useContext(NavContext);
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${sizeConfigs.sideBar.width})` },
        ml: { sm: `${sizeConfigs.sideBar.width}` },
        bgcolor: "white",
        height: sizeConfigs.topBar.height,
        boxSizing: "border-box",
        p: 1,
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          onClick={() => {
            toggleNavBar();
          }}
        >
          <MenuIcon />
        </IconButton>

        <TextField
          id="outlined-basic"
          variant="outlined"
          size="medium"
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{
            flexGrow: 1, // Take up remaining space
            "& .MuiInputBase-root": {
              width: "70%",
              height: 50,
              borderRadius: 0,
            },
          }}
        />
        {<Avatar alt="avatar" sx={{ width: 28, height: 28 }} />}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
