import { useTranslation } from 'react-i18next';
import EnabledAdvancedText from './EnabledAdvancedText';
import GenerateRandomText from './GenerateRandomText';
import ChoiceRandomCharacter from './ChoiceRandomCharacter';
import LimitRandomTextLength from './LimitRandomTextLength';
import ReorderRandomTextCharacters from './ReorderRandomTextCharacters';

export default function StartText() {
  const { t } = useTranslation();

  return (
    <>
      <EnabledAdvancedText textState="startTextState" enabledState="startEnabledState">
        {t('Start text')}{' '}
      </EnabledAdvancedText>
      <GenerateRandomText
        textState="startTextState"
        choiceState="startChoiceRandomCharacterState"
        lengthState="startLimitRandomTextLengthState"
        reorderState="startReorderRandomTextCharactersState"
        disabledValue="startDisabledValue"
      />
      <ChoiceRandomCharacter choiceState="startChoiceRandomCharacterState" disabledValue="startDisabledValue" />
      <LimitRandomTextLength lengthState="startLimitRandomTextLengthState" disabledValue="startDisabledValue" />
      <ReorderRandomTextCharacters
        reorderState="startReorderRandomTextCharactersState"
        disabledValue="startDisabledValue"
      />
    </>
  );
}
