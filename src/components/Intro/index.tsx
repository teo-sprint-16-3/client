import { useState } from "react";
import { useNavigate } from "react-router-dom";
import introLogo from "../../assets/icons/walkTheWorld.gif";
import s from "./index.module.scss";
import Popup from "../common/Popup";

export default function Intro() {
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <div className={s.logoBox}>
        <img className={s.introLogo} src={introLogo} alt="세어봤" />
      </div>
      <div className={s.btnBox}>
        <button
          onClick={() => setIsPopup(true)}
          className={[s.btn, s.loginBtn].join(" ")}
        >
          SNS 로그인
        </button>
        <button
          onClick={() => navigate("/map")}
          className={[s.btn, s.exploreBtn].join(" ")}
        >
          <span>둘러보기</span>
        </button>
      </div>
      {isPopup && <Popup title="로그인 기능 준비중" setIsPopup={setIsPopup} />}
    </div>
  );
}
