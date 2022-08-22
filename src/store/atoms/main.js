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

export const prependTextState = atom({
  key: "prependTextState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const prependTextSwitchState = atom({
  key: "prependTextSwitchState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const prependRandomSwitchState = atom({
  key: "prependRandomSwitchState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const prependRandomUppercaseState = atom({
  key: "prependRandomUppercaseState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const prependRandomLowercaseState = atom({
  key: "prependRandomLowercaseState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const prependRandomNumbersState = atom({
  key: "prependRandomNumbersState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const prependRandomKoreanState = atom({
  key: "prependRandomKoreanState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const prependRandomLengthState = atom({
  key: "prependRandomLengthState",
  default: 12,
  effects_UNSTABLE: [persistAtom],
});

export const prependRandomStopWordsState = atom({
  key: "prependRandomStopWordsState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const appendTextState = atom({
  key: "appendTextState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const appendTextSwitchState = atom({
  key: "appendTextSwitchState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const appendRandomSwitchState = atom({
  key: "appendRandomSwitchState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const appendRandomUppercaseState = atom({
  key: "appendRandomUppercaseState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const appendRandomLowercaseState = atom({
  key: "appendRandomLowercaseState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const appendRandomNumbersState = atom({
  key: "appendRandomNumbersState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const appendRandomKoreanState = atom({
  key: "appendRandomKoreanState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const appendRandomLengthState = atom({
  key: "appendRandomLengthState",
  default: 12,
  effects_UNSTABLE: [persistAtom],
});

export const appendRandomStopWordsState = atom({
  key: "appendRandomStopWordsState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
