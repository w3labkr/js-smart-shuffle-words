import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { debounce as _debounce } from 'lodash';
import axios from 'axios';
import { styled } from '@mui/system';
import MuiButton from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { parseGoogleSpreadsheets, getGoogleSpreadsheetsUrl } from '~/modules/parser';
import {
  stopwordsState,
  googleSpreadsheetsDataTypeState,
  googleSpreadsheetsPublishURLState,
  googleSpreadsheetsIDState,
} from '~/store/atoms/main';

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function ImportStopwordsAction() {
  const { t } = useTranslation();
  const [dialog, setDialog] = useState({ open: false });
  const [backdrop, setBackdrop] = useState({ open: false });
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success',
    message: t('Succeed!'),
  });
  const setStopwords = useSetRecoilState(stopwordsState);
  const spreadsheetsDataType = useRecoilValue(googleSpreadsheetsDataTypeState);
  const spreadsheetsPublishURL = useRecoilValue(googleSpreadsheetsPublishURLState);
  const spreadsheetsID = useRecoilValue(googleSpreadsheetsIDState);

  const handleAgree = _debounce(() => {
    let url = getGoogleSpreadsheetsUrl(spreadsheetsDataType, spreadsheetsPublishURL, spreadsheetsID);
    setDialog({ open: false });
    setBackdrop({ open: true });
    axios
      .get(url)
      .then(function (response) {
        const stopwords = parseGoogleSpreadsheets(spreadsheetsDataType, response.data);
        setStopwords(stopwords);
        setBackdrop({ open: false });
        setSnackbar((prev) => ({ ...prev, open: true }));
      })
      .catch(function () {
        setBackdrop({ open: false });
        setSnackbar((prev) => ({ ...prev, open: false, severity: 'error', message: t('An error has occurred.') }));
      });
  }, 100);

  return (
    <>
      <Button variant="outlined" size="large" color="error" onClick={() => setDialog({ open: true })}>
        {t('Import stopwords')}
      </Button>
      <Dialog
        open={dialog.open}
        onClose={() => setDialog({ open: false })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('Would you like to import stopwords?')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('Import stopwords from Google spreadsheets.')}
            <br />
            {t('Existing stopwords cannot be restored.')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog({ open: false })}>{t('Disagree')}</Button>
          <Button onClick={handleAgree} autoFocus>
            {t('Agree')}
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop.open}
        onClick={() => setBackdrop({ open: false })}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbar.open}
        autoHideDuration={1000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </>
  );
}
