import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import {
  appendRandomSwitchState,
  appendTextSwitchState,
} from "@atoms/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [checked, setChecked] = useRecoilState(appendRandomSwitchState);
  const enabled = useRecoilValue(appendTextSwitchState);

  return (
    <Divider sx={{ fontWeight: "700" }}>
      {t("Random Text")}
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        disabled={!enabled}
      />
    </Divider>
  );
}
