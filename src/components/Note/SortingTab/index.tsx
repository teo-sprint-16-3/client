import { useState } from "react";

import s from "./index.module.scss";

export function SortingTab() {
  const [sortingOrder, setSortingOrder] = useState("recent");

  return (
    <div className={s.container}>
      <div
        className={`
        ${s.sortingTab} ${s.left} ${sortingOrder === "recent" ? s.active : ""}`}
        onClick={() => setSortingOrder("recent")}
      >
        <span>최신순</span>
      </div>
      <div
        className={`
        ${s.sortingTab} ${s.right} ${sortingOrder === "old" ? s.active : ""}`}
        onClick={() => setSortingOrder("old")}
      >
        오래된순
      </div>
    </div>
  );
}
