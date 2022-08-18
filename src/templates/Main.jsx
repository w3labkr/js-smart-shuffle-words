import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Main({ children }) {
  return (
    <Box
      component="main"
      sx={{ bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      {children}
    </Box>
  );
}
