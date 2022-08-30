import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from '@mui/system';
import MuiButton from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import * as mainState from '@atoms/main';
import { debounce } from 'lodash';

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function MyComponent() {
  const { t } = useTranslation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [marketSettings, setMarketSettings] = useRecoilState(mainState['marketSettingsState']);
  const setStartEnabled = useSetRecoilState(mainState['startEnabledState']);
  const setEndEnabled = useSetRecoilState(mainState['endEnabledState']);
  const setLineTextLength = useSetRecoilState(mainState['lineTextLengthState']);

  const handleClick = debounce(() => {
    setMarketSettings('General');
    setLineTextLength(-1);
    setStartEnabled(false);
    setEndEnabled(false);
    setSnackbarOpen(true);
  }, 100);

  return (
    <>
      <Button
        variant={marketSettings === 'General' ? 'contained' : 'outlined'}
        size="large"
        color="secondary"
        onClick={handleClick}
      >
        {t('General Market')}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{t('Updated!')}</Alert>
      </Snackbar>
    </>
  );
}
