import Box from '@mui/material/Box';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Main from './Main';
import Footer from './Footer';
import Divider from '@mui/material/Divider';

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Content>
        <Main>{children}</Main>
        <Divider />
        <Footer />
      </Content>
      <Sidebar />
    </Box>
  );
}
