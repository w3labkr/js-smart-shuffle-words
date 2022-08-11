import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function StopWords() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Typography sx={{ mb: 1 }}>
        {t("stop words")}: 
      </Typography>
      <TextField
        multiline
        fullWidth
        rows={4}
        variant="outlined"
        placeholder={t("please enter text")}
        helperText={t("seperated by comma")}
      />
    </React.Fragment>
  );
}
