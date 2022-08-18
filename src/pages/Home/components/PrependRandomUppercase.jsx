import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { prependRandomUppercaseState } from "@atoms/main";
import { prependCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const [checked, setChecked] = useRecoilState(prependRandomUppercaseState);
  const disabled = useRecoilValue(prependCompletelyDisabledValue);

  return (
    <FormControlLabel
      label="ABC"
      control={
        <Checkbox
          size="small"
          name="prependRandomUppercase"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      disabled={disabled}
    />
  );
}
