import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import EnabledText from './EnabledText';
import GenerateRandomText from './GenerateRandomText';
import UsedRandomCharacter from './UsedRandomCharacter';
import LimitRandomTextLength from './LimitRandomTextLength';
import ReorderRandomTextCharacters from './ReorderRandomTextCharacters';
import { endHideRandomTextOptionState } from '~/store/atoms/main';

export default function EndText() {
  const { t } = useTranslation();
  const hideOption = useRecoilValue(endHideRandomTextOptionState);

  return (
    <>
      <EnabledText
        textState="endTextState"
        enabledState="endEnabledState"
        excludeFirstLineState="endExcludeFirstLineState"
      >
        {t('End text')}{' '}
      </EnabledText>
      <GenerateRandomText
        textState="endTextState"
        choiceState="endUsedRandomCharacterState"
        lengthState="endLimitRandomTextLengthState"
        reorderState="endReorderRandomTextCharactersState"
        disabledValue="endDisabledValue"
        hideOptionState="endHideRandomTextOptionState"
      />
      {!hideOption && (
        <>
          <UsedRandomCharacter choiceState="endUsedRandomCharacterState" disabledValue="endDisabledValue" />
          <LimitRandomTextLength lengthState="endLimitRandomTextLengthState" disabledValue="endDisabledValue" />
          <ReorderRandomTextCharacters
            reorderState="endReorderRandomTextCharactersState"
            disabledValue="endDisabledValue"
          />
        </>
      )}
    </>
  );
}
