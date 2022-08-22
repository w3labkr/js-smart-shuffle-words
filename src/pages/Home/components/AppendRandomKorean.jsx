import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { appendRandomKoreanState } from "@atoms/main";
import { appendCompletelyDisabledValue } from "@selectors/main";

export default function MyComponent() {
  const [checked, setChecked] = useRecoilState(appendRandomKoreanState);
  const disabled = useRecoilValue(appendCompletelyDisabledValue);

  return (
    <FormControlLabel
      label="가나다"
      control={
        <Checkbox
          size="small"
          name="appendRandomKorean"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      disabled={disabled}
    />
  );
}
