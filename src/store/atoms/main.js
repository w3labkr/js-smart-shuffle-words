import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

export const shuffleTextState = atom({
  key: "shuffleTextState",
  default: [
    "Column Name",
    "Lorem ipsum dolor sit amet",
    "Nullam a sapien id orci",
  ].join('\n'),
  effects_UNSTABLE: [persistAtom],
});

export const previewTextState = atom({
  key: "previewTextState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const consoleTextState = atom({
  key: "consoleTextState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const marketSettingsState = atom({
  key: "marketSettingsState",
  default: "General",
  effects_UNSTABLE: [persistAtom],
});

export const settingsExpandedPanelState = atom({
  key: "settingsExpandedPanelState",
  default: "panel1",
  effects_UNSTABLE: [persistAtom],
});

/*
General Settings
*/
export const indexColumnState = atom({
  key: "indexColumnState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const lineTextLengthState = atom({
  key: "lineTextLengthState",
  default: -1,
  effects_UNSTABLE: [persistAtom],
});

export const specialCharactersState = atom({
  key: "specialCharactersState",
  default: "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  effects_UNSTABLE: [persistAtom],
});

export const stopWordsState = atom({
  key: "stopWordsState",
  default: "Lorem ipsum",
  effects_UNSTABLE: [persistAtom],
});

/*
Advanced Settings
*/
export const startEnabledState = atom({
  key: "startEnabledState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const startTextState = atom({
  key: "startTextState",
  default: "START",
  effects_UNSTABLE: [persistAtom],
});

export const startChoiceRandomCharacterState = atom({
  key: "startChoiceRandomCharacterState",
  default: ['uppercase','lowercase','numbers'],
  effects_UNSTABLE: [persistAtom],
});

export const startLimitRandomTextLengthState = atom({
  key: "startLimitRandomTextLengthState",
  default: 12,
  effects_UNSTABLE: [persistAtom],
});

export const endEnabledState = atom({
  key: "endEnabledState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const endTextState = atom({
  key: "endTextState",
  default: "END",
  effects_UNSTABLE: [persistAtom],
});

export const endChoiceRandomCharacterState = atom({
  key: "endChoiceRandomCharacterState",
  default: ['uppercase','lowercase','numbers'],
  effects_UNSTABLE: [persistAtom],
});

export const endLimitRandomTextLengthState = atom({
  key: "endLimitRandomTextLengthState",
  default: 12,
  effects_UNSTABLE: [persistAtom],
});
