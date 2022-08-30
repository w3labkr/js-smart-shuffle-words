import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { indexColumnState } from "@atoms/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [indexColumn, setIndexColumn] = useRecoilState(indexColumnState);

  return (
    <Typography>
      {t("Remove index column:")}
      <Switch
        checked={indexColumn}
        onChange={(e, newValue) => setIndexColumn(newValue)}
      />
    </Typography>
  );
}
