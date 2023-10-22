import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import s from "./index.module.scss";

const KOREA_COORD = [129, 37] as [number, number];

export default function WorldMap() {
  return (
    <div className={s.wrapper}>
      <ComposableMap className={s.mapBox}>
        <ZoomableGroup center={KOREA_COORD} zoom={7}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.name;
                console.log(name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={s.country}
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
    </div>
  );
}
