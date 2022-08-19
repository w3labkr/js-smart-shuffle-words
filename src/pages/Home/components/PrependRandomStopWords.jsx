import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { prependRandomStopWordsState } from "@atoms/main";
import { prependCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [defaultValue, setDefaultValue] = useRecoilState(prependRandomStopWordsState);
  const disabled = useRecoilValue(prependCompletelyDisabledValue);

  return (
    <Fragment>
      <Typography sx={{ mb: 1 }}>{t("Stop Words")}:</Typography>
      <TextField
        multiline
        fullWidth
        rows={4}
        defaultValue={defaultValue}
        variant="outlined"
        placeholder={t("Please enter text")}
        helperText={t("Seperated by comma")}
        onChange={(e) => setDefaultValue(e.target.value)}
        disabled={disabled}
      />
    </Fragment>
  );
}
