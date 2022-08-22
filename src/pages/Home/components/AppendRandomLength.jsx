import * as React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { appendRandomLengthState } from "@atoms/main";
import { appendCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [value, setValue] = useRecoilState(appendRandomLengthState);
  const disabled = useRecoilValue(appendCompletelyDisabledValue);

  return (
    <>
      <Typography>
        {t("Length")}: {value}
      </Typography>
      <Slider
        value={value}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={0}
        max={24}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
    </>
  );
}
