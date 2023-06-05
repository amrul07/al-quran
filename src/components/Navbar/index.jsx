import * as React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Navbar = () => {

  return (
    <nav className={styles.nav} style={{ justifyContent: "space-around" }}>
      <Box display={"flex"}>
        <img className={styles.navIcon} src={logo} alt="emoji icon" />
        {/* <img className={styles.navIcon} src={searchIcon} alt="search icon" /> */}
        <Typography
          variant="h5"
          mx={1}
          mt={1}
          fontWeight="bold"
          className={styles.navTitle}
        >
          {" "}
          Al-Quran Online
        </Typography>
      </Box>

      
    </nav>
  );
};

export default Navbar;
