import Box from '@mui/material/Box';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
}
