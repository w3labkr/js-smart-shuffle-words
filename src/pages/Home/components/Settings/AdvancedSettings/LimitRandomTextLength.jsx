import * as React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import * as mainState from "@atoms/main";

export default function MyComponent({ lengthState, enabledState }) {
  const { t } = useTranslation();
  const [length, setLength] = useRecoilState(mainState[lengthState]);
  const enabled = useRecoilValue(mainState[enabledState]);

  return (
    <>
      <Typography>
        {t("Length of random text generated:")} {length}
      </Typography>
      <Slider
        value={length}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={0}
        max={24}
        onChange={(e) => setLength(e.target.value)}
        disabled={!enabled}
      />
    </>
  );
}
