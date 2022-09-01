import { useRecoilValue } from 'recoil';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { themeSidebarWidthState } from '~/store/atoms/theme';

export default function Sidebar() {
  const sidebarWidth = useRecoilValue(themeSidebarWidthState);

  return (
    <Drawer
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sidebarWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <Divider />
    </Drawer>
  );
}
