import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ToggleColorMode from '~/components/ToggleColorMode';
import LanguageChange from '~/components/LanguageChange';
import { themeSidebarWidthState } from '~/store/atoms/theme';

const APP_VERSION = process.env.REACT_APP_VERSION;

const AppBar = styled(MuiAppBar)(({ sidebarwidth }) => ({
  width: `calc(100% - ${sidebarwidth}px)`,
  marginRight: `${sidebarwidth}px`,
}));

export default function Header() {
  const { t } = useTranslation();
  const sidebarWidth = useRecoilValue(themeSidebarWidthState);

  return (
    <AppBar position="fixed" sidebarwidth={sidebarWidth}>
      <Toolbar>
        <Typography variant="h6" noWrap component="h1" sx={{ flexGrow: 1 }}>
          {t('Smart Shuffle Words')} {APP_VERSION}
        </Typography>
        <ToggleColorMode />
        <LanguageChange />
      </Toolbar>
    </AppBar>
  );
}
