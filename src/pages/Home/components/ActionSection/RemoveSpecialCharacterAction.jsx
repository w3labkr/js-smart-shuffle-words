import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { styled } from '@mui/system';
import MuiButton from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { debounce as _debounce } from 'lodash';
import * as mainState from '~/store/atoms/main';

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function UniqueStopwordsAction() {
  const { t } = useTranslation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const setPreviewText = useSetRecoilState(mainState['previewTextState']);
  const states = {
    shuffleText: useRecoilValue(mainState['shuffleTextState']),
    specialCharacters: useRecoilValue(mainState['specialCharactersState']),
    specialCharactersEnabled: useRecoilValue(mainState['specialCharactersEnabledState']),
  };

  const handleClick = _debounce(() => {
    let oldLines = states.shuffleText.replace(/\s+$/, '').replace(/\r\n/g, '\n');
    let newLines = oldLines.split('\n');

    // console.log("특수 문자를 제거하는 중 입니다...");
    newLines = removeSpecialCharacters(newLines, states);

    // console.log("작업이 완료 되었습니다.");
    setPreviewText(newLines.join('\n'));
    setSnackbarOpen(true);
  }, 100);

  return (
    <>
      <Button variant="outlined" size="large" onClick={handleClick}>
        {t('Remove special character')}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{t('Special characters have been removed!')}</Alert>
      </Snackbar>
    </>
  );
}

function removeSpecialCharacters(lines, states) {
  const { specialCharacters, specialCharactersEnabled } = states;

  if (!specialCharactersEnabled) {
    return lines;
  }

  const escapeSpecialCharacters = specialCharacters.replace(/./g, '\\$&');
  const re = new RegExp(`[${escapeSpecialCharacters}]`, 'g');

  for (let i = 0, l = lines.length; i < l; i++) {
    lines[i] = lines[i].replace(re, ' ').replace(/\s+/g, ' ').trim();
  }

  return lines;
}
