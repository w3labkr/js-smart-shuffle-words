import * as React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function CharactersLength() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Typography>
        {t("characters length")}: 10
      </Typography>
      <Slider
        defaultValue={10}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={0}
        max={20}
      />
    </React.Fragment>
  );
}
