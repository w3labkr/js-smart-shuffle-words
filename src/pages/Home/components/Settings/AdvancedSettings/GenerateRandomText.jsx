import * as React from "react";
import { useTranslation } from "react-i18next";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";
import * as mainState from "@atoms/main";
import { generateRandomHangul, generateRandomString } from "@modules/randomText";

const Button = styled(MuiButton)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export default function MyComponent({ textState, choiceState, lengthState, enabledState }) {
  const { t } = useTranslation();
  const setText = useSetRecoilState(mainState[textState]);
  const choices = useRecoilValue(mainState[choiceState]);
  const length = useRecoilValue(mainState[lengthState]);
  const enabled = useRecoilValue(mainState[enabledState]);

  const handleClick = (e) => {
    let characters = "";

    if (choices.indexOf("uppercase") !== -1) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (choices.indexOf("lowercase") !== -1) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (choices.indexOf("numbers") !== -1) {
      characters += "1234567890";
    }

    if (choices.indexOf("korean") !== -1) {
      characters += generateRandomHangul(26);
    }

    setText(generateRandomString(characters, length));
  };

  return (
    <Button
      variant="contained"
      size="small"
      onClick={handleClick}
      disabled={!enabled}
    >
      {t("Generate Random Text")}
    </Button>
  );
}
