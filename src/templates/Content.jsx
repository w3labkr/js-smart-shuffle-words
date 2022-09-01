import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

const MyContent = styled('div')(() => ({
  flexGrow: 1,
  bgcolor: 'background.default',
}));

export default function Content({ children }) {
  return (
    <MyContent>
      <Toolbar />
      {children}
    </MyContent>
  );
}
