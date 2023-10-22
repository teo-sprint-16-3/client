import { CountryNameType } from "../types/country.ts";

export const isSavedName = (name: string, names: CountryNameType[]) => {
  names.forEach((item) => {
    if (item.name === name) return true;
  });
  return false;
};
