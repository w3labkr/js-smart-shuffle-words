import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ToggleColorMode from "@components/header/ToggleColorMode";
import ChangeLanguage from "@components/header/ChangeLanguage";
// import MoreActions from "@components/header/MoreActions";

export default function Header() {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="h1" sx={{ flexGrow: 1 }}>
          {t("title")}
        </Typography>
        <ToggleColorMode />
        <ChangeLanguage />
        {/* <MoreActions /> */}
      </Toolbar>
    </AppBar>
  );
}
