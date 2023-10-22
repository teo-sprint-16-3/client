import s from "./index.module.scss";

interface Props {
  category: string;
  handleCategory: (category: string) => void;
}

export function CategoryTab({ category, handleCategory }: Props) {
  return (
    <div className={s.container}>
      <button
        className={`
        ${s.categoryTab} ${category === "all" ? s.active : ""}`}
        onClick={() => handleCategory("all")}
      >
        전체
      </button>
      <button
        className={`
        ${s.categoryTab} ${category === "country" ? s.active : ""}`}
        onClick={() => handleCategory("country")}
      >
        국가
      </button>
      <button
        className={`
        ${s.categoryTab} ${category === "year" ? s.active : ""}`}
        onClick={() => handleCategory("year")}
      >
        연도
      </button>
    </div>
  );
}
