import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { styled } from '@mui/system';
import MuiButton from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { debounce as _debounce, uniq as _uniq } from 'lodash';
import { stopWordsState } from '~/store/atoms/main';

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function UniqueStopwordsAction() {
  const { t } = useTranslation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [stopWords, setStopWords] = useRecoilState(stopWordsState);

  const handleClick = _debounce(() => {
    let oldList = stopWords.split(' ');
    let newList = _uniq(oldList);
    setStopWords(newList.join(' '));
    setSnackbarOpen(true);
  }, 100);

  return (
    <>
      <Button variant="outlined" size="large" onClick={handleClick}>
        {t('Remove stopwords')}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{t('Duplicate words have been removed!')}</Alert>
      </Snackbar>
    </>
  );
}
