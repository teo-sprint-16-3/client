import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import s from "./index.module.scss";

export default function WorldMap() {
  return (
    <div className={s.wrapper}>
      <ComposableMap className={s.mapBox}>
        <ZoomableGroup zoom={9}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                console.log(geo);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={s.mapGeography}
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
