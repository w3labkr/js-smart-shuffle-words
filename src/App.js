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
          primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
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
