import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useResetRecoilState, useRecoilValue } from 'recoil';
import { debounce as _debounce } from 'lodash';
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

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function ResetSettings() {
  const { t } = useTranslation();
  const [dialog, setDialog] = useState({ open: false });
  const [snackbar, setSnackbar] = useState({ open: false });
  const storageKey = useRecoilValue(mainState['storageKeyState']);
  const states = {
    // Actions Settings
    shuffleTextState: useResetRecoilState(mainState['shuffleTextState']),
    previewTextState: useResetRecoilState(mainState['previewTextState']),
    consoleTextState: useResetRecoilState(mainState['consoleTextState']),
    marketSettingsState: useResetRecoilState(mainState['marketSettingsState']),

    // Global Settings
    settingsTabPanelState: useResetRecoilState(mainState['settingsTabPanelState']),

    // General Settings
    lineTextLengthState: useResetRecoilState(mainState['lineTextLengthState']),
    specialCharactersState: useResetRecoilState(mainState['specialCharactersState']),
    stopwordsState: useResetRecoilState(mainState['stopwordsState']),
    googleSpreadsheetsDataTypeState: useResetRecoilState(mainState['googleSpreadsheetsDataTypeState']),
    googleSpreadsheetsPublishURLState: useResetRecoilState(mainState['googleSpreadsheetsPublishURLState']),
    googleSpreadsheetsIDState: useResetRecoilState(mainState['googleSpreadsheetsIDState']),

    // Advanced Settings: Start
    startEnabledState: useResetRecoilState(mainState['startEnabledState']),
    startTextState: useResetRecoilState(mainState['startTextState']),
    startExcludeFirstLineState: useResetRecoilState(mainState['startExcludeFirstLineState']),
    startChoiceRandomCharacterState: useResetRecoilState(mainState['startChoiceRandomCharacterState']),
    startLimitRandomTextLengthState: useResetRecoilState(mainState['startLimitRandomTextLengthState']),
    startReorderRandomTextCharactersState: useResetRecoilState(mainState['startReorderRandomTextCharactersState']),

    // Advanced Settings: End
    endEnabledState: useResetRecoilState(mainState['endEnabledState']),
    endTextState: useResetRecoilState(mainState['endTextState']),
    endExcludeFirstLineState: useResetRecoilState(mainState['endExcludeFirstLineState']),
    endChoiceRandomCharacterState: useResetRecoilState(mainState['endChoiceRandomCharacterState']),
    endLimitRandomTextLengthState: useResetRecoilState(mainState['endLimitRandomTextLengthState']),
    endReorderRandomTextCharactersState: useResetRecoilState(mainState['endReorderRandomTextCharactersState']),
  };

  const handleAgree = _debounce(() => {
    localStorage.removeItem(storageKey);
    Object.keys(states).forEach(function (stateName) {
      states[stateName]();
    });
    setDialog({ open: false });
    setSnackbar({ open: true });
  }, 100);

  return (
    <>
      <Button variant="outlined" size="large" color="error" onClick={() => setDialog({ open: true })}>
        {t('Reset')}
      </Button>
      <Dialog
        open={dialog.open}
        onClose={() => setDialog({ open: false })}
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
          <Button onClick={() => setDialog({ open: false })}>{t('Disagree')}</Button>
          <Button onClick={handleAgree} autoFocus>
            {t('Agree')}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbar.open}
        autoHideDuration={1000}
        onClose={() => setSnackbar({ open: false })}
      >
        <Alert severity="success">{t('Reseted!')}</Alert>
      </Snackbar>
    </>
  );
}
