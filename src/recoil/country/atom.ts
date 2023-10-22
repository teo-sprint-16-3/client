import { atom } from "recoil";
import { CountryNameType } from "../../types/country.ts";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const countryNameState = atom<CountryNameType[]>({
  key: "countryNameState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
