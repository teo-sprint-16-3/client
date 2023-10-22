import s from "./index.module.scss";

interface PopupProps {
  title?: string;
  subTitle?: string;
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup({
  title = "준비중",
  subTitle = "열심히 준비하고 있어요",
  setIsPopup,
}: PopupProps) {
  return (
    <>
      <div className={s.overlay}></div>
      <div className={s.wrapper}>
        <div className={s.titleBox}>
          <h2 className={s.title}>{title}</h2>
          <h3 className={s.subtitle}>{subTitle}</h3>
        </div>
        <button onClick={() => setIsPopup(false)} className={s.confirmBtn}>
          확인
        </button>
      </div>
    </>
  );
}
