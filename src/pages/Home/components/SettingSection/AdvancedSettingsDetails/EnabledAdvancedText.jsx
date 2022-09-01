import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { styled } from '@mui/system';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import MuiTextField from '@mui/material/TextField';
import * as mainState from '~/store/atoms/main';

const TextField = styled(MuiTextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export default function EnabledAdvancedText({ children, textState, enabledState }) {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useRecoilState(mainState[enabledState]);
  const [text, setText] = useRecoilState(mainState[textState]);

  return (
    <>
      <Typography>
        {children}
        <Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
      </Typography>
      <TextField
        value={text}
        placeholder={t('Please enter text')}
        variant="outlined"
        fullWidth
        onChange={(e) => setText(e.target.value)}
        disabled={!enabled}
      />
    </>
  );
}
