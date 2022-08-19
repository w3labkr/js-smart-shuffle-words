import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { prependRandomStopWordsState } from "@atoms/main";
import { prependCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [defaultValue, setDefaultValue] = useRecoilState(prependRandomStopWordsState);
  const disabled = useRecoilValue(prependCompletelyDisabledValue);

  return (
    <FormControl>
      <FormLabel id="limit-text-bytes-radio-group">{t("Stop Words")}</FormLabel>
      <TextField
        multiline
        fullWidth
        rows={4}
        defaultValue={defaultValue}
        aria-labelledby="limit-text-bytes-radio-group"
        variant="outlined"
        placeholder={t("Please enter text")}
        helperText={t("Seperated by comma")}
        onChange={(e) => setDefaultValue(e.target.value)}
        disabled={disabled}
      />
    </FormControl>
  );
}
