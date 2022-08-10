import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ToggleColorMode from "@components/header/ToggleColorMode";
import MoreButton from '@components/header/MoreButton';

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="h1" sx={{ flexGrow: 1 }}>
          Smart Shuffle Words
        </Typography>
        <ToggleColorMode />
        <MoreButton />
      </Toolbar>
    </AppBar>
  );
}
