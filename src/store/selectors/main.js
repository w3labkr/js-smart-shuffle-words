import { selector } from "recoil";
import * as state from "@atoms/main";
import { generateRandomHangul } from "@modules/randomText";

export const prependCompletelyDisabledValue = selector({
  key: "prependCompletelyDisabledValue",
  get: ({ get }) => {
    return !get(state.prependTextSwitchState) || !get(state.prependRandomSwitchState);
  },
});

export const prependRandomCharactersValue = selector({
  key: "prependRandomCharactersValue",
  get: ({ get }) => {
    let characters = '';

    if (get(state.prependRandomUppercaseState)) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (get(state.prependRandomLowercaseState)) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (get(state.prependRandomNumbersState)) {
      characters += "1234567890";
    }

    if (get(state.prependRandomKoreanState)) {
      characters += generateRandomHangul(26);
    }

    return characters;
  },
});

export const appendCompletelyDisabledValue = selector({
  key: "appendCompletelyDisabledValue",
  get: ({ get }) => {
    return !get(state.appendTextSwitchState) || !get(state.appendRandomSwitchState);
  },
});

export const appendRandomCharactersValue = selector({
  key: "appendRandomCharactersValue",
  get: ({ get }) => {
    let characters = '';

    if (get(state.prependRandomUppercaseState)) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (get(state.prependRandomLowercaseState)) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (get(state.prependRandomNumbersState)) {
      characters += "1234567890";
    }

    if (get(state.prependRandomKoreanState)) {
      characters += generateRandomHangul(26);
    }

    return characters;
  },
});
