import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import s from "./index.module.scss";
import CountryPopup from "../CountryPopup";

const KOREA_COORD = [129, 37] as [number, number];

interface ClickedPosType {
  y: number;
  x: number;
}

export default function WorldMap() {
  const [currentCountryName, setCurrentCountryName] = useState<string>("");
  const [currentKorName, setCurrentKorName] = useState("");
  const [clickedPos, setClickedPos] = useState<ClickedPosType>({
    y: 0,
    x: 0,
  });
  const [pointBoxOn, setPointBoxOn] = useState(false);
  const handleClickCountry = (
    e: React.MouseEvent,
    name: string,
    korName: string,
  ) => {
    e.stopPropagation();
    setCurrentCountryName(name);
    setCurrentKorName(korName);
    setClickedPos({
      y: e.nativeEvent.offsetY,
      x: e.nativeEvent.offsetX,
    });
    setPointBoxOn(true);
  };

  return (
    <div className={s.wrapper}>
      <ComposableMap className={s.mapBox}>
        <ZoomableGroup center={KOREA_COORD} zoom={7} maxZoom={1000}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const countryKorName = geo.properties.korName;
                const isClicked = currentCountryName === countryName;

                return (
                  <Geography
                    onClick={(e) =>
                      handleClickCountry(e, countryName, countryKorName)
                    }
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
        <CountryPopup
          countryName={currentCountryName}
          clickedPos={clickedPos}
          countryKorName={currentKorName} // TODO: 채우기
        />
      )}
    </div>
  );
}
