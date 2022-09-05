import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const STORAGE_KEY = 'recoil-persist';
const { persistAtom } = recoilPersist({
  key: STORAGE_KEY, // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

export const storageKeyState = atom({
  key: 'storageKeyState',
  default: STORAGE_KEY,
  effects_UNSTABLE: [persistAtom],
});

export const shuffleTextState = atom({
  key: 'shuffleTextState',
  default: ['Column Name', 'Lorem ipsum dolor sit amet', 'Nullam a sapien id orci'].join('\n'),
  effects_UNSTABLE: [persistAtom],
});

export const previewTextState = atom({
  key: 'previewTextState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const blankListState = atom({
  key: 'blankListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const marketSettingsState = atom({
  key: 'marketSettingsState',
  default: 'Online Marketplace',
  effects_UNSTABLE: [persistAtom],
});

export const settingsTabPanelState = atom({
  key: 'settingsTabPanelState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

/*
General Settings
*/
export const lineTextLengthState = atom({
  key: 'lineTextLengthState',
  default: -1,
  effects_UNSTABLE: [persistAtom],
});

/*
Character Settings
*/
export const startEnabledState = atom({
  key: 'startEnabledState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const startTextState = atom({
  key: 'startTextState',
  default: 'START',
  effects_UNSTABLE: [persistAtom],
});

export const startExcludeFirstLineState = atom({
  key: 'startExcludeFirstLineState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const startHideRandomTextOptionState = atom({
  key: 'startHideRandomTextOptionState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const startUsedRandomCharacterState = atom({
  key: 'startUsedRandomCharacterState',
  default: ['uppercase', 'lowercase', 'digit'],
  effects_UNSTABLE: [persistAtom],
});

export const startLimitRandomTextLengthState = atom({
  key: 'startLimitRandomTextLengthState',
  default: 12,
  effects_UNSTABLE: [persistAtom],
});

export const startReorderRandomTextCharactersState = atom({
  key: 'startReorderRandomTextCharactersState',
  default: 'none',
  effects_UNSTABLE: [persistAtom],
});

export const endEnabledState = atom({
  key: 'endEnabledState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const endTextState = atom({
  key: 'endTextState',
  default: 'END',
  effects_UNSTABLE: [persistAtom],
});

export const endExcludeFirstLineState = atom({
  key: 'endExcludeFirstLineState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const endHideRandomTextOptionState = atom({
  key: 'endHideRandomTextOptionState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const endUsedRandomCharacterState = atom({
  key: 'endUsedRandomCharacterState',
  default: ['uppercase', 'lowercase', 'digit'],
  effects_UNSTABLE: [persistAtom],
});

export const endLimitRandomTextLengthState = atom({
  key: 'endLimitRandomTextLengthState',
  default: 12,
  effects_UNSTABLE: [persistAtom],
});

export const endReorderRandomTextCharactersState = atom({
  key: 'endReorderRandomTextCharactersState',
  default: 'none',
  effects_UNSTABLE: [persistAtom],
});

/*
Stopword Settings
*/
export const specialCharactersState = atom({
  key: 'specialCharactersState',
  default: '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~',
  effects_UNSTABLE: [persistAtom],
});

export const specialCharactersEnabledState = atom({
  key: 'specialCharactersEnabledState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const stopwordsState = atom({
  key: 'stopwordsState',
  default: 'Lorem ipsum',
  effects_UNSTABLE: [persistAtom],
});

export const stopwordsEnabledState = atom({
  key: 'stopwordsEnabledState',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

/*
Import Settings
*/
export const googleSpreadsheetsDataTypeState = atom({
  key: 'googleSpreadsheetsDataTypeState',
  default: 'html',
  effects_UNSTABLE: [persistAtom],
});

export const googleSpreadsheetsPublishURLState = atom({
  key: 'googleSpreadsheetsPublishURLState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const googleSpreadsheetsIDState = atom({
  key: 'googleSpreadsheetsIDState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
