import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import * as mainState from '~/store/atoms/main';
import { styled } from '@mui/system';
import MuiButton from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { debounce } from 'lodash';
import { randomArrayShuffle } from '~/modules/randomText';

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function ShuffleAction() {
  const { t } = useTranslation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const setPreviewText = useSetRecoilState(mainState['previewTextState']);
  const shuffleText = useRecoilValue(mainState['shuffleTextState']);
  const specialCharacters = useRecoilValue(mainState['specialCharactersState']);
  const stopWords = useRecoilValue(mainState['stopWordsState']);
  const startText = useRecoilValue(mainState['startTextState']);
  const startEnabled = useRecoilValue(mainState['startEnabledState']);
  const endText = useRecoilValue(mainState['endTextState']);
  const endEnabled = useRecoilValue(mainState['endEnabledState']);
  const lineTextLength = useRecoilValue(mainState['lineTextLengthState']);
  const indexColumn = useRecoilValue(mainState['indexColumnState']);

  const handleClick = debounce(() => {
    let oldLines = shuffleText.replace(/\s+$/, '').replace(/\r\n/g, '\n');
    let newLines = oldLines.split('\n');

    // console.log("인덱스 열을 제거하는 중 입니다...");
    newLines = removeIndexColumn(newLines, indexColumn);

    // console.log("특수 문자를 제거하는 중 입니다...");
    newLines = removeSpecialCharacters(newLines, specialCharacters);

    // console.log("금칙어를 제거하는 중 입니다...");
    newLines = removeStopWords(newLines, stopWords);

    // console.log("단어를 섞는 중 입니다...");
    newLines = shuffleWords(newLines);

    // console.log("시작 및 마지막 문자를 추가하는 중 입니다...");
    newLines = addLineText(newLines, startEnabled, startText, endEnabled, endText);

    // console.log("텍스트 길이를 수정 하는 중 입니다...");
    newLines = deleteLineText(newLines, lineTextLength);

    // console.log("작업이 완료 되었습니다.");
    setPreviewText(newLines.join('\n'));
    setSnackbarOpen(true);
  }, 100);

  return (
    <>
      <Button variant="contained" size="large" onClick={handleClick}>
        {t('Shuffle')}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success">{t('Shuffled!')}</Alert>
      </Snackbar>
    </>
  );
}

function removeIndexColumn(oldLines, indexColumn) {
  let newLines = oldLines;

  if (indexColumn) {
    newLines.shift();
  }

  return newLines;
}

function removeSpecialCharacters(oldLines, specialCharacters) {
  const escapeSpecialCharacters = specialCharacters.replace(/./g, '\\$&');
  const re = new RegExp(`[${escapeSpecialCharacters}]`, 'g');

  let newLines = oldLines;

  for (let i = 0, l = newLines.length; i < l; i++) {
    newLines[i] = newLines[i].replace(re, ' ').replace(/\s+/g, ' ').trim();
  }

  return newLines;
}

function removeStopWords(oldLines, stopWords) {
  let stopWordList = stopWords.split(' ');
  let newLines = oldLines;

  for (let idx = 0, len = newLines.length; idx < len; idx++) {
    for (let i = 0, l = stopWordList.length; i < l; i++) {
      if (newLines[idx].indexOf(stopWordList[i]) !== -1) {
        newLines[idx] = newLines[idx].replace(stopWordList[i], ' ');
      }
    }
    newLines[idx] = newLines[idx].replace(/\s+/g, ' ').trim();
  }

  return newLines;
}

function shuffleWords(oldLines) {
  let newLines = oldLines;

  for (let i = 0, l = newLines.length; i < l; i++) {
    newLines[i] = randomArrayShuffle(newLines[i].split(' ')).join(' ');
  }

  return newLines;
}

function addLineText(oldLines, startEnabled, startText, endEnabled, endText) {
  let newLines = oldLines;

  for (let i = 0, l = newLines.length; i < l; i++) {
    if (startEnabled) {
      newLines[i] = newLines[i].replace(/^/, startText + ' ');
    }
    if (endEnabled) {
      newLines[i] = newLines[i].replace(/$/, ' ' + endText);
    }
    newLines[i] = newLines[i].replace(/\s+/g, ' ').trim();
  }

  return newLines;
}

function deleteLineText(oldLines, length) {
  let newLines = oldLines;

  if (length === -1) {
    return newLines;
  }

  for (let i = 0, l = newLines.length; i < l; i++) {
    newLines[i] = newLines[i].slice(0, length);
  }

  return newLines;
}
