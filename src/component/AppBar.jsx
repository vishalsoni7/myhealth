import React from "react";
import { drawerWidth } from "../constant/Layout";
import { Box, IconButton, Toolbar, Typography, AppBar } from "@mui/material";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleBgMode } from "../utils/actions";
import { useDispatch, useSelector } from "react-redux";

export const NavAppBar = ({ handleDrawerToggle }) => {
  const dispatch = useDispatch();
  const bgState = useSelector((state) => state.bg);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ background: "darkcyan" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Neog Health
          </Typography>
          <Typography>
            <DarkModeSwitch
              checked={bgState}
              onChange={() => dispatch(toggleBgMode())}
              size={20}
            />
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
