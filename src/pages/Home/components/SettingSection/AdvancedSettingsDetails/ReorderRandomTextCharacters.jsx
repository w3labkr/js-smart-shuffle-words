import { useTranslation } from 'react-i18next';
import { useRecoilState, useRecoilValue } from 'recoil';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import * as mainState from '~/store/atoms/main';
import * as mainValue from '~/store/selectors/main';

export default function ReorderRandomTextCharacters({ reorderState, disabledValue }) {
  const { t } = useTranslation();
  const [value, setValue] = useRecoilState(mainState[reorderState]);
  const disabled = useRecoilValue(mainValue[disabledValue]);

  return (
    <FormControl>
      <Typography>{t('Reorder random text characters:')}</Typography>
      <RadioGroup row name="reorderRandomTextCharacters" value={value} onChange={(e) => setValue(e.target.value)}>
        <FormControlLabel value="none" control={<Radio />} label={t('None')} disabled={disabled} />
        <FormControlLabel value="digitWord" control={<Radio />} label={t('Digit+Word')} disabled={disabled} />
        <FormControlLabel value="wordDigit" control={<Radio />} label={t('Word+Digit')} disabled={disabled} />
      </RadioGroup>
    </FormControl>
  );
}
