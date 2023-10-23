export interface INote {
  title: string;
  date: {
    startDate: string;
    endDate: string;
  };
  // country: { flag: string; name: string };
  country: {
    id: string;
    properties: {
      name: string;
      korName: string;
    };
  };
  location?: string;
  bgm?: string;
  images?: string[];
  description?: string;
}
