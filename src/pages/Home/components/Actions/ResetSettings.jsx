import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useResetRecoilState, useRecoilValue } from 'recoil';
import { styled } from '@mui/system';
import MuiButton from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import * as mainState from '~/store/atoms/main';
import { debounce } from 'lodash';

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function ResetSettings() {
  const { t } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const storageKey = useRecoilValue(mainState['storageKeyState']);
  const resetStates = {
    // Actions Settings
    shuffleTextState: useResetRecoilState(mainState['shuffleTextState']),
    previewTextState: useResetRecoilState(mainState['previewTextState']),
    consoleTextState: useResetRecoilState(mainState['consoleTextState']),
    marketSettingsState: useResetRecoilState(mainState['marketSettingsState']),

    // Global Settings
    settingsExpandedPanelState: useResetRecoilState(mainState['settingsExpandedPanelState']),

    // General Settings
    indexColumnState: useResetRecoilState(mainState['indexColumnState']),
    lineTextLengthState: useResetRecoilState(mainState['lineTextLengthState']),
    specialCharactersState: useResetRecoilState(mainState['specialCharactersState']),
    stopWordsState: useResetRecoilState(mainState['stopWordsState']),

    // Advanced Settings: Start
    startEnabledState: useResetRecoilState(mainState['startEnabledState']),
    startTextState: useResetRecoilState(mainState['startTextState']),
    startChoiceRandomCharacterState: useResetRecoilState(mainState['startChoiceRandomCharacterState']),
    startLimitRandomTextLengthState: useResetRecoilState(mainState['startLimitRandomTextLengthState']),

    // Advanced Settings: End
    endEnabledState: useResetRecoilState(mainState['endEnabledState']),
    endTextState: useResetRecoilState(mainState['endTextState']),
    endChoiceRandomCharacterState: useResetRecoilState(mainState['endChoiceRandomCharacterState']),
    endLimitRandomTextLengthState: useResetRecoilState(mainState['endLimitRandomTextLengthState']),
  };

  const handleAgree = debounce(() => {
    localStorage.removeItem(storageKey);
    Object.keys(resetStates).forEach(function (stateName) {
      resetStates[stateName]();
    });
    setDialogOpen(false);
    setSnackbarOpen(true);
  }, 100);

  return (
    <>
      <Button variant="outlined" size="large" color="error" onClick={() => setDialogOpen(true)}>
        {t('Reset')}
      </Button>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('Are you sure you want to reset all settings?')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('All settings in General Settings and Advanced Settings will be reset.')}
            <br />
            {t('Resetting cannot restore existing settings.')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>{t('Disagree')}</Button>
          <Button onClick={handleAgree} autoFocus>
            {t('Agree')}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{t('Reseted!')}</Alert>
      </Snackbar>
    </>
  );
}
