import * as React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { lineTextLengthState } from "@atoms/main";

export default function MyComponent() {
  const { t } = useTranslation();
  const [value, setValue] = useRecoilState(lineTextLengthState);

  return (
    <FormControl>
      <Typography>{t("Select the text length per line:")}</Typography>
      <RadioGroup
        row
        name="lineTextLength"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel value="20" control={<Radio />} label="20" />
        <FormControlLabel
          value="25"
          control={<Radio />}
          label={`25 (${t("Naver Ads")})`}
        />
        <FormControlLabel value="50" control={<Radio />} label="50" />
        <FormControlLabel value="80" control={<Radio />} label="80" />
        <FormControlLabel
          value="100"
          control={<Radio />}
          label={`100 (${t("Auction")}/${t("G-Market")})`}
        />
        <FormControlLabel
          value="-1"
          control={<Radio />}
          label={`100+`}
        />
      </RadioGroup>
    </FormControl>
  );
}
