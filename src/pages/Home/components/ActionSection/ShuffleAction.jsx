import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { debounce as _debounce } from 'lodash';
import { styled } from '@mui/system';
import MuiButton from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { randomArrayShuffle } from '~/modules/randomText';
import * as mainState from '~/store/atoms/main';

const Button = styled(MuiButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export default function ShuffleAction() {
  const { t } = useTranslation();
  const [snackbar, setSnackbar] = useState({ open: false });
  const setPreviewText = useSetRecoilState(mainState['previewTextState']);
  const states = {
    shuffleText: useRecoilValue(mainState['shuffleTextState']),
    specialCharacters: useRecoilValue(mainState['specialCharactersState']),
    stopwords: useRecoilValue(mainState['stopwordsState']),
    startEnabled: useRecoilValue(mainState['startEnabledState']),
    startText: useRecoilValue(mainState['startTextState']),
    startExcludeFirstLine: useRecoilValue(mainState['startExcludeFirstLineState']),
    endEnabled: useRecoilValue(mainState['endEnabledState']),
    endText: useRecoilValue(mainState['endTextState']),
    endExcludeFirstLine: useRecoilValue(mainState['endExcludeFirstLineState']),
    lineTextLength: useRecoilValue(mainState['lineTextLengthState']),
  };

  const handleClick = _debounce(() => {
    let oldLines = states.shuffleText.replace(/\s+$/, '').replace(/\r\n/g, '\n');
    let newLines = oldLines.split('\n');

    // console.log("특수 문자를 제거하는 중 입니다...");
    newLines = removeSpecialCharacters(newLines, states.specialCharacters);

    // console.log("금칙어를 제거하는 중 입니다...");
    newLines = removeStopwords(newLines, states.stopwords);

    // console.log("단어를 섞는 중 입니다...");
    newLines = shuffleWords(newLines);

    // console.log("시작 및 마지막 문자를 추가하는 중 입니다...");
    newLines = addLineText(newLines, states);

    // console.log("텍스트 길이를 수정 하는 중 입니다...");
    newLines = deleteLineText(newLines, states.lineTextLength);

    // console.log("작업이 완료 되었습니다.");
    setPreviewText(newLines.join('\n'));
    setSnackbar({ open: true });
  }, 100);

  return (
    <>
      <Button variant="contained" size="large" onClick={handleClick}>
        {t('Shuffle')}
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbar.open}
        autoHideDuration={1000}
        onClose={() => setSnackbar({ open: false })}
      >
        <Alert severity="success">{t('Shuffled!')}</Alert>
      </Snackbar>
    </>
  );
}

function removeSpecialCharacters(lines, specialCharacters) {
  const escapeSpecialCharacters = specialCharacters.replace(/./g, '\\$&');
  const re = new RegExp(`[${escapeSpecialCharacters}]`, 'g');

  for (let i = 0, l = lines.length; i < l; i++) {
    lines[i] = lines[i].replace(re, ' ').replace(/\s+/g, ' ').trim();
  }

  return lines;
}

function removeStopwords(lines, stopwords) {
  let stopwordList = stopwords.split(' ');

  for (let idx = 0, len = lines.length; idx < len; idx++) {
    for (let i = 0, l = stopwordList.length; i < l; i++) {
      const re = new RegExp(`\\b${stopwordList[i]}\\b`, 'g');
      if (re.test(lines[idx])) {
        lines[idx] = lines[idx].replace(re, ' ');
      }
    }
    lines[idx] = lines[idx].replace(/\s+/g, ' ').trim();
  }

  return lines;
}

function shuffleWords(lines) {
  for (let i = 0, l = lines.length; i < l; i++) {
    lines[i] = randomArrayShuffle(lines[i].split(' ')).join(' ');
  }

  return lines;
}

function addLineText(lines, states) {
  for (let i = 0, l = lines.length; i < l; i++) {
    let line = lines[i];
    line = addStartLineText(i, line, states);
    line = addEndLineText(i, line, states);
    line = line.replace(/\s+/g, ' ').trim();
    lines[i] = line;
  }

  return lines;
}

function addStartLineText(index, line, states) {
  const { startEnabled, startText, startExcludeFirstLine } = states;

  if (startEnabled) {
    if (startExcludeFirstLine) {
      if (index === 0) {
        // ...
      } else {
        line = line.replace(/^/, startText + ' ');
      }
    } else {
      line = line.replace(/^/, startText + ' ');
    }
  }

  return line;
}

function addEndLineText(index, line, states) {
  const { endEnabled, endText, endExcludeFirstLine } = states;

  if (endEnabled) {
    if (endExcludeFirstLine) {
      if (index === 0) {
        // ...
      } else {
        line = line.replace(/$/, ' ' + endText);
      }
    } else {
      line = line.replace(/$/, ' ' + endText);
    }
  }

  return line;
}

function deleteLineText(lines, length) {
  if (length === -1) {
    return lines;
  }

  for (let i = 0, l = lines.length; i < l; i++) {
    lines[i] = lines[i].slice(0, length);
  }

  return lines;
}
