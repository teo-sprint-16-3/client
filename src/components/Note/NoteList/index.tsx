import s from "./index.module.scss";

import { NoteSummary } from "./NoteSummary";
import { CountrySummary } from "./CountrySummary";
import { YearSummary } from "./YearSummary";

interface Props {
  category: string;
}

export function NoteList({ category }: Props) {
  return (
    <div className={s.container}>
      {category === "all" && (
        <NoteSummary
          year={2023}
          country="몽골"
          flag="/src/assets/icons/mongolian-state.png"
          title="몽골 8일차🐴 말타고 초원 달린 날"
          date="2023.07.15"
          location="욜링암 협곡 사이"
          bgm="BOL4 - TRAVEL"
          image="/src/assets/images/note1.png"
        />
      )}
      {category === "country" && (
        <CountrySummary
          flag="/src/assets/icons/mongolian-state.png"
          name="몽골"
          count={13}
        />
      )}
      {category === "year" && (
        <YearSummary
          year={2023}
          flags={[
            "/src/assets/icons/mongolian-state.png",
            "/src/assets/icons/korea.png",
            "/src/assets/icons/korea.png",
            "/src/assets/icons/korea.png",
            "/src/assets/icons/korea.png",
            "/src/assets/icons/korea.png",
            "/src/assets/icons/korea.png",
          ]}
          count={7}
        />
      )}

      {/* <NoteSummary
        year={2023}
        country="몽골"
        flag="/src/assets/icons/mongolian-state.png"
        title="몽골 8일차🐴 말타고 초원 달린 날"
        date="2023.07.15"
        location="욜링암 협곡 사이"
        bgm="BOL4 - TRAVEL"
        image="/src/assets/images/note1.png"
      />
      <NoteSummary
        year={2023}
        country="몽골"
        flag="/src/assets/icons/mongolian-state.png"
        title="몽골 강아지들 진짜 귀엽다🐕 왕크왕귀"
        date="2023.07.14"
        image="/src/assets/images/note2.png"
      />
      <NoteSummary
        year={2023}
        country="대한민국"
        flag="/src/assets/icons/korea.png"
        title="넘넘 즐거웠던 경주여행 3"
        date="2022.05.08-2023.05.15"
      />
      <CountrySummary
        flag="/src/assets/icons/mongolian-state.png"
        name="몽골"
        count={13}
      />
      <CountrySummary
        flag="/src/assets/icons/korea.png"
        name="대한민국"
        count={1}
      />
      <YearSummary
        year={2023}
        flags={[
          "/src/assets/icons/mongolian-state.png",
          "/src/assets/icons/korea.png",
          "/src/assets/icons/korea.png",
          "/src/assets/icons/korea.png",
          "/src/assets/icons/korea.png",
          "/src/assets/icons/korea.png",
          "/src/assets/icons/korea.png",
        ]}
        count={7}
      />
      <YearSummary
        year={2023}
        flags={[
          "/src/assets/icons/mongolian-state.png",
          "/src/assets/icons/korea.png",
        ]}
        count={2}
      /> */}
    </div>
  );
}
