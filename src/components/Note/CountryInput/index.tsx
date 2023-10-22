import SearchButton from "../../common/Buttons/SearchButton";
import Label from "../common/Label";
import s from "./index.module.scss";

export default function CountryInput({ onSelectCountry }) {
  const handleSelectCountry = () => {
    onSelectCountry();
  };

  return (
    <div className={s.countryGroup}>
      <Label htmlFor="countrySelect" text="국가" isRequired={true} />
      <SearchButton
        id="countrySelect"
        text="국가 선택"
        onClick={handleSelectCountry}
      />
    </div>
  );
}
