import SearchIcon from "../../../../assets/icons/search.svg";
import s from "./index.module.scss";

interface SearchButtonProps {
  id: string;
  text: string;
  onClick: () => void;
}

export default function SearchButton({ id, text, onClick }: SearchButtonProps) {
  return (
    <button type="button" id={id} onClick={onClick} className={s.searchButton}>
      <span className={s.inputText}>{text}</span>
      <img src={SearchIcon} alt="검색" />
    </button>
  );
}
