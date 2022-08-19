import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import TextField from "@mui/material/TextField";
import { appendTextState, appendTextSwitchState } from "@atoms/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [value, setValue] = useRecoilState(appendTextState);
  const checked = useRecoilValue(appendTextSwitchState);

  return (
    <TextField
      value={value}
      placeholder={t("Please enter text")}
      variant="outlined"
      fullWidth
      sx={{ mb: 1 }}
      onChange={(e) => setValue(e.target.value)}
      disabled={!checked}
    />
  );
}
