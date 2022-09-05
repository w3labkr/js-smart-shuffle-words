import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { styled } from '@mui/system';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import MuiTextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as mainState from '~/store/atoms/main';

const TextField = styled(MuiTextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export default function EnabledText({ children, textState, enabledState, excludeFirstLineState }) {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useRecoilState(mainState[enabledState]);
  const [text, setText] = useRecoilState(mainState[textState]);
  const [excludeFirstLine, setExcludeFirstLine] = useRecoilState(mainState[excludeFirstLineState]);

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
      <FormGroup sx={{ mt: -2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={excludeFirstLine}
              onChange={(e, newValue) => setExcludeFirstLine(newValue)}
              disabled={!enabled}
            />
          }
          label={t('Exclude the first line')}
        />
      </FormGroup>
    </>
  );
}
