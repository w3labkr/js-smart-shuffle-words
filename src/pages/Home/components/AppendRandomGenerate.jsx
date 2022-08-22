import * as React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "@mui/material/Button";
import {
  appendTextState,
  appendRandomLengthState,
  appendRandomStopWordsState,
} from "@atoms/main";
import {
  appendRandomCharactersValue,
  appendCompletelyDisabledValue,
} from "@selectors/main";
import { generateSafeRandomString } from "@modules/randomText";

export default function AppendRandomGenerate() {
  const { t } = useTranslation();
  const [, setText] = useRecoilState(appendTextState);
  const length = useRecoilValue(appendRandomLengthState);
  const stopWords = useRecoilValue(appendRandomStopWordsState);
  const characters = useRecoilValue(appendRandomCharactersValue);
  const disabled = useRecoilValue(appendCompletelyDisabledValue);

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
