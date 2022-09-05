import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { generateRandomColorRgb } from '~/modules/randomColor';
import { stopwordsState } from '~/store/atoms/main';

export default function HighlightStopwords() {
  const { t } = useTranslation();
  const stopwords = useRecoilValue(stopwordsState);
  const [highlightWords, setHighlightWords] = useState([]);

  useEffect(() => {
    let words = [];

    if (stopwords.trim().length) {
      stopwords.split(' ').forEach((currentvalue, index) => {
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
  }, [stopwords, setHighlightWords]);

  return (
    <Stack spacing={1}>
      <Typography>{t('Highlighting stopwords')}</Typography>
      <Typography style={{ wordBreak: 'break-all' }}>{highlightWords}</Typography>
    </Stack>
  );
}
