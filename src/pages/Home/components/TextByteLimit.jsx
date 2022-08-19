import React from "react";
import { useTranslation } from "react-i18next";
// import { useRecoilValue } from "recoil";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <FormControl>
      <FormLabel id="limit-text-bytes-radio-group">{t("limit text bytes per line")}</FormLabel>
      <RadioGroup
        row
        name="byte"
        defaultValue="20"
        aria-labelledby="limit-text-bytes-radio-group"
      >
        <FormControlLabel value="20" control={<Radio />} label="20" />
        <FormControlLabel
          value="25"
          control={<Radio />}
          label={`25 (${t("Naver Ads")})`}
        />
        <FormControlLabel
          value="50"
          control={<Radio />}
          label={`50 (${t("Auction")}/${t("G-Market")})`}
        />
        <FormControlLabel value="80" control={<Radio />} label="80" />
        <FormControlLabel value="100" control={<Radio />} label="100" />
      </RadioGroup>
    </FormControl>
  );
}
