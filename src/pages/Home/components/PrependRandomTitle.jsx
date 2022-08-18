import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import {
  prependRandomSwitchState,
  prependTextSwitchState,
} from "@atoms/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [checked, setChecked] = useRecoilState(prependRandomSwitchState);
  const enabled = useRecoilValue(prependTextSwitchState);

  return (
    <Divider sx={{ fontWeight: "700" }}>
      {t("random text")}
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        disabled={!enabled}
      />
    </Divider>
  );
}
