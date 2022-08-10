import * as React from "react";
import Box from "@mui/material/Box";

export default function Layout({ children }) {
  return <Box sx={{ display: "flex" }}>{children}</Box>;
}
