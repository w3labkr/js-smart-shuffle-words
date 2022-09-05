import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { specialCharactersState, specialCharactersEnabledState } from '~/store/atoms/main';

export default function RemoveSpecialCharacters() {
  const { t } = useTranslation();
  const [specialCharacters, setSpecialCharacters] = useRecoilState(specialCharactersState);
  const [enabled, setEnabled] = useRecoilState(specialCharactersEnabledState);

  return (
    <Stack spacing={1}>
      <Typography>
        {t('Enter special characters:')}
        <Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} sx={{ mt: -0.5 }} />
      </Typography>
      <TextField
        fullWidth
        value={specialCharacters}
        variant="outlined"
        placeholder={t('Please enter text')}
        disabled={!enabled}
        onChange={(e) => setSpecialCharacters(e.target.value)}
      />
    </Stack>
  );
}
