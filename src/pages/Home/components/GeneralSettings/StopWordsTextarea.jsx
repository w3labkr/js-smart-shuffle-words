import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { stopWordsState } from "@atoms/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [defaultValue, setDefaultValue] = useRecoilState(stopWordsState);

  return (
    <Stack spacing={1}>
      <Typography>{t("Enter the stopwords to be removed")}</Typography>
      <TextField
        multiline
        fullWidth
        rows={4}
        defaultValue={defaultValue}
        aria-labelledby="stop-words"
        variant="outlined"
        placeholder={t("Please enter text")}
        helperText={t("Seperated by comma")}
        onChange={(e) => setDefaultValue(e.target.value)}
      />
    </Stack>
  );
}
