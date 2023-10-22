// import { useNavigate } from "react-router-dom";
import introLogo from "../../assets/icons/introLogo.svg";
import s from "./index.module.scss";

export default function Intro() {
  return (
    <div className={s.wrapper}>
      <div className={s.logoBox}>
        <img className={s.introLogo} src={introLogo} alt="세어봤" />
      </div>
      <div className={s.btnBox}>
        <button className={[s.btn, s.loginBtn].join(" ")}>SNS 로그인</button>
        <button className={[s.btn, s.exploreBtn].join(" ")}>
          <span>둘러보기</span>
        </button>
      </div>
    </div>
  );
}
