import { selector } from "recoil";
import * as mainState from "@atoms/main";

export const startDisabledValue = selector({
  key: "startDisabledValue",
  get: ({ get }) => {
    return !get(mainState["startEnabledState"]);
  },
});

export const endDisabledValue = selector({
  key: "endDisabledValue",
  get: ({ get }) => {
    return !get(mainState["endEnabledState"]);
  },
});
