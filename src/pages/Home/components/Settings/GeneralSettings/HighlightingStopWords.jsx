import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { stopWordsState } from "@atoms/main";
import { generateRandomColorRgb } from "@modules/randomColor";

export default function MyComponent() {
  const { t } = useTranslation();
  const stopWords = useRecoilValue(stopWordsState);
  const [highlightingWords, setHighlightingWords] = useState([]);

  useEffect(() => {
    let words = [];

    if (stopWords.length) {
      stopWords.split(",").forEach((currentvalue, index) => {
        const color = generateRandomColorRgb();
        words.push(
          <Typography key={index} component="span" sx={{ color }}>
            {index !== 0 && ","}
            {currentvalue}
          </Typography>
        );
      });
    } else {
      words = "...";
    }

    setHighlightingWords(words);
  }, [stopWords, setHighlightingWords]);

  return (
    <Stack spacing={1}>
      <Typography>{t("Highlighting stopwords")}</Typography>
      <Typography style={{ wordBreak: "break-all" }}>
        {highlightingWords}
      </Typography>
    </Stack>
  );
}
