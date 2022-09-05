import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import EnabledText from './EnabledText';
import GenerateRandomText from './GenerateRandomText';
import UsedRandomCharacter from './UsedRandomCharacter';
import LimitRandomTextLength from './LimitRandomTextLength';
import ReorderRandomTextCharacters from './ReorderRandomTextCharacters';
import { startHideRandomTextOptionState } from '~/store/atoms/main';

export default function StartText() {
  const { t } = useTranslation();
  const hideOption = useRecoilValue(startHideRandomTextOptionState);

  return (
    <>
      <EnabledText
        textState="startTextState"
        enabledState="startEnabledState"
        excludeFirstLineState="startExcludeFirstLineState"
      >
        {t('Start text')}{' '}
      </EnabledText>
      <GenerateRandomText
        textState="startTextState"
        choiceState="startUsedRandomCharacterState"
        lengthState="startLimitRandomTextLengthState"
        reorderState="startReorderRandomTextCharactersState"
        disabledValue="startDisabledValue"
        hideOptionState="startHideRandomTextOptionState"
      />
      {!hideOption && (
        <>
          <UsedRandomCharacter choiceState="startUsedRandomCharacterState" disabledValue="startDisabledValue" />
          <LimitRandomTextLength lengthState="startLimitRandomTextLengthState" disabledValue="startDisabledValue" />
          <ReorderRandomTextCharacters
            reorderState="startReorderRandomTextCharactersState"
            disabledValue="startDisabledValue"
          />
        </>
      )}
    </>
  );
}
