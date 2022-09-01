import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MuiStack from '@mui/material/Stack';
import { specialCharactersState } from '~/store/atoms/main';

const Stack = styled(MuiStack)(({ theme }) => ({
  marginTop: theme.spacing(-1),
}));

export default function RemoveSpecialCharacters() {
  const { t } = useTranslation();
  const [specialCharacters, setStopWordSpecialCharacters] = useRecoilState(specialCharactersState);

  return (
    <Stack spacing={1}>
      <Typography>{t('Enter the special characters to be removed:')}</Typography>
      <TextField
        fullWidth
        value={specialCharacters}
        variant="outlined"
        placeholder={t('Please enter text')}
        onChange={(e) => setStopWordSpecialCharacters(e.target.value)}
      />
    </Stack>
  );
}
