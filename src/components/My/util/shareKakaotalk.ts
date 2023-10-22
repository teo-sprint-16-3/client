import html2canvas from "html2canvas";

const { Kakao }: any = window;

const shareKakaotalk = async (ref: React.RefObject<HTMLDivElement>) => {
  const screen = ref.current;

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

  try {
    if (screen !== null) {
      const canvas = await html2canvas(screen, { scale: 2 });
      const url = canvas.toDataURL("image.png");
      const file = new Array(dataURLtoFile(url, "index"));

      const res = await Kakao.Share.uploadImage({ file: file });
      const imgUrl = res.infos.original.url;
      const siteUrl = "";

      await Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "릿의 뱃지",
          description: "릿의 여행기록입니다.",
          imageUrl: imgUrl,
          link: {
            mobileWebUrl: siteUrl,
            webUrl: siteUrl,
          },
        },
        buttons: [
          {
            title: "사이트 바로가기",
            link: {
              mobileWebUrl: siteUrl,
              webUrl: siteUrl,
            },
          },
        ],
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export default shareKakaotalk;
