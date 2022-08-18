import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { prependRandomNumbersState } from "@atoms/main";
import { prependCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const [checked, setChecked] = useRecoilState(prependRandomNumbersState);
  const disabled = useRecoilValue(prependCompletelyDisabledValue);

  return (
    <FormControlLabel
      label="123"
      control={
        <Checkbox
          size="small"
          name="prependRandomNumbers"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      disabled={disabled}
    />
  );
}
