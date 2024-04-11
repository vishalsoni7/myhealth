import { createTheme } from "@mui/material";

export const colors = {
  dark: {
    background: "#2c3e50",
    text: "#F5F5F5",
  },
  light: {
    background: "#F5F5F5",
    text: "#2c3e50",
  },
};

export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      background: {
        default: mode ? colors.dark.background : colors.light.background,
      },
      text: {
        primary: mode ? colors.dark.text : colors.light.text,
      },
    },
  });
};
