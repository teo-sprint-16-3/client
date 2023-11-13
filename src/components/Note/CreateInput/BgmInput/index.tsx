import { useState } from "react";
import BottomSheet from "../../common/BottomSheet";
import SearchButton from "../../common/Buttons/SearchButton";
import Label from "../../common/Label";
import s from "./index.module.scss";
import Bgms from "../../common/Bgms";

// type BgmInfo = {
//   url: string;
// };
interface BgmInputProps {
  sheetContent: string;
  isBottomSheetOpen: boolean;
  onClose: () => void;
  onSearchBgm: (content: string) => void;
}
export default function BgmInput({
  sheetContent,
  isBottomSheetOpen,
  onClose,
  onSearchBgm,
}: BgmInputProps) {
  const [openBgm, setOpenBgm] = useState(false);

  const handleSearchBgm = () => {
    onSearchBgm("bgm");
    setOpenBgm(true);
  };

  const handleSaveButton = () => {
    setOpenBgm(false);
    onClose();
  };

  return (
    <div className={s.bgmGroup}>
      <Label htmlFor="bgmSearch" text="BGM" isRequired={false} />
      <SearchButton id="bgmSearch" text="노래 선택" onClick={handleSearchBgm} />

      <div>
        {isBottomSheetOpen && sheetContent === "bgm" && (
          <BottomSheet
            title="국가 선택"
            onSave={handleSaveButton}
            onClose={onClose}
          >
            <div className={s.countryContent}>{openBgm && <Bgms />}</div>
          </BottomSheet>
        )}
      </div>
    </div>
  );
}
