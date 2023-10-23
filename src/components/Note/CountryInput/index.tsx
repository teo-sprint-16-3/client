import { useState } from "react";
import SearchButton from "../../common/Buttons/SearchButton";
import Countries from "../../common/Countries";
import BottomSheet from "../common/BottomSheet";
import Label from "../common/Label";
import s from "./index.module.scss";

type CountryInfo = {
  id: string;
  properties: {
    name: string;
    korName: string;
  };
};
interface CountryInputProps {
  sheetContent: string;
  country: CountryInfo;
  setCountry: (country: CountryInfo) => void;
  isBottomSheetOpen: boolean;
  onClose: () => void;
  onSelectCountry: (content: string) => void;
}

export default function CountryInput({
  sheetContent,
  country,
  setCountry,
  isBottomSheetOpen,
  onClose,
  onSelectCountry,
}: CountryInputProps) {
  const [openCountry, setOpenCountry] = useState(false);

  const handleSelectCountry = () => {
    onSelectCountry("country");
    setOpenCountry(true);
  };

  const handleCountryClick = (country: CountryInfo) => {
    setCountry(country);
  };

  const handleSaveButton = () => {
    setOpenCountry(false);
    setCountry(country);
    onClose();
  };

  return (
    <div className={s.countryGroup}>
      <Label htmlFor="countrySelect" text="국가" isRequired={true} />
      <SearchButton
        id="countrySelect"
        text={country ? country?.properties?.korName : "국가 선택"}
        onClick={handleSelectCountry}
      />

      <div>
        {isBottomSheetOpen && sheetContent === "country" && (
          <BottomSheet
            title="국가 선택"
            onSave={handleSaveButton}
            onClose={onClose}
          >
            <div className={s.countryContent}>
              {openCountry && (
                <Countries handleCountrySelect={handleCountryClick} />
              )}
            </div>
          </BottomSheet>
        )}
      </div>
    </div>
  );
}
