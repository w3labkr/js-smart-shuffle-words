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

  const handleClick = _debounce(() => {
    let url = getGoogleSpreadsheetsUrl(spreadsheetsDataType, spreadsheetsPublishURL, spreadsheetsID);
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
      <Button variant="outlined" size="large" onClick={handleClick}>
        {t('Import stopwords')}
      </Button>
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
