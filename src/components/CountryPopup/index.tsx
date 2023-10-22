import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import s from "./index.module.scss";
import { isSavedName } from "../../utils";
import { countryNameState } from "../../recoil/country/atom.ts";

interface ClickedPosType {
  y: number;
  x: number;
}

interface CountryPopupProps {
  clickedPos: ClickedPosType;
  countryName: string;
  countryKorName: string;
}

export default function CountryPopup({
  clickedPos,
  countryName,
  countryKorName,
}: CountryPopupProps) {
  const [countryNameList, setCountryNameList] =
    useRecoilState(countryNameState);
  const navigate = useNavigate();

  const countryNameSave = (name: string, korName: string) => {
    if (!isSavedName(name, countryNameList)) {
      setCountryNameList((currVal) => [...currVal, { name, korName }]);
    }
  };

  const handleClick = () => {
    countryNameSave(countryName, countryKorName);
    navigate(`../note/${countryName}`);
  };
  return (
    <div
      onClick={handleClick}
      className={s.popup}
      style={{
        position: "absolute",
        left: clickedPos.x + 1 + "px",
        top: clickedPos.y + 1 + "px",
      }}
    >
      <p>{countryKorName}</p>
    </div>
  );
}
