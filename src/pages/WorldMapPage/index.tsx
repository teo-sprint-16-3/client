import WorldMap from "../../components/WorldMap";
import GNB from "../../components/GNB";
import s from "./index.module.scss";

export default function WorldMapPage() {
  return (
    <div className={s.wrapper}>
      <WorldMap />
      <GNB />
    </div>
  );
}
