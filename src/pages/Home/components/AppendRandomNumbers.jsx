import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { appendRandomNumbersState } from "@atoms/main";
import { appendCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const [checked, setChecked] = useRecoilState(appendRandomNumbersState);
  const disabled = useRecoilValue(appendCompletelyDisabledValue);

  return (
    <FormControlLabel
      label="123"
      control={
        <Checkbox
          size="small"
          name="appendRandomNumbers"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      disabled={disabled}
    />
  );
}
