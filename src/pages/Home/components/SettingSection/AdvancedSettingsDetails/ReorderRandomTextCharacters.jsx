import { useTranslation } from 'react-i18next';
// import { useRecoilState, useRecoilValue } from 'recoil';
import Typography from '@mui/material/Typography';
// import * as mainState from '~/store/atoms/main';
// import * as mainValue from '~/store/selectors/main';

export default function ReorderRandomTextCharacters() {
  const { t } = useTranslation();
  // const [length, setLength] = useRecoilState(mainState[lengthState]);
  // const disabled = useRecoilValue(mainValue[disabledValue]);

  return (
    <>
      <Typography>{t('Reorder random text characters:')}</Typography>
    </>
  );
}
