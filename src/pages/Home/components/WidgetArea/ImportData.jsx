import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';
import { debounce as _debounce } from 'lodash';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { parseGoogleSpreadsheets } from '~/modules/parser';
import { stopwordsState } from '~/store/atoms/main';

const STOPWORDS_URL1 = process.env.REACT_APP_STOPWORDS_URL1;
const STOPWORDS_URL2 = process.env.REACT_APP_STOPWORDS_URL2;
const STOPWORDS_URL3 = process.env.REACT_APP_STOPWORDS_URL3;

export default function ImportData() {
  const { t } = useTranslation();
  const [backdrop, setBackdrop] = useState({ open: false });
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success',
    message: t('Succeed!'),
  });
  const setStopwords = useSetRecoilState(stopwordsState);

  const handleClick = _debounce((url) => {
    setBackdrop({ open: true });
    axios
      .get(url)
      .then(function (response) {
        const stopwords = parseGoogleSpreadsheets(response.data);
        setStopwords(stopwords.join(' '));
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
      <List>
        <ListItem disablePadding>
          <ListItemText primary={t('Import data')} sx={{ pt: 1, px: 2, color: 'primary.main' }} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick(STOPWORDS_URL1)}>
            <ListItemText primary={`${t('Stopword List')} 1`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick(STOPWORDS_URL2)}>
            <ListItemText primary={`${t('Stopword List')} 2`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleClick(STOPWORDS_URL3)}>
            <ListItemText primary={`${t('Stopword List')} 3`} />
          </ListItemButton>
        </ListItem>
      </List>
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
