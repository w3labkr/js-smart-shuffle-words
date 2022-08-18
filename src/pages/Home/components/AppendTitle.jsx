import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { appendTextSwitchState } from "@atoms/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [checked, setChecked] = useRecoilState(appendTextSwitchState);

  return (
    <Typography variant="h6" component="h3">
      {t("append after text")}{" "}
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </Typography>
  );
}
