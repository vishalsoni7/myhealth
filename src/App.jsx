import { DashBoard } from "./pages/DashBoard";
import { Exercises } from "./pages/Exercises";
import { Foods } from "./pages/Foods";
import { Goals } from "./pages/Goals";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import { useState } from "react";
import { getTheme } from "./utils/theme.js";
import { Sidebar } from "./component/Sidebar.tsx";
import { drawerWidth } from "./constant/Layout.js";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { NavAppBar } from "./component/AppBar.jsx";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const bgState = useSelector((state) => state.bg);
  const theme = getTheme(bgState);
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const navigateTo = (route) => {
    navigate(`/${route}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavAppBar handleDrawerToggle={handleDrawerToggle} />
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          navigateTo={navigateTo}
          theme={theme}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/goals" element={<Goals />} />
          </Routes>
        </Box>
        <Toaster position="bottom-right" reverseOrder={false} />
      </Box>{" "}
    </ThemeProvider>
  );
}
