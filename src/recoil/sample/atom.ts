// sample state의 아톰
import { atom } from "recoil";

export const focusMapState = atom({
  key: "focusMap",
  default: false,
});

export const focusNoteState = atom({
  key: "focusNote",
  default: false,
});

export const focusMyState = atom({
  key: "focusMy",
  default: false,
});
