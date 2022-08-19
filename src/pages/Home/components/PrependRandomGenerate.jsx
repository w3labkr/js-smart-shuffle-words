import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "@mui/material/Button";
import {
  prependTextState,
  prependRandomLengthState,
  prependRandomStopWordsState,
} from "@atoms/main";
import {
  prependRandomCharactersValue,
  prependCompletelyDisabledValue,
} from "@selectors/main";
import { generateSafeRandomString } from "@modules/randomText";

export default function MyComponent() {
  const { t } = useTranslation();
  const [, setText] = useRecoilState(prependTextState);
  const characters = useRecoilValue(prependRandomCharactersValue);
  const length = useRecoilValue(prependRandomLengthState);
  const disabled = useRecoilValue(prependCompletelyDisabledValue);
  const stopWords = useRecoilValue(prependRandomStopWordsState);

  const handleClick = (e) => {
    const randomText = generateSafeRandomString(characters, length, stopWords);
    setText(randomText);
  };

  return (
    <Button
      variant="contained"
      size="small"
      onClick={handleClick}
      disabled={disabled}
      sx={{ mb: 1 }}
    >
      {t("Generate Random Text")}
    </Button>
  );
}
