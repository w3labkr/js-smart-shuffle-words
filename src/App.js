import React, { useMemo } from "react";
import { useRecoilState } from "recoil";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { themeColorModeState } from "@atoms/theme";
import { ColorModeContext } from "./contexts/theme";
import Page from "./pages/Home";

function App() {
  const [mode, setMode] = useRecoilState(themeColorModeState);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [setMode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
        palette: {
          mode,
          borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.3)',
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Page />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
