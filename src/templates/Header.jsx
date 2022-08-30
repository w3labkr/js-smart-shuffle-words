import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ToggleColorMode from '~/components/ToggleColorMode';
import LanguageChange from '~/components/LanguageChange';
// import MoreActions from "~/components/MoreActions";

const APP_VERSION = process.env.REACT_APP_VERSION;

export default function Header() {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="h1" sx={{ flexGrow: 1 }}>
          {t('Smart Shuffle Words')} {APP_VERSION}
        </Typography>
        <ToggleColorMode />
        <LanguageChange />
        {/* <MoreActions /> */}
      </Toolbar>
    </AppBar>
  );
}
