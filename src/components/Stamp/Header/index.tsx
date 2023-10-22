import Back from "../../../assets/icons/back.svg";
import More from "../../../assets/icons/more.svg";
import styles from "./index.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={Back} alt="back" />
      <div className={styles.title}>여행 국가</div>
      <img src={More} alt="more" />
    </div>
  );
}
