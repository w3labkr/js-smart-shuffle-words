import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { stopwordUrlState } from '~/store/atoms/main';

export default function ImportStopwords() {
  const { t } = useTranslation();
  const [stopwords, setStopwords] = useRecoilState(stopwordUrlState);

  return (
    <Stack spacing={1}>
      <Typography>{t('Stopword url:')}</Typography>
      <TextField
        fullWidth
        value={stopwords}
        variant="outlined"
        placeholder={t('Please enter text')}
        helperText={t('Enter the address of a Google Sheets published on the web.')}
        onChange={(e) => setStopwords(e.target.value)}
      />
    </Stack>
  );
}
