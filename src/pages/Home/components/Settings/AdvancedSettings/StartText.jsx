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
        enabledState="startEnabledState"
      >
        {t("Start text")}{" "}
      </EnabledAdvancedText>
      <GenerateRandomText
        textState="startTextState"
        choiceState="startChoiceRandomCharacterState"
        lengthState="startLimitRandomTextLengthState"
        enabledState="startEnabledState"
      />
      <ChoiceRandomCharacter
        choiceState="startChoiceRandomCharacterState"
        enabledState="startEnabledState"
      />
      <LimitRandomTextLength
        lengthState="startLimitRandomTextLengthState"
        enabledState="startEnabledState"
      />
    </>
  );
}
