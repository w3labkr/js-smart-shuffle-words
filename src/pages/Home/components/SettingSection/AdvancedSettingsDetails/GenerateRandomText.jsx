import { useTranslation } from 'react-i18next';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { styled } from '@mui/system';
import MuiButton from '@mui/material/Button';
import { generateRandomHangul, generateRandomString } from '~/modules/randomText';
import { repeat as _repeat } from 'lodash';
import * as mainState from '~/store/atoms/main';
import * as mainValue from '~/store/selectors/main';

const Button = styled(MuiButton)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export default function GenerateRandomText({ textState, choiceState, lengthState, disabledValue }) {
  const { t } = useTranslation();
  const setText = useSetRecoilState(mainState[textState]);
  const choices = useRecoilValue(mainState[choiceState]);
  const length = useRecoilValue(mainState[lengthState]);
  const disabled = useRecoilValue(mainValue[disabledValue]);

  const handleClick = () => {
    let characters = '';

    console.log(choices.length);

    if (choices.indexOf('uppercase') !== -1) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (choices.indexOf('lowercase') !== -1) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (choices.indexOf('digit') !== -1) {
      characters += _repeat('0123456789', 2);
    }

    if (choices.indexOf('korean') !== -1) {
      characters += generateRandomHangul(26);
    }

    setText(generateRandomString(characters, length));
  };

  return (
    <Button variant="contained" size="small" onClick={handleClick} disabled={disabled}>
      {t('Generate Random Text')}
    </Button>
  );
}
