import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import sizeConfigs from "../../configs/sizeConfigs";
import { NavContextProvider } from "../context/NavContext";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  const location = useLocation();

  const hideTopBar =
    location.pathname === "/" ||
    location.pathname === "/calendar" ||
    location.pathname === "/addProgram";

  return (
    <Box>
      <NavContextProvider>
        {!hideTopBar && <Topbar />}
        <Sidebar />
      </NavContextProvider>
      <Box
        component="main"
        sx={{
          paddingInline: 3,
          paddingBlock: 1,
          ml: { xs: 0, sm: sizeConfigs.sideBar.width },
          mr: 0,
          mt: { xs: !hideTopBar ? sizeConfigs.topBar.height : 2 },
          width: { sm: `calc(100% - ${sizeConfigs.sideBar.width})` },
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
