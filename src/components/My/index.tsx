import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import s from "./index.module.scss";
import shareKakaotalk from "./util/shareKakaotalk";

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
      <h1 className={s.tit}>마이페이지</h1>
      <div className={s.contents} ref={screenRef}>
        <div className={s.myImg}>
          <span>사진</span>
        </div>
        <div className={s.infoWrap}>
          <p className={s.nickname}>
            용맹한 여행자 <strong>닉네임</strong>
          </p>
          <span className={s.badgeNotice}>
            0번 더 여행시 <strong>대륙의 정복자</strong> 뱃지를 얻을 수 있어요
          </span>
        </div>
        <div className={s.statWrap}>
          <dl>
            <dt>총 여행국가</dt>
            <dd>
              <Link to="/">000개국</Link>
            </dd>
          </dl>
          <dl>
            <dt>총 여행일</dt>
            <dd>
              <Link to="/">000일</Link>
            </dd>
          </dl>
          <dl>
            <dt>총 페이지</dt>
            <dd>
              <Link to="/">000개</Link>
            </dd>
          </dl>
        </div>
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
