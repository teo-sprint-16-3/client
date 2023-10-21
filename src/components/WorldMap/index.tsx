import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import s from "./index.module.scss";

export default function WorldMap() {
  return (
    <div className={s.wrapper}>
      <ComposableMap className={s.mapBox}>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className={s.mapGeography}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
