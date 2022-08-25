import * as React from "react";
import { useTranslation } from "react-i18next";
import EnabledAdvancedText from "./EnabledAdvancedText";
import GenerateRandomText from "./GenerateRandomText";
import ChoiceRandomCharacter from "./ChoiceRandomCharacter";
import LimitRandomTextLength from "./LimitRandomTextLength";

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <>
      <EnabledAdvancedText
        textState="endTextState"
        enabledState="enabledEndState"
      >
        {t("End text")}{" "}
      </EnabledAdvancedText>
      <GenerateRandomText
        textState="endTextState"
        choiceState="choiceEndRandomCharacterState"
        lengthState="limitEndRandomTextLengthState"
        enabledState="enabledEndState"
      />
      <ChoiceRandomCharacter
        choiceState="choiceEndRandomCharacterState"
        enabledState="enabledEndState"
      />
      <LimitRandomTextLength
        lengthState="limitEndRandomTextLengthState"
        enabledState="enabledEndState"
      />
    </>
  );
}
