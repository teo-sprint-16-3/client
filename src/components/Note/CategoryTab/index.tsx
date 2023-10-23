import { useState } from "react";

import s from "./index.module.scss";

export function CategoryTab() {
  const [category, setCategory] = useState("all");

  return (
    <div className={s.container}>
      <button
        className={`
        ${s.categoryTab} ${category === "all" ? s.active : ""}`}
        onClick={() => setCategory("all")}
      >
        전체
      </button>
      <button
        className={`
        ${s.categoryTab} ${category === "country" ? s.active : ""}`}
        onClick={() => setCategory("country")}
      >
        국가
      </button>
      <button
        className={`
        ${s.categoryTab} ${category === "year" ? s.active : ""}`}
        onClick={() => setCategory("year")}
      >
        연도
      </button>
    </div>
  );
}
