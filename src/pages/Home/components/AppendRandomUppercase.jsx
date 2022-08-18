import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { appendRandomUppercaseState } from "@atoms/main";
import { appendCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const [checked, setChecked] = useRecoilState(appendRandomUppercaseState);
  const disabled = useRecoilValue(appendCompletelyDisabledValue);

  return (
    <FormControlLabel
      label="ABC"
      control={
        <Checkbox
          size="small"
          name="appendRandomUppercase"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      disabled={disabled}
    />
  );
}
