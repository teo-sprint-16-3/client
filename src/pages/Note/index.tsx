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

export function Note() {
  const [category, setCategory] = useState("all");
  const [sortingOrder, setSortingOrder] = useState("descending");

  // 임시
  const [count, setCount] = useState(10);

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
      <NoteHeader />
      <CategoryTab category={category} handleCategory={handleCategory} />
      <SortingTab
        category={category}
        sortingOrder={sortingOrder}
        handleSortingOrder={handleSortingOrder}
      />
      <div className={s.wrapper}>
        {count === 0 ? (
          <div className={s.notfound}>아직 작성된 페이지가 없어요</div>
        ) : (
          <NoteList category={category} />
        )}
        <WriteButton />
      </div>
      <GNB />
    </div>
  );
}
