import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import * as mainState from '~/store/atoms/main';

export default function MyComponent() {
  const { t } = useTranslation();
  const previewText = useRecoilValue(mainState['previewTextState']);

  return (
    <>
      <Typography variant="h6" component="h3">
        {t('Preview')}
      </Typography>
      <TextField multiline fullWidth rows={5} value={previewText} disabled variant="outlined" />
    </>
  );
}
