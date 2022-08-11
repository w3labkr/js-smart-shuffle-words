import * as React from 'react';
import { useRecoilState } from "recoil";
import { useTranslation } from 'react-i18next';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from "@mui/material/styles";
import { languageState } from "@store/theme";

const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white"
  }
});

export default function ChangeLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useRecoilState(languageState);
  const handleChangeLanguage = (event, newLanguage) => {
    if (newLanguage) {
      i18n.changeLanguage(newLanguage);
      setLanguage(newLanguage);
    }
  };
  
  return (
    <ToggleButtonGroup
      size="small"
      value={language}
      exclusive
      onChange={handleChangeLanguage}
    >
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="ko">KO</ToggleButton>
    </ToggleButtonGroup>
  );
}
