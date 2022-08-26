import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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

export const stopWordsState = atom({
  key: "stopWordsState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const limitTextBytesState = atom({
  key: "limitTextBytesState",
  default: 20,
  effects_UNSTABLE: [persistAtom],
});

export const startEnabledState = atom({
  key: "startEnabledState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const startTextState = atom({
  key: "startTextState",
  default: "",
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
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const endTextState = atom({
  key: "endTextState",
  default: "",
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
