import SearchButton from "../../../common/Buttons/SearchButton";
import Label from "../../common/Label";
import s from "./index.module.scss";

interface BgmInputProps {
  onSearchBgm: () => void;
}
export default function BgmInput({ onSearchBgm }: BgmInputProps) {
  const handleSearchBgm = () => {
    onSearchBgm();
  };
  return (
    <div className={s.bgmGroup}>
      <Label htmlFor="bgmSearch" text="BGM" isRequired={false} />
      <SearchButton id="bgmSearch" text="노래 선택" onClick={handleSearchBgm} />
    </div>
  );
}
