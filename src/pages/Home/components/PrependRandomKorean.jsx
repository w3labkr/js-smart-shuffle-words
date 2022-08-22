import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { prependRandomKoreanState } from "@atoms/main";
import { prependCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const [checked, setChecked] = useRecoilState(prependRandomKoreanState);
  const disabled = useRecoilValue(prependCompletelyDisabledValue);

  return (
    <FormControlLabel
      label="가나다"
      control={
        <Checkbox
          size="small"
          name="prependRandomKorean"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      disabled={disabled}
    />
  );
}
