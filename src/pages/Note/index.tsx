import { useState } from "react";
import { useParams } from "react-router-dom";

import { NoteHeader } from "../../components/Note/NoteHeader";
import { FilterHeader } from "../../components/Note/FilterHeader";
import { CategoryTab } from "../../components/Note/CategoryTab";
import { SortingTab } from "../../components/Note/SortingTab";
import { NoteList } from "../../components/Note/NoteList";
import { WriteButton } from "../../components/Note/common/WriteButton";
import GNB from "../../components/GNB";
import { useRecoilState } from "recoil";
import {
  focusMapState,
  focusNoteState,
  focusMyState,
} from "../../recoil/sample/atom";

import s from "./index.module.scss";
import CreateNotePage from "./CreateNotePage";

export function Note() {
  const [openModal, setOpenModal] = useState(false);
  const [count, setCount] = useState(1);
  console.log(openModal);

  const [focusMap, setFocusMap] = useRecoilState(focusMapState);
  const [focusNote, setFocusNote] = useRecoilState(focusNoteState);
  const [focusMy, setFocusMy] = useRecoilState(focusMyState);
  if (focusMap) setFocusMap(!focusMap);
  if (!focusNote) setFocusNote(!focusNote);
  if (focusMy) setFocusMy(!focusMy);

  return (
    <div className={s.container}>
      {openModal && <CreateNotePage setOpenModal={setOpenModal} />}
      <NoteHeader />
      <FilterHeader title="몽골" />
      <CategoryTab />
      <SortingTab />
      <div className={s.wrapper}>
        {count === 0 ? (
          <div className={s.notfound}>아직 작성된 페이지가 없어요</div>
        ) : (
          <NoteList />
        )}
        <WriteButton openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <GNB />
    </div>
  );
}
