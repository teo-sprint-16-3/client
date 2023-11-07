import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import s from "./index.module.scss";
import shareKakaotalk from "./util/shareKakaotalk";
import Header from "../My/common/Header";
import RigthArrowIcon from "../../assets/icons/rightArrow.svg";
import DefaultProfile from "../../assets/icons/defaultProfile.svg";
import Popup from "../common/Popup";

const { Kakao }: any = window;

const My = () => {
  const [isPopup, setIsPopup] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("75c50c5dc28a7b915981b7342aa59a7b");
  }, []);

  const handleOpenPopup = () => {
    setIsPopup((prev) => !prev);
  };

  return (
    <section className={s.container}>
      <Header title="마이페이지" />
      {isPopup && <Popup setIsPopup={setIsPopup} />}
      <div className={s.contents} ref={screenRef}>
        <div className={s.myImg}>
          <img src={DefaultProfile} alt="프로필사진" />
        </div>
        <div className={s.infoWrap}>
          <h2 className={s.nickname}>소금</h2>
          <span className={s.badge}>아시아 탐험가</span>
          <span className={s.badgeNotice}>아시아 5개국을 다녀왔어요</span>
        </div>
        <ul className={s.statWrap}>
          <li>
            <ul className={s.statDetailWrap}>
              <li className={s.statBtn}>
                <Link to="/my/stamp">
                  <span>12</span>국
                </Link>
              </li>
              <li className={s.statGrade}>상위 30%</li>
              <li className={s.statTit}>총 여행국가</li>
            </ul>
          </li>
          <li>
            <ul className={s.statDetailWrap}>
              <li className={s.statBtn}>
                <button type="button" onClick={handleOpenPopup}>
                  <span>653</span>일
                </button>
              </li>
              <li className={s.statGrade}>상위 42%</li>
              <li className={s.statTit}>총 여행일</li>
            </ul>
          </li>
          <li>
            <ul className={s.statDetailWrap}>
              <li className={s.statBtn}>
                <Link to="/note">
                  <span>155</span>개
                </Link>
              </li>
              <li className={s.statGrade}>상위 9%</li>
              <li className={s.statTit}>총 페이지</li>
            </ul>
          </li>
        </ul>
      </div>
      <Link to="/my/badge" className={s.myBadgeStatus}>
        <span>획득 뱃지</span>
        <img src={RigthArrowIcon} alt="바로가기" />
      </Link>
      <button className={s.shareBtn} onClick={handleOpenPopup}>
        <span>내 여행기록 공유하기</span>
      </button>
    </section>
  );
};

export default My;
