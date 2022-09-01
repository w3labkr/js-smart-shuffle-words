import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const themeColorModeState = atom({
  key: 'themeColorModeState',
  default: 'light',
  effects_UNSTABLE: [persistAtom],
});

export const themeLanguageState = atom({
  key: 'themeLanguageState',
  default: 'ko',
});
