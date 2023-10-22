import { useState } from "react";
import { useParams } from "react-router-dom";

import { FilterHeader } from "../../../components/Note/FilterHeader";
import { SortingTab } from "../../../components/Note/SortingTab";
import { WriteButton } from "../../../components/Note/common/WriteButton";
import { NoteList } from "../../../components/Note/NoteList";
import GNB from "../../../components/GNB";

import s from "./index.module.scss";

export function FilterNote() {
  const [sortingOrder, setSortingOrder] = useState("descending");
  const [openModal, setOpenModal] = useState(false);

  const { params } = useParams();

  function handleSortingOrder(order: string) {
    setSortingOrder(order);
  }

  const isYear = /^\d{4}$/.test(params!);

  return (
    <div className={s.container}>
      <FilterHeader title={params!} />
      <SortingTab
        category="all"
        sortingOrder={sortingOrder}
        handleSortingOrder={handleSortingOrder}
      />
      <div className={s.wrapper}>
        {isYear ? (
          <NoteList
            category="all"
            sortingOrder={sortingOrder}
            params={params}
            filter="year"
          />
        ) : (
          <NoteList
            category="all"
            sortingOrder={sortingOrder}
            params={params}
            filter="country"
          />
        )}
        <WriteButton openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <GNB />
    </div>
  );
}
