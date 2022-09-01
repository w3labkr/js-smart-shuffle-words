import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { stopwordsState } from '~/store/atoms/main';

export default function RemoveStopwords() {
  const { t } = useTranslation();
  const [stopwords, setStopwords] = useRecoilState(stopwordsState);

  return (
    <Stack spacing={1}>
      <Typography>{t('Enter the stopwords to be removed:')}</Typography>
      <TextField
        multiline
        fullWidth
        rows={4}
        value={stopwords}
        variant="outlined"
        placeholder={t('Please enter text')}
        helperText={t('Seperated by whitespace')}
        onChange={(e) => setStopwords(e.target.value)}
      />
    </Stack>
  );
}
