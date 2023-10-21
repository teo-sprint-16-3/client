import WorldMap from "../../components/WorldMap";
import GNB from "../../components/GNB";
import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <div className={styles.wrapper}>
      <WorldMap />
      <GNB />
      <Intro />
    </div>
  );
}
