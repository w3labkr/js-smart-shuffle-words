import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { themeLanguageState } from '~/store/atoms/theme';

const ToggleButton = styled(MuiToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
  },
});

export default function LanguageChange() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useRecoilState(themeLanguageState);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <ToggleButtonGroup size="small" value={language} exclusive onChange={(e, value) => setLanguage(value)}>
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="ko">KO</ToggleButton>
    </ToggleButtonGroup>
  );
}
