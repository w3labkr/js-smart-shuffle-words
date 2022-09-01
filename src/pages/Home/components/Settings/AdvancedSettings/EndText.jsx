import { useTranslation } from 'react-i18next';
import EnabledAdvancedText from './EnabledAdvancedText';
import GenerateRandomText from './GenerateRandomText';
import ChoiceRandomCharacter from './ChoiceRandomCharacter';
import LimitRandomTextLength from './LimitRandomTextLength';

export default function EndText() {
  const { t } = useTranslation();

  return (
    <>
      <EnabledAdvancedText textState="endTextState" enabledState="endEnabledState">
        {t('End text')}{' '}
      </EnabledAdvancedText>
      <GenerateRandomText
        textState="endTextState"
        choiceState="endChoiceRandomCharacterState"
        lengthState="endLimitRandomTextLengthState"
        disabledValue="endDisabledValue"
      />
      <ChoiceRandomCharacter choiceState="endChoiceRandomCharacterState" disabledValue="endDisabledValue" />
      <LimitRandomTextLength lengthState="endLimitRandomTextLengthState" disabledValue="endDisabledValue" />
    </>
  );
}
