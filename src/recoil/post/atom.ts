import { atom } from "recoil";
import { INote } from "../../types/note.d";

export const noteFormState = atom<INote>({
  key: "noteFormState",
  default: {
    title: "",
    date: {
      startDate: "",
      endDate: "",
    },
    country: { flag: "", name: "" },
    location: "",
    bgm: "",
    images: [],
    description: "",
  },
});
