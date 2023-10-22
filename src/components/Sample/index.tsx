import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

export default function Sample() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ingImg}></div>
      <h2>준비중 입니다.</h2>
      <NavLink className={styles.backLink} to="/">
        <button className={styles.backButton}>돌아가기</button>
      </NavLink>
    </div>
  );
}
