import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MenuItemComponentProps } from "./types";
import colorConfigs from "../../configs/colorConfigs";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";

const MenuItemComponent = ({ text, icon, link }: MenuItemComponentProps) => {
  const { toggleNavBar } = useContext(NavContext);
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={link}
        onClick={() => {
          toggleNavBar(true);
        }}
        selected={link === location.pathname}
      >
        <ListItemIcon sx={{ minWidth: "30px" }}>{icon}</ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontSize: "0.9em",
            color: colorConfigs.sidebar.color,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItemComponent;
