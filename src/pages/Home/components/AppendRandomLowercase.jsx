import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { appendRandomLowercaseState } from "@atoms/main";
import { appendCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const [checked, setChecked] = useRecoilState(appendRandomLowercaseState);
  const disabled = useRecoilValue(appendCompletelyDisabledValue);

  return (
    <FormControlLabel
      label="abc"
      control={
        <Checkbox
          size="small"
          name="appendRandomLowercase"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      disabled={disabled}
    />
  );
}
