import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "@mui/system";
import MuiFormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import * as mainState from "@atoms/main";
import * as mainValue from "@selectors/main";

const FormGroup = styled(MuiFormGroup)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: theme.spacing(1),
}));

export default function MyComponent({ choiceState, disabledValue }) {
  const { t } = useTranslation();
  const [characters, setCharacters] = useRecoilState(mainState[choiceState]);
  const disabled = useRecoilValue(mainValue[disabledValue]);

  const handleChange = (e, newValue) => {
    if (newValue) {
      setCharacters([...characters, e.target.value]);
    } else {
      setCharacters(characters.filter((str) => str !== e.target.value));
    }
  };

  return (
    <>
      <Typography>
        {t("Characters to use when creating random text:")}
      </Typography>
      <FormGroup component="legend">
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
          disabled={disabled}
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
          disabled={disabled}
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
          disabled={disabled}
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
          disabled={disabled}
        />
      </FormGroup>
    </>
  );
}
