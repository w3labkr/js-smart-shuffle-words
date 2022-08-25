import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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

export const enabledStartState = atom({
  key: "enabledStartState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const startTextState = atom({
  key: "startTextState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const choiceStartRandomCharacterState = atom({
  key: "choiceStartRandomCharacterState",
  default: ['uppercase','lowercase','numbers'],
  effects_UNSTABLE: [persistAtom],
});

export const limitStartRandomTextLengthState = atom({
  key: "limitStartRandomTextLengthState",
  default: 12,
  effects_UNSTABLE: [persistAtom],
});

export const enabledEndState = atom({
  key: "enabledEndState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const endTextState = atom({
  key: "endTextState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const choiceEndRandomCharacterState = atom({
  key: "choiceEndRandomCharacterState",
  default: ['uppercase','lowercase','numbers'],
  effects_UNSTABLE: [persistAtom],
});

export const limitEndRandomTextLengthState = atom({
  key: "limitEndRandomTextLengthState",
  default: 12,
  effects_UNSTABLE: [persistAtom],
});
