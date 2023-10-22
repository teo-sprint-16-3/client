import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

export default function Intro() {
  return (
    <div className={styles.contaner}>
      <header className={styles.headerTitle}>
        <h2> 세계 여행 어디까지 가봤니? </h2>
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footerButton}>
        <button className={styles.loginButton}>소셜 로그인</button>
        <NavLink className={styles.navLink} to="/sample">
          <button className={styles.exploreButton}>둘러보기</button>
        </NavLink>
      </footer>
    </div>
  );
}
