import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useRecoilState } from "recoil";
import s from "./index.module.scss";
import { countryNameState } from "../../recoil/country/atom.ts";
import { isSavedName } from "../../utils";

const KOREA_COORD = [129, 37] as [number, number];

interface ClickedPosType {
  y: number;
  x: number;
}

export default function WorldMap() {
  const [countryNameList, setCountryNameList] =
    useRecoilState(countryNameState);
  const [currentCountry, setCurrentCountry] = useState<string>("");
  const [clickedPos, setClickedPos] = useState<ClickedPosType>({
    y: 0,
    x: 0,
  });
  const [pointBoxOn, setPointBoxOn] = useState(false);
  const handleClickCountry = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    setCurrentCountry(name);
    setClickedPos({
      y: e.nativeEvent.offsetY,
      x: e.nativeEvent.offsetX,
    });
    setPointBoxOn(true);
  };

  const countryNameSave = (name: string, korName: string) => {
    if (!isSavedName(name, countryNameList)) {
      setCountryNameList((currVal) => [...currVal, { name, korName }]);
    }
  };

  return (
    <div className={s.wrapper}>
      <ComposableMap className={s.mapBox}>
        <ZoomableGroup center={KOREA_COORD} zoom={7} maxZoom={1000}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const isClicked = currentCountry === countryName;

                return (
                  <Geography
                    onClick={(e) => handleClickCountry(e, countryName)}
                    key={geo.rsmKey}
                    geography={geo}
                    className={[
                      s.country,
                      isClicked ? s.clickedCountry : "",
                    ].join(" ")}
                    stroke="#444"
                    strokeWidth={0.05}
                    style={{
                      default: { fill: "#dddddd" },
                      hover: { fill: "#1472ff" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {pointBoxOn && (
        <div
          className={s.popup}
          style={{
            position: "absolute",
            left: clickedPos.x + 1 + "px",
            top: clickedPos.y + 1 + "px",
          }}
        >
          <p>{currentCountry}</p>
        </div>
      )}
    </div>
  );
}
