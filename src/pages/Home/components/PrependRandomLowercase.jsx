import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { prependRandomLowercaseState } from "@atoms/main";
import { prependCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const [checked, setChecked] = useRecoilState(prependRandomLowercaseState);
  const disabled = useRecoilValue(prependCompletelyDisabledValue);

  return (
    <FormControlLabel
      label="abc"
      control={
        <Checkbox
          size="small"
          name="prependRandomLowercase"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      disabled={disabled}
    />
  );
}
