import s from "./index.module.scss";

interface Props {
  category: string;
  sortingOrder: string;
  handleSortingOrder: (order: string) => void;
}

export function SortingTab({
  category,
  sortingOrder,
  handleSortingOrder,
}: Props) {
  return (
    <div className={s.container}>
      <button
        className={`
        ${s.sortingTab} ${s.left} ${
          sortingOrder === "descending" ? s.active : ""
        }`}
        onClick={() => handleSortingOrder("descending")}
      >
        {category !== "country" ? "최신순" : "게시글 내림차순"}
      </button>
      <button
        className={`
        ${s.sortingTab} ${s.right} ${
          sortingOrder === "ascending" ? s.active : ""
        }`}
        onClick={() => handleSortingOrder("ascending")}
      >
        {category !== "country" ? "오래된순" : "게시글 오름차순"}
      </button>
    </div>
  );
}
