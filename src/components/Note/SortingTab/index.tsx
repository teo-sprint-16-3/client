import { useState } from "react";

import s from "./index.module.scss";

export function SortingTab() {
  const [sortingOrder, setSortingOrder] = useState("recent");

  return (
    <div className={s.container}>
      <button
        className={`
        ${s.sortingTab} ${s.left} ${sortingOrder === "recent" ? s.active : ""}`}
        onClick={() => setSortingOrder("recent")}
      >
        최신순
      </button>
      <button
        className={`
        ${s.sortingTab} ${s.right} ${sortingOrder === "old" ? s.active : ""}`}
        onClick={() => setSortingOrder("old")}
      >
        오래된순
      </button>
    </div>
  );
}
