import { useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import "./mypage.scss";

const { Kakao }: any = window;

const MyPage = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const localUrl = "http://127.0.0.1:5173/myPage";

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
    <section className="myPageContainer">
      <h2 className="myPageTit">마이페이지</h2>
      <div className="myPageContents" ref={screenRef}>
        <div className="myPageMyImg">
          <span>사진</span>
        </div>
        <div className="myPageInfoWrap">
          <p className="myPageMyNickname">
            용맹한 여행자 <strong>닉네임</strong>
          </p>
          <span className="myPageBadgeNotice">
            0번 더 여행시 <strong>대륙의 정복자</strong> 뱃지를 얻을 수 있어요
          </span>
        </div>
        <div className="myPageStatWrap">
          <dl>
            <dt>총 여행국가</dt>
            <dd>
              <button>000개국</button>
            </dd>
          </dl>
          <dl>
            <dt>총 여행일</dt>
            <dd>
              <button>000일</button>
            </dd>
          </dl>
          <dl>
            <dt>총 페이지</dt>
            <dd>
              <button>000개</button>
            </dd>
          </dl>
        </div>
      </div>
      <button className="myPageGetBadgeStatus">
        <div className="myPageBadgeImg" />
        <span>획득 뱃지</span>
      </button>
      <button className="myPageShareBtn" onClick={handleDownload}>
        공유하기 btn
      </button>
    </section>
  );
};

export default MyPage;
function downloadURI(img: any, arg1: string) {
  throw new Error("Function not implemented.");
}
