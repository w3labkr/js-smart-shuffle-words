import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { stopWordsState } from '~/store/atoms/main';
import { generateRandomColorRgb } from '~/modules/randomColor';

export default function HighlightStopWords() {
  const { t } = useTranslation();
  const stopWords = useRecoilValue(stopWordsState);
  const [highlightWords, setHighlightWords] = useState([]);

  useMemo(() => {
    let words = [];

    if (stopWords.trim().length) {
      stopWords.split(' ').forEach((currentvalue, index) => {
        const color = generateRandomColorRgb();
        words.push(
          <Typography key={index} component="span" sx={{ color }}>
            {index !== 0 && ' '}
            {currentvalue}
          </Typography>
        );
      });
    } else {
      words = '...';
    }

    setHighlightWords(words);
  }, [stopWords, setHighlightWords]);

  return (
    <Stack spacing={1}>
      <Typography>{t('Highlighting stopwords')}</Typography>
      <Typography style={{ wordBreak: 'break-all' }}>{highlightWords}</Typography>
    </Stack>
  );
}
