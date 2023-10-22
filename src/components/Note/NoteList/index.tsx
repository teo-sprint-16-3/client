import s from "./index.module.scss";

import { NoteSummary } from "./NoteSummary";

export function NoteList() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
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
      </div>
    </div>
  );
}
