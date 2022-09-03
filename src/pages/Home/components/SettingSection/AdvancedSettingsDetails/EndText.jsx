import { useTranslation } from 'react-i18next';
import EnabledAdvancedText from './EnabledAdvancedText';
import GenerateRandomText from './GenerateRandomText';
import ChoiceRandomCharacter from './ChoiceRandomCharacter';
import LimitRandomTextLength from './LimitRandomTextLength';
import ReorderRandomTextCharacters from './ReorderRandomTextCharacters';

export default function EndText() {
  const { t } = useTranslation();

  return (
    <>
      <EnabledAdvancedText
        textState="endTextState"
        enabledState="endEnabledState"
        excludeFirstLineState="endExcludeFirstLineState"
      >
        {t('End text')}{' '}
      </EnabledAdvancedText>
      <GenerateRandomText
        textState="endTextState"
        choiceState="endChoiceRandomCharacterState"
        lengthState="endLimitRandomTextLengthState"
        reorderState="endReorderRandomTextCharactersState"
        disabledValue="endDisabledValue"
      />
      <ChoiceRandomCharacter choiceState="endChoiceRandomCharacterState" disabledValue="endDisabledValue" />
      <LimitRandomTextLength lengthState="endLimitRandomTextLengthState" disabledValue="endDisabledValue" />
      <ReorderRandomTextCharacters
        reorderState="endReorderRandomTextCharactersState"
        disabledValue="endDisabledValue"
      />
    </>
  );
}
