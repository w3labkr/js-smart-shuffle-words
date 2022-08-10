import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { ColorModeContext } from "@contexts/theme";

export default function ToggleColorMode() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === "dark" ? <LightModeIcon /> : <ModeNightIcon />}
    </IconButton>
  );
}
