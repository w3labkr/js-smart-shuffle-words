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
        textState="startTextState"
        enabledState="enabledStartState"
      >
        {t("Start text")}{" "}
      </EnabledAdvancedText>
      <GenerateRandomText
        textState="startTextState"
        choiceState="choiceStartRandomCharacterState"
        lengthState="limitStartRandomTextLengthState"
        enabledState="enabledStartState"
      />
      <ChoiceRandomCharacter
        choiceState="choiceStartRandomCharacterState"
        enabledState="enabledStartState"
      />
      <LimitRandomTextLength
        lengthState="limitStartRandomTextLengthState"
        enabledState="enabledStartState"
      />
    </>
  );
}
