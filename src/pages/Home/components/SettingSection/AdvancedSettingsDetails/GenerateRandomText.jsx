import { useTranslation } from 'react-i18next';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { styled } from '@mui/system';
import MuiButton from '@mui/material/Button';
import { generateRandomHangul, generateRandomString } from '~/modules/randomText';
import * as mainState from '~/store/atoms/main';
import * as mainValue from '~/store/selectors/main';

const Button = styled(MuiButton)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export default function GenerateRandomText({ textState, choiceState, lengthState, reorderState, disabledValue }) {
  const { t } = useTranslation();
  const setText = useSetRecoilState(mainState[textState]);
  const choices = useRecoilValue(mainState[choiceState]);
  const length = useRecoilValue(mainState[lengthState]);
  const reorder = useRecoilValue(mainState[reorderState]);
  const disabled = useRecoilValue(mainValue[disabledValue]);

  const handleClick = () => {
    let characters = setCharacters(choices);
    let text = generateRandomString(characters, length);
    text = reorderCharacters(reorder, text);

    setText(text);
  };

  return (
    <Button variant="contained" size="small" onClick={handleClick} disabled={disabled}>
      {t('Generate Random Text')}
    </Button>
  );
}

function setCharacters(choices) {
  let characters = '';

  if (choices.indexOf('uppercase') !== -1) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (choices.indexOf('lowercase') !== -1) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (choices.indexOf('digit') !== -1) {
    characters += '0123456789';
  }

  if (choices.indexOf('korean') !== -1) {
    characters += generateRandomHangul(26);
  }

  return characters;
}

function reorderCharacters(reorder, oldText) {
  if (reorder === 'none') {
    return oldText;
  }

  let digit = oldText.replace(/([^0-9])/g, '');
  let nonDigit = oldText.replace(/([0-9])/g, '');
  let newText = '';

  if (reorder === 'digitWord') {
    newText = digit + nonDigit;
  } else if (reorder === 'wordDigit') {
    newText = nonDigit + digit;
  }

  return newText;
}
