import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import Link from '@mui/material/Link';

const Box = styled(MuiBox)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(3),
}));

export default function Footer() {
  return (
    <Box component="footer">
      <Link href="#">Powered by W3LabKr</Link>
    </Box>
  );
}
