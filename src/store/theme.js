import { atom } from "recoil";

export const modeState = atom({
  key: "modeState",
  default: "light",
});

export const languageState = atom({
  key: "languageState",
  default: "ko",
});
