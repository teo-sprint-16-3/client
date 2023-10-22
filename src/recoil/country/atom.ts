import { atom } from "recoil";
import { CountryNameType } from "../../types/country.ts";

export const countryNameState = atom<CountryNameType[]>({
  key: "countryNameState",
  default: [],
});
