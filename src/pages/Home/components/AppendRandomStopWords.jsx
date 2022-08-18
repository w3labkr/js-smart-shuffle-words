import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { appendRandomStopWordsState } from "@atoms/main";
import { appendCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [defaultValue, setDefaultValue] = useRecoilState(appendRandomStopWordsState);
  const disabled = useRecoilValue(appendCompletelyDisabledValue);

  return (
    <Fragment>
      <Typography sx={{ mb: 1 }}>{t("stop words")}:</Typography>
      <TextField
        multiline
        fullWidth
        rows={4}
        defaultValue={defaultValue}
        variant="outlined"
        placeholder={t("please enter text")}
        helperText={t("seperated by comma")}
        onChange={(e) => setDefaultValue(e.target.value)}
        disabled={disabled}
      />
    </Fragment>
  );
}
