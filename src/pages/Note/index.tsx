import { Header } from "../../components/Note/Header";
import { CategoryTab } from "../../components/Note/CategoryTab";
import { SortingTab } from "../../components/Note/SortingTab";
import { NoteList } from "../../components/Note/NoteList";
import { WriteButton } from "../../components/Note/common/WriteButton";

import s from "./index.module.scss";

export function Note() {
  return (
    <div className={s.container}>
      <Header />
      <CategoryTab />
      <div className={s.wrapper}>
        <SortingTab />
        <NoteList />
        <WriteButton />
      </div>
      {/* <GNB /> */}
    </div>
  );
}
