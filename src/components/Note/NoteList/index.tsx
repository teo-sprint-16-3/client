import { useState, useEffect } from "react";

import { NoteSummary } from "./NoteSummary";
import { CountrySummary } from "./CountrySummary";
import { YearSummary } from "./YearSummary";
import Popup from "../../common/Popup";

import s from "./index.module.scss";

interface Props {
  category: string;
  sortingOrder: string;
  params?: string;
  filter?: string;
}

// 이거 NoteSummary의 Props와 type 겹치는데 원래는 별도의 types 폴더에 빼는게 좋음
// 지금은 시간이 없으므로 그냥 함
interface DataProps {
  year: number;
  country: string;
  flag: string;
  title: string;
  date: string;
  location?: string;
  bgm?: string;
  image?: string;
}

interface CountryDataProps {
  flag: string;
  name: string;
  count: number;
}

interface YearDataProps {
  year: number;
  flags: string[];
  count: number;
}

const mockData = [
  {
    year: 2023,
    country: "몽골",
    flag: "/src/assets/countryFlags/Mongolia.svg",
    title: "몽골 8일차🐴 말타고 초원 달린 날",
    date: "2023.07.15",
    location: "욜링암 협곡 사이",
    bgm: "BOL4 - TRAVEL",
    image: "/src/assets/images/note1.png",
  },
  {
    year: 2023,
    country: "몽골",
    flag: "/src/assets/countryFlags/Mongolia.svg",
    title: "몽골 강아지들 진짜 귀엽다🐕 왕크왕귀",
    date: "2023.07.14",
    image: "/src/assets/images/note1.png",
  },
  {
    year: 2023,
    country: "대한민국",
    flag: "/src/assets/countryFlags/South Korea.svg",
    title: "넘넘 즐거웠던 경주여행 3",
    date: "2022.05.08-2023.05.15",
  },
];

const countryMockData = [
  {
    flag: "/src/assets/countryFlags/Mongolia.svg",
    name: "몽골",
    count: 13,
  },
  {
    flag: "/src/assets/countryFlags/Uzbekistan.svg",
    name: "우즈베키스탄",
    count: 9,
  },
  {
    flag: "/src/assets/countryFlags/United States.svg",
    name: "미국",
    count: 6,
  },
  {
    flag: "/src/assets/countryFlags/Canada.svg",
    name: "캐나다",
    count: 3,
  },
];

const yearMockData = [
  {
    year: 2023,
    flags: [
      "/src/assets/countryFlags/Mongolia.svg",
      "/src/assets/countryFlags/China.svg",
      "/src/assets/countryFlags/Canada.svg",
      "/src/assets/countryFlags/South Korea.svg",
      "/src/assets/countryFlags/United States.svg",
      "/src/assets/countryFlags/Japan.svg",
      "/src/assets/countryFlags/Japan.svg",
    ],
    count: 7,
  },
  {
    year: 2022,
    flags: ["/src/assets/countryFlags/Canada.svg"],
    count: 1,
  },
  {
    year: 2021,
    flags: [
      "/src/assets/countryFlags/Uzbekistan.svg",
      "/src/assets/countryFlags/Canada.svg",
    ],
    count: 2,
  },
  {
    year: 2020,
    flags: ["/src/assets/countryFlags/United States.svg"],
    count: 1,
  },
];

function getStartDate(date: string) {
  return date.split("-")[0];
}

function compareDate(date1: Date, date2: Date, isAscending: boolean) {
  if (date1 < date2) {
    return isAscending ? -1 : 1;
  } else if (date1 > date2) {
    return isAscending ? 1 : -1;
  } else {
    return 0;
  }
}

export function NoteList({
  category,
  sortingOrder,
  params,
  filter = "none",
}: Props) {
  const [data, setData] = useState<any[]>([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  function filterData(data: any[]) {
    if (filter === "none") {
      return data;
    }
    if (filter === "year") {
      return data.filter((item) => item.year === parseInt(params!, 10));
    }
    if (filter === "country") {
      return data.filter((item) => item.country === params);
    }
  }

  function getNoteSummary() {
    const data = mockData.slice();
    const filteredData = filterData(data);

    filteredData!.sort((a, b) => {
      const date1 = new Date(getStartDate(a.date));
      const date2 = new Date(getStartDate(b.date));

      return compareDate(date1, date2, sortingOrder === "ascending");
    });

    return filteredData;
  }

  // TODO: mockData 기반으로 로직 다시 구현
  function getCountrySummary() {
    const data = countryMockData.slice();

    data.sort((a, b) =>
      sortingOrder === "ascending" ? a.count - b.count : b.count - a.count,
    );

    return data;
  }

  // TODO: mockData 기반으로 로직 다시 구현
  function getYearSummary() {
    const data = yearMockData.slice();

    data.sort((a, b) =>
      sortingOrder === "ascending" ? a.year - b.year : b.year - a.year,
    );

    return data;
  }

  useEffect(() => {
    let data: any[] = []; // TODO: union type으로 변경

    switch (category) {
      case "all":
        data = getNoteSummary()!;
        break;
      case "country":
        data = getCountrySummary();
        break;
      case "year":
        data = getYearSummary();
        break;
    }
    setData(data);
    setIsEmpty(data.length === 0);
  }, [category, sortingOrder, params]);

  if (isEmpty) {
    return <div className={s.notfound}>아직 작성된 페이지가 없어요</div>;
  }

  return (
    <div className={s.container}>
      {category === "all" &&
        data.map(({ ...props }, index) => (
          <NoteSummary key={index} setIsPopup={setIsPopup} {...props} />
        ))}
      {category === "country" &&
        data.map(({ ...props }, index) => (
          <CountrySummary key={index} {...props} />
        ))}
      {category === "year" &&
        data.map(({ ...props }, index) => (
          <YearSummary key={index} {...props} />
        ))}
      {isPopup && (
        <Popup title="노트 상세조회 기능 준비중" setIsPopup={setIsPopup} />
      )}
    </div>
  );
}
