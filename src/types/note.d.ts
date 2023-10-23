export interface INote {
  title: string;
  date: {
    startDate: string;
    endDate: string;
  };
  country: { flag: string; name: string };
  location?: string;
  bgm?: string;
  images?: string[];
  description?: string;
}
