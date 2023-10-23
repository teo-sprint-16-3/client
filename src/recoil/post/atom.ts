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
    // country: { flag: "", name: "" },
    country: {
      id: "string",
      properties: {
        name: "string",
        korName: "string",
      },
    },
    location: "",
    bgm: "",
    images: [],
    description: "",
  },
});
