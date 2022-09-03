import { useTranslation } from 'react-i18next';
import { useRecoilState, useRecoilValue } from 'recoil';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import * as mainState from '~/store/atoms/main';
import * as mainValue from '~/store/selectors/main';

export default function LimitRandomTextLength({ lengthState, disabledValue }) {
  const { t } = useTranslation();
  const [length, setLength] = useRecoilState(mainState[lengthState]);
  const disabled = useRecoilValue(mainValue[disabledValue]);

  return (
    <>
      <Typography>
        {t('Character length:')} {length}
      </Typography>
      <Slider
        value={length}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={0}
        max={24}
        onChange={(e) => setLength(e.target.value)}
        disabled={disabled}
      />
    </>
  );
}
