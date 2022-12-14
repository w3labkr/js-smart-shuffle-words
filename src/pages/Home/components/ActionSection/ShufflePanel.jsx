import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { shuffleTextState } from '~/store/atoms/main';

export default function ShufflePanel() {
  const { t } = useTranslation();
  const [shuffleText, setShuffleText] = useRecoilState(shuffleTextState);

  return (
    <>
      <Typography variant="h6" component="h3">
        {t('Text')}
      </Typography>
      <TextField
        required
        multiline
        fullWidth
        rows={5}
        value={shuffleText}
        variant="outlined"
        helperText={t('Seperated by whitespace')}
        onChange={(e) => setShuffleText(e.target.value)}
      />
    </>
  );
}
