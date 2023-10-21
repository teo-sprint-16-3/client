import { useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

const { Kakao }: any = window;

const My = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const localUrl = "http://127.0.0.1:5173/my";

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("75c50c5dc28a7b915981b7342aa59a7b");
    console.log(Kakao.isInitialized());
  }, []);

  const dataURLtoFile = (dataurl: string, filename: string) => {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleDownload = async () => {
    if (!screenRef.current) return;

    try {
      let imgUrl;
      const screen = screenRef.current;
      const canvas = await html2canvas(screen, { scale: 2 });
      const url = canvas.toDataURL("image.png");
      const file = new Array(dataURLtoFile(url, "index"));

      await Kakao.Share.uploadImage({
        file: file,
      })
        .then(function (res: any) {
          imgUrl = res.infos.original.url;
          console.log(res.infos.original.url);
        })
        .catch(function (err: any) {
          console.log(err);
        });

      await Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "릿의 뱃지",
          description: "릿의 여행기록입니다.",
          imageUrl: imgUrl,
          link: {
            mobileWebUrl: localUrl,
          },
        },
        buttons: [
          {
            title: "나도 세어봤 이용하러가기",
            link: {
              mobileWebUrl: localUrl,
            },
          },
        ],
      }).catch((err: any) => {
        console.log(err);
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.tit}>마이페이지</h1>
      <div className={styles.contents} ref={screenRef}>
        <div className={styles.myImg}>
          <span>사진</span>
        </div>
        <div className={styles.infoWrap}>
          <p className={styles.nickname}>
            용맹한 여행자 <strong>닉네임</strong>
          </p>
          <span className={styles.badgeNotice}>
            0번 더 여행시 <strong>대륙의 정복자</strong> 뱃지를 얻을 수 있어요
          </span>
        </div>
        <div className={styles.statWrap}>
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
      <Link to="/" className={styles.myBadgeStatus}>
        <div className={styles.badgeImg} />
        <span>획득 뱃지</span>
      </Link>
      <button className={styles.shareBtn} onClick={handleDownload}>
        공유하기 btn
      </button>
    </section>
  );
};

export default My;
