import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import * as mainState from "@atoms/main";

export default function MyComponent({ choiceState, enabledState }) {
  const { t } = useTranslation();
  const [characters, setCharacters] = useRecoilState(
    mainState[choiceState]
  );
  const enabled = useRecoilValue(mainState[enabledState]);

  const handleChange = (e, newValue) => {
    if (newValue) {
      setCharacters([...characters, e.target.value])
    } else {
      setCharacters(characters.filter(str => str !== e.target.value));
    }
  };
  
  return (
    <>
      <Typography>
        {t("Characters to use when creating random text:")}
      </Typography>
      <FormGroup
        component="legend"
        sx={{ display: "flex", flexDirection: "row", mb: 1 }}
      >
        <FormControlLabel
          label="ABC"
          control={
            <Checkbox
              size="small"
              name={choiceState}
              value="uppercase"
              checked={characters.indexOf("uppercase") !== -1}
              onChange={handleChange}
            />
          }
          disabled={!enabled}
        />
        <FormControlLabel
          label="abc"
          control={
            <Checkbox
              size="small"
              name={choiceState}
              value="lowercase"
              checked={characters.indexOf("lowercase") !== -1}
              onChange={handleChange}
            />
          }
          disabled={!enabled}
        />
        <FormControlLabel
          label="123"
          control={
            <Checkbox
              size="small"
              name={choiceState}
              value="numbers"
              checked={characters.indexOf("numbers") !== -1}
              onChange={handleChange}
            />
          }
          disabled={!enabled}
        />
        <FormControlLabel
          label="가나다"
          control={
            <Checkbox
              size="small"
              name={choiceState}
              value="korean"
              checked={characters.indexOf("korean") !== -1}
              onChange={handleChange}
            />
          }
          disabled={!enabled}
        />
      </FormGroup>
    </>
  );
}
