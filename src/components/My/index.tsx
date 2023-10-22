import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import s from "./index.module.scss";
import shareKakaotalk from "./util/shareKakaotalk";
import Header from "../My/common/Header";

const { Kakao }: any = window;

const My = () => {
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("75c50c5dc28a7b915981b7342aa59a7b");
    console.log(Kakao.isInitialized());
  }, []);

  const handleDownload = () => {
    if (!screenRef.current) return;

    shareKakaotalk(screenRef);
  };

  return (
    <section className={s.container}>
      <Header title="마이페이지" />
      <div className={s.contents} ref={screenRef}>
        <div className={s.myImg}>
          <span>사진</span>
        </div>
        <div className={s.infoWrap}>
          <h2>소금</h2>
          <span className={s.nickname}>용맹한 여행자</span>
          <span className={s.badgeNotice}>
            0번 더 여행시 <strong>대륙의 정복자</strong> 뱃지를 얻을 수 있어요
          </span>
        </div>
        <ul className={s.statWrap}>
          <li>
            <Link to="/">
              <span>12</span>국
            </Link>
            <span>상위 30%</span>
            <span>총 여행국가</span>
          </li>
          <li>
            <Link to="/">
              <span>000</span>일
            </Link>
            <span>상위 42%</span>
            <span>총 여행일</span>
          </li>
          <li>
            <Link to="/">
              <span>000</span>개
            </Link>
            <span>상위 9%</span>
            <span>총 페이지</span>
          </li>
        </ul>
      </div>
      <Link to="/" className={s.myBadgeStatus}>
        <div className={s.badgeImg} />
        <span>획득 뱃지</span>
      </Link>
      <button className={s.shareBtn} onClick={handleDownload}>
        공유하기 btn
      </button>
    </section>
  );
};

export default My;
