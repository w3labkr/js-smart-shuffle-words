import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeColorModeState } from './store/atoms/theme';
import { ColorModeContext } from './contexts/theme';
import useGATracker from './hooks/useGATracker';
import Home from './pages/Home';

function App() {
  const [mode, setMode] = useRecoilState(themeColorModeState);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
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

  useGATracker();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <title>Smart Shuffle Words</title>
          <meta name="description" content="Shuffle the words on each line" />
          <meta name="keywords" content="js,javascript,react,reactjs,shuffle,words" />
        </Helmet>
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
