import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { stopwordsState, stopwordsEnabledState } from '~/store/atoms/main';

export default function RemoveStopwords() {
  const { t } = useTranslation();
  const [stopwords, setStopwords] = useRecoilState(stopwordsState);
  const [enabled, setEnabled] = useRecoilState(stopwordsEnabledState);

  return (
    <Stack spacing={1}>
      <Typography>
        {t('Enter stopwords:')}
        <Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} sx={{ mt: -0.5 }} />
      </Typography>
      <TextField
        multiline
        fullWidth
        rows={4}
        value={stopwords}
        variant="outlined"
        placeholder={t('Please enter text')}
        helperText={t('Seperated by whitespace')}
        disabled={!enabled}
        onChange={(e) => setStopwords(e.target.value)}
      />
    </Stack>
  );
}
