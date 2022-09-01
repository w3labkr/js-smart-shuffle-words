import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';

const Box = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default function Main({ children }) {
  return <Box component="main">{children}</Box>;
}
