import React from "react";
import {
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { paths } from "../utils/path.js";
import { drawerWidth } from "../constant/Layout.js";

export const Sidebar = ({
  mobileOpen,
  handleDrawerClose,
  navigateTo,
  theme,
  handleDrawerTransitionEnd,
}) => {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {paths.map(({ icon: Icon, name, route }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton onClick={() => navigateTo(route)}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Divider />
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerClose}
        onTransitionEnd={handleDrawerTransitionEnd}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: theme.palette.background.default,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
