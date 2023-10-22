import { useState } from "react";

import { NoteHeader } from "../../components/Note/NoteHeader";

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
  const [category, setCategory] = useState("all");
  const [sortingOrder, setSortingOrder] = useState("descending");

  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  const [focusMap, setFocusMap] = useRecoilState(focusMapState);
  const [focusNote, setFocusNote] = useRecoilState(focusNoteState);
  const [focusMy, setFocusMy] = useRecoilState(focusMyState);
  if (focusMap) setFocusMap(!focusMap);
  if (!focusNote) setFocusNote(!focusNote);
  if (focusMy) setFocusMy(!focusMy);

  // 카테고리를 바꾸면 카테고리명이 바뀌고 정렬 순서가 내림차순으로 초기화됨
  function handleCategory(category: string) {
    setCategory(category);
    setSortingOrder("descending");
  }

  function handleSortingOrder(order: string) {
    setSortingOrder(order);
  }

  return (
    <div className={s.container}>
      {openModal && <CreateNotePage setOpenModal={setOpenModal} />}
      <NoteHeader />
      <CategoryTab category={category} handleCategory={handleCategory} />
      <SortingTab
        category={category}
        sortingOrder={sortingOrder}
        handleSortingOrder={handleSortingOrder}
      />
      <div className={s.wrapper}>
        <NoteList category={category} sortingOrder={sortingOrder} />
        <WriteButton openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <GNB />
    </div>
  );
}
