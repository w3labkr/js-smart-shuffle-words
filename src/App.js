import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeColorModeState } from './store/atoms/theme';
import { ColorModeContext } from './contexts/theme';
import useGATracker from './hooks/useGATracker';
import Page from './pages/Home';
import Head from './templates/Head';

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
        <div className="App">
          <Head
            title="Smart Shuffle Words"
            description="Shuffle the words on each line<"
            keywords="js,javascript,react,reactjs,shuffle,words"
            canonical="https://w3labkr.github.io/js-smart-shuffle-words/"
          />
          <Page />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
